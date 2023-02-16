import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDir = path.join(process.cwd(), "projects")

export const getProjectMetadata = () => {
  const files = fs.readdirSync(projectsDir);

  files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`projects/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
};

export const getAllProjectSlugs = () => {
  const fileNames = fs.readdirSync(projectsDir);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.split(".")[0],
      },
    };
  });
};

export function getProjectData(slug: string) {
  const fullPath = path.resolve(projectsDir, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data: frontmatter, content } = matter(fileContents);
  return {
    frontmatter,
    content,
  };
}