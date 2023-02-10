import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-between items-center sm:flex-row"
    >
      <h1 className="text-3xl sm:mx-24">Contact</h1>
      <div className="flex flex-col items-center text-xl sm:text-lg">
        <p>Have a project and need a developer? </p>
        <p>
          Send me an {""}
          <a
            className="text-info font-semibold hover:text-secondary-focus"
            href="mailto:name@email.com"
          >
            email
          </a>
        </p>
      </div>
      <div className="flex flex-col sm:mx-24">
        <h2 className="text-2xl py-2">Find me on</h2>
        <div className="flex flex-row justify-center space-x-6 pb-4">
          <RxGithubLogo className="text-3xl" />
          <RxLinkedinLogo className="text-3xl" />
        </div>
      </div>
    </div>
  );
};
