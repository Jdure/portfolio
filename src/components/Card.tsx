import React from "react";
import Image from "next/image";

export const Card = () => {
  return (
    <div className="card w-80 bg-base-300 shadow-sm mx-auto pt-4">
      <figure className="image-full">
        <Image
          src={"https://via.placeholder.com/250"}
          alt={"Some alt text"}
          height={250}
          width={250}
        ></Image>
      </figure>
      <div className="card-body">
        <h3 className="text-xl card-title">Project 1</h3>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};
