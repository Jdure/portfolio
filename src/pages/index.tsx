import fs from "fs";
import matter from "gray-matter";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Card } from "@/components/Card";
import { Key } from "react";
import Link from "next/link";

type projectProps = {
  slug: string;
  frontmatter: frontmatterProps;
};

type frontmatterProps = {
  title: string;
  author: string;
  category: string;
  description: string;
  date: Date;
  bannerImage: string;
  tags: string[];
};

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero />
      <div className="flex flex-col justify-center items-center py-10">
        <h2 className="text-3xl sm:mx-24">Latest projects</h2>
        <div id="projects" className="flex flex-col items-center">
          <div className="sm:flex sm:flex-row sm:flex-wrap sm:space-x-4">
            {projects.map((item: projectProps, idx: Key) => (
              <>
                <Link key={item.slug} href={`/posts/${item.slug}`}>
                  <Card
                    title={item.frontmatter.title}
                    bannerImage={item.frontmatter.bannerImage}
                    tags={item.frontmatter.tags}
                    description={item.frontmatter.description}
                    key={item.slug}
                    author={item.frontmatter.author}
                    category={item.frontmatter.category}
                    date={item.frontmatter.date}
                  />
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync("posts");

  const projects = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      projects,
    },
  };
};
