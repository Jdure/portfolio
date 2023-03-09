import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getProjectMetadata } from "lib/helper";
import dynamic from "next/dynamic";

type projectProps = {
  slug: string;
  frontmatter: frontmatterProps;
};

type frontmatterProps = {
  title: string;
  author?: string | undefined;
  category: string;
  description: string;
  date: Date;
  bannerImage: string;
  tags: string[];
};

const ProjectCards = dynamic(
  () => import("@/components/Card").then((mod) => mod.Card),
  { ssr: false }
);

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero />
      <div className="text-neutral dark:text-white body-font">
        <div className="container px-5 py-8 sm:py-20 mx-auto">
          <h2 id="projects" className="text-3xl text-center py-8">
            Latest projects
          </h2>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center sm:text-justify">
            {projects.map((item: projectProps) => (
              <>
                <ProjectCards
                  title={item.frontmatter.title}
                  bannerImage={item.frontmatter.bannerImage}
                  tags={item.frontmatter.tags}
                  description={item.frontmatter.description}
                  key={item.slug}
                  category={item.frontmatter.category}
                  date={item.frontmatter.date}
                  slug={item.slug}
                />
              </>
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps = (context) => {
  const projects = getProjectMetadata();

  return {
    props: {
      projects,
    },
  };
};
