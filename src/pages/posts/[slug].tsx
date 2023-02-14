import fs from "fs";
import md from "markdown-it";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import { ParsedUrlQuery } from "querystring";
import { getAllProjectSlugs } from "../../../lib/helper";
import { getProjectData } from "../../../lib/helper";

interface Params extends ParsedUrlQuery {
  slug: string;
}

type frontmatterProps = {
  title: string;
  author: string;
  category: string;
  description: string;
  date: Date;
  bannerImage: string;
  tags: string[];
};

const ProjectPage = ({ postData }: any) => {
  console.log(postData);
  return (
    <div className="prose mx-auto">
      <p>text</p>
      {/* <div dangerouslySetInnerHTML={{ __html: md().render(content) }} /> */}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectSlugs()
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: Params; }) {
  const postData = await getProjectData(params?.slug);
  return {
    props: {
      postData
    },
  };
}

export default ProjectPage;


// Error: ENOENT: no such file or directory, open '/workspaces/portfolio/projects/example-post-2.md'