import md from "markdown-it";
import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllProjectSlugs } from "../../../lib/helper";
import { getProjectData } from "../../../lib/helper";
import Link from "next/link";

interface Params extends ParsedUrlQuery {
  slug: string;
}

type postDataProps = {
  frontmatter: frontmatterProps;
  content: string;
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

const ProjectPage = ({
  postData: { frontmatter, content },
}: {
  postData: postDataProps;
}) => {
  return (
    <div className="prose mx-auto ">
      <Link href={"/"}>Back</Link>
      <h1 className="pt-4">{frontmatter.title}</h1>
      <div
        className="pb-4"
        dangerouslySetInnerHTML={{
          __html: md().render(content),
        }}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectSlugs();
  return {
    paths,
    fallback: false,
  };
};

export function getStaticProps({ params }: { params: Params }) {
  const postData = getProjectData(params?.slug);
  return {
    props: {
      postData,
    },
  };
}

export default ProjectPage;
