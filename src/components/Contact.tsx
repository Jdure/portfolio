import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const Contact = () => {
  return (
    <div id="contact" className="flex flex-col justify-evenly items-center">
      <h1 className="text-2xl py-2">Contact</h1>
      <p className="text-lg">Have a project and need a developer? </p>
      <p>
        Send me an {""}
        <a
          className="text-info text-lg font-semibold"
          href="mailto:name@email.com"
        >
          email
        </a>
      </p>
      <h2 className="text-2xl py-2">Find me on</h2>
      <div className="flex flex-row space-x-6 pb-4">
        <RxGithubLogo className="text-5xl" />
        <RxLinkedinLogo className="text-5xl" />
      </div>
    </div>
  );
};
