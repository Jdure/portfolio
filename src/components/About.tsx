import React from "react";

export const About = () => {
  return (
    <>
      <div className="flex-col justify-center py-2 space-y-4">
        <h2 className="text-3xl text-center">About me</h2>
        <p className="text-lg text-center w-4/5 mx-auto">
          Following my passion for web development has been the highlight of my
          career. Now, I bring my technical expertise and years of experience to
          life as I create custom web applications.
        </p>
        <p className="text-center text-lg w-2/3 mx-auto font-semibold">
          Let&apos;s work together to make your ideas come true!
        </p>
      </div>
      <div className="divider w-1/2 mx-auto"></div>
    </>
  );
};
