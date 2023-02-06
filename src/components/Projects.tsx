import React from "react";
import { Card } from "./Card";

export const Projects = () => {
  const items = 3;
  return (
    <>
      <div id="projects" className="flex flex-col justify-center items-center">
        <h2 className="text-3xl text-center pb-4">Projects</h2>
        <div className="sm:flex sm:flex-row sm:space-x-6 sm:justify-between">
          {[...Array(items)].map((item, idx) => (
            <Card key={idx} />
          ))}
        </div>
      </div>
      <div className="divider w-1/2 mx-auto"></div>
    </>
  );
};
