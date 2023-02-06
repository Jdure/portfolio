import React from "react";
import { Card } from "./Card";

export const Projects = () => {
  const items = 4;
  return (
    <div className="flex-1 justify-center py-2 space-y-4">
      <h2 className="text-3xl text-center">Projects</h2>
      <div className="flex-col space-y-4">
        {[...Array(items)].map((item, idx) => (
          <Card key={idx} />
        ))}
      </div>
    </div>
  );
};
