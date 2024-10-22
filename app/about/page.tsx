import { paragraph, title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <div className="pt-16">
        {" "}
        <p className="pb-8">
          Hi, my name is{" "}
          <span className={paragraph({ color: "violet" })}>
            {" "}
            Catherine Siller&nbsp;
          </span>
          and I am born/raised in San Antonio, TX. I attended Incarnate Word
          High School (2007), UTSA (BA-History), and Our Lady of the Lake
          University (MS - Information Systems and Security). I have worked as a
          software developer for the past 8 years and have always an affinity
          for real estate investing.
        </p>
        <p>
          My goal is to help people know all of the options to stay in their
          homes. If you have an issue,{" "}
          <span className={paragraph({ color: "violet" })}>
            {" "}
            let&apos;s see if I can help!&nbsp;
          </span>
          Disclaimer: not a real estate agent/do not want to list your house for
          sale.
        </p>
      </div>
    </div>
  );
}
