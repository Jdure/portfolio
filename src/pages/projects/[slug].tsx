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

export const getStaticProps: GetStaticProps = async ({ params }) => {
 const postData = getProjectData(params.id)
  return {
    props: {
      postData
    },
  };
};

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const files = fs.readdirSync("projects");

//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.split(".")[0],
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export async function getStaticProps({ params }: { params: Params }) {
//   const directory = path.join(process.cwd(), "projects");
//   const fileContents = fs.readFileSync(directory + `/${params.slug}`, "utf-8");
//   const { data: frontmatter, content } = matter(fileContents);

//   return {
//     props: {
//       frontmatter,
//       content,
//     },
//   };
// }

export default ProjectPage;
