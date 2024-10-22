import React, { useRef, useState } from "react";
import { Divider } from "@nextui-org/divider";
import "@/styles/form.css";
import { useTheme } from "next-themes";

export const Form = () => {
  // create a Ref to access our form element
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { theme } = useTheme();

  console.log(theme);

  const sendFormData = async (event: any) => {
    // this will prevent your form to redirect to another page.
    event.preventDefault();

    if (!formRef.current) {
      console.log("something wrong with form ref");

      return;
    }

    // get our form data
    const formData = new FormData(formRef.current);

    // add some additional data if you want
    // formData.append('language', window.navigator.language)

    fetch("https://formcarry.com/s/1KKqtkzPu-o", {
      method: "POST",
      body: formData,
      headers: {
        // you don't have to set Content-Type
        // otherwise it won't work due to boundary!
        Accept: "application/json",
      },
    })
      // convert response to json
      .then((r) => r.json())
      .then((res) => {
        console.log(res.code);
      });
    setSuccess(true);
  };

  return (
    // bind formRef to our form element
    <>
      <form ref={formRef} className="text-center" onSubmit={sendFormData}>
        <p className="space-y-4">catbuyshousesnow@gmail.com</p>
        <p>Tel: 210-392-2084</p>
        <Divider className="my-4" />
        <label htmlFor="nameInput">Full name*</label>
        <input required id="nameInput" name="name" type="text" />

        <label htmlFor="emailInput">Email address*</label>
        <input required id="emailInput" name="name" type="email" />

        <label className="label" htmlFor="messageInput">
          Tell me a little about your issue!*
        </label>
        <textarea required id="messageInput" name="message" />

        <button
          className="light:text-black border-black border-solid border-1 dark:text-white dark:border-white lg:w-4/12"
          type="submit"
        >
          Send
        </button>
      </form>

      {success && (
        <div className="successMessage text-center">
          {"Thank you for reaching out, I will contact you soon!"}
        </div>
      )}
    </>
  );
};
