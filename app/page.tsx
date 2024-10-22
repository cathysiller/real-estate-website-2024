"use client";

import { Form } from "@/components/form";
import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center pb-24">
        <span className={title()}>Let&apos;explore the &nbsp;</span>
        <span className={title({ color: "violet" })}>options&nbsp;</span>
        <span className={title()}>for your</span>
        <br />
        <span className={title()}>real estate needs 💰</span>
      </div>

      <div id="contact" className="w-full md:w-8/12">
        <Form />
      </div>
    </section>
  );
}
