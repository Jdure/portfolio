import fs from "fs";
import md from "markdown-it";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";
import { ParsedUrlQuery } from "querystring";

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

const ProjectPage = ({ frontmatter, content }: any) => {
  console.log(frontmatter);
  return (
    <div className="prose mx-auto">
      <p>text</p>
      {/* <div dangerouslySetInnerHTML={{ __html: md().render(content) }} /> */}
    </div>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const files = fs.readdirSync("projects");

//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace(".md", ""),
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   console.log(params);
//   //
//   return {
//     props: {
//       slug: params?.slug,
//     },
//   };
// };

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const files = fs.readdirSync("projects");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.split(".")[0],
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: Params }) {
  // const files = fs.readFileSync(`projects/${params.slug}.md`, "utf-8");
  // console.log(files);
  // const { data: frontmatter, content } = matter(files);

  // const projects = files.filter((fileName) => {
  //   const slug = fileName.replace(".md", "");

  //   const readFile = fs.readFileSync(`projects/${fileName}`, "utf-8");
  //   const { data: frontmatter, content } = matter(readFile);

  //   return {
  //     frontmatter,
  //     content,
  //   };
  // });

  const directory = path.join(process.cwd(), "projects");
  const fileContents = fs.readFileSync(directory + `/${params.slug}`, "utf-8");
  const { data: frontmatter, content } = matter(fileContents);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default ProjectPage;
