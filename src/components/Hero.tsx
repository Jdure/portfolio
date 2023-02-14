import React from "react";
import Image from "next/image";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-5 sm:pt-20 sm:flex-row">
        <div
          id="about"
          className="flex flex-col items-center space-y-4 sm:items-start sm:space-y-2 sm:basis-3/5"
        >
          <h1 className="text-4xl sm:mx-24">Hi, I&apos;m Jonathan</h1>
          <p className="text-2xl text-center w-3/4 sm:text-xl sm:mx-24 sm:text-justify">
            <span className="text-secondary font-semibold dark:text-primary-content">
              Full Stack Developer
            </span>
            , based in Canada 🇨🇦
          </p>
          <p className="text-lg text-center w-3/4 sm:text-xl sm:mx-24 sm:w-2/3 sm:text-justify">
            I&apos;ve pursued my passion for web development since 2016. Since
            then, I&apos;ve honed my skills and created easy to use web
            applications
          </p>
          <p className="text-lg text-center w-2/3 font-semibold sm:text-xl sm:mx-24 sm:w-1/2 sm:text-justify">
            Feel free to get in touch!
          </p>
          <div className="flex flex-row sm:mx-24 space-x-6 sm:space-x-4">
            <RxGithubLogo className="text-lg" />
            <RxLinkedinLogo className="text-lg" />
          </div>
        </div>
        <div className="flex flex-row sm:basis-2/5">
          <Image
            className="w-80 sm:w-full"
            src="/avatar.svg"
            alt={"DrawKit Avatar"}
            width={1080}
            height={720}
            priority
          />
        </div>
      </div>
    </>
  );
};