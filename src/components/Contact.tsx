import Link from "next/link";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col pt-10 justify-between items-center sm:flex-row"
    >
      <h1 className="text-3xl sm:mx-24">Contact</h1>
      <div className="flex flex-col items-center text-xl sm:text-lg">
        <p className="text-xl font-semibold">
          I am always open to new opportunities
        </p>
        <p>Have a project and need a developer? </p>
        <p>
          Send me an {""}
          <a
            className="text-info font-semibold hover:text-secondary-focus"
            href="mailto:jonathan@codebyjd.com"
          >
            email
          </a>
        </p>
      </div>
      <div className="flex flex-col sm:mx-24">
        <h2 className="text-2xl py-2">Find me on</h2>
        <div className="flex flex-row justify-center space-x-6 pb-4">
          <Link href={"https://github.com/Jdure"}>
            {" "}
            <RxGithubLogo className="text-3xl" />
          </Link>
          <Link href={"https://ca.linkedin.com/in/jonathan-dure"}>
            <RxLinkedinLogo className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};
