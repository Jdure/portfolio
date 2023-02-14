import React from "react";
import { Card } from "./Card";

type dataProps = {
  slug: string;
  frontmatter: projectProps;
};

type projectProps = {
  title: string;
  author: string;
  category: string;
  date: Date;
  bannerImage: string;
  tags: string[];
};

export const Projects = (data: dataProps[]) => {
  const items = 3;
  console.log(data);
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10">
        <h2 className="text-3xl sm:mx-24">Latest projects</h2>
        <div id="projects" className="flex flex-col items-center">
          <div className="sm:flex sm:flex-row sm:flex-wrap sm:space-x-4">
            {[...Array(items)].map((item, idx) => (
              <Card key={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
