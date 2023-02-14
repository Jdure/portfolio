import React, { Key } from "react";
import Image from "next/image";

type cardProps = {
  title: string;
  author: string;
  category: string;
  description: string;
  date: Date;
  bannerImage: string;
  tags: string[];
};

export const Card = ({ title, bannerImage, tags, description }: cardProps) => {
  return (
    <div className="card rounded-none w-72 bg-transparent my-4 sm:w-60 lg:w-80 xl:w-96 dark:text-neutral-content">
      <figure className="">
        <Image
          className="w-full h-full"
          src={bannerImage}
          alt={"Some alt text"}
          height={1080}
          width={720}
        ></Image>
      </figure>
      <div className="card-body">
        <div className="card-actions justify-start">
          {tags.map((tag, idx: Key) => (
            <div key={idx} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
        <h3 className="text-xl card-title">{title}</h3>
        <p className="text-sm text-justify">{description}</p>
      </div>
    </div>
  );
};
