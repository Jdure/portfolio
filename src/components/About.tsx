import React from "react";

export const About = () => {
  return (
    <>
      <div id="about" className=" flex flex-col justify-center py-2 space-y-4">
        <h2 className="text-3xl text-center sm:text-5xl">About me</h2>
        <p className="text-lg text-center w-4/5 mx-auto sm:text-2xl sm:w-2/3">
          Following my passion for web development has been the highlight of my
          career. Now, I bring my technical expertise and years of experience to
          life as I create custom web applications
        </p>
        <p className="text-center text-lg w-2/3 mx-auto font-semibold sm:text-2xl">
          Let&apos;s work together to make your ideas come true!
        </p>
      </div>
    </>
  );
};
