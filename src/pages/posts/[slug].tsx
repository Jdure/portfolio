import md from "markdown-it";
import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllProjectSlugs } from "../../../lib/helper";
import { getProjectData } from "../../../lib/helper";

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
    <div className="prose mx-auto">
      <p>{frontmatter.title}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: md().render(content),
        }}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectSlugs();
  console.log(paths);
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

// Error: ENOENT: no such file or directory, open '/workspaces/portfolio/projects/example-post-2.md'
