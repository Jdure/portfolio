import React from "react";
import Image from "next/image";

export const Card = () => {
  return (
    <div className="card w-72 bg-base-300 shadow-sm my-4 sm:w-1/3 sm:mx-2">
      <figure className="">
        <Image
          className="rounded"
          src={"https://via.placeholder.com/1080x720"}
          alt={"Some alt text"}
          height={1080}
          width={720}
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
