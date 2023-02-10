import React from "react";
import Image from "next/image";

export const Card = () => {
  return (
    <div className="card rounded-none w-72 bg-transparent my-4 sm:w-60 lg:w-80 xl:w-96 dark:text-neutral-content">
      <figure className="">
        <Image
          className="w-full h-full"
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
