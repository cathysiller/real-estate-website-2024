"use client";

import { Form } from "@/components/form";
import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center pb-24">
        <span className={title()}>Let&apos;s&nbsp;</span>
        <span className={title({ color: "violet" })}>solve&nbsp;</span>
        <span className={title()}>your</span>
        <br />
        <span className={title()}>
          real estate problems and get you some cash 💰
        </span>
      </div>

      <div id="contact">
        <Form />
      </div>
    </section>
  );
}
