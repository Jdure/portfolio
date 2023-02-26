import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Card } from "@/components/Card";
import { getProjectMetadata } from "lib/helper";

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

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero />
      <div className="text-neutral dark:text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 id="projects" className="text-3xl text-center py-8">
            Latest projects
          </h2>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center sm:text-justify">
            {projects.map((item: projectProps) => (
              <>
                <Card
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
