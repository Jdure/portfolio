import React, { Key } from "react";
import Image from "next/image";
import Link from "next/link";

type cardProps = {
  title: string;
  slug: string;
  author?: string;
  category: string;
  description: string;
  date: Date;
  bannerImage: string;
  tags: string[];
};


export const Card = ({
  title,
  date,
  bannerImage,
  description,
  slug,
}: cardProps) => {
  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image
          alt="content"
          className="object-cover object-top h-full w-full hover:object-center transform duration-500 inset-y-full hover:inset-y-0"
          src={bannerImage}
          height={501}
          width={1201}
        />
      </div>
      <h2 className="title-font text-2xl font-medium mt-6 mb-3">{title}</h2>
      <p className="text-xs leading-relaxed">
        {new Date(date).toLocaleDateString()}
      </p>
      <p className="leading-relaxed text-base">{description}</p>
      <button className="flex mt-6 border-0 py-2 px-2 btn btn-link text-neutral mx-auto sm:mx-0 dark:text-white hover:animate-pulse">
        <Link href={`/projects/${slug}`}>Find out more &rarr;</Link>
      </button>
    </div>
  );
};