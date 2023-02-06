import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="flex-col justify-center pb-6">
        <h1 className="text-center text-4xl py-2">Hi, I&apos;m Jonathan</h1>
        <p className="text-center text-2xl w-2/3 mx-auto py-2">
          a <span className="text-info">full stack developer</span>, based in
          Canada 🇨🇦
        </p>
      </div>
      <div className="divider w-1/2 mx-auto"></div>
    </>
  );
};
