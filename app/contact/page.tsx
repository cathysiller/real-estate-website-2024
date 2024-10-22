"use client";

import { Form } from "@/components/form";
import { title } from "@/components/primitives";

export default function ContactPage() {
  return (
    <div>
      <h1 className={title()}>Contact Me</h1>
      <div className="pt-16">
        <Form />
      </div>
    </div>
  );
}
