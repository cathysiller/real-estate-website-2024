import { paragraph, title } from "@/components/primitives";
import Link from "next/link";

export default function IssuesPage() {
  return (
    <div>
      <h1 className={title()}>Issue We Can Help Solve</h1>

      <div className="pt-16">
        {" "}
        <ul>
          <li className="pb-4">Behind on taxes</li>
          <li className="pb-4">Behind on mortgage</li>
          <li className="pb-4">Need to sell home quick</li>
          <li className="pb-4">Vacant house</li>
          <li className="pb-4">House acquired from inheritance</li>
          <li className="pb-8">
            PS - quick close without realtor related fees or costs for you
          </li>
        </ul>
        <Link href="/contact">
          <button className="rounded-md p-2.5 light:text-black border-black border-solid border-1 dark:text-white dark:border-white lg:w-4/12">
            Contact Me Now
          </button>
        </Link>
      </div>
    </div>
  );
}
