import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDir = path.join(process.cwd(), "projects")

export const getAllProjectSlugs = () => {
    const fileNames = fs.readdirSync(projectsDir)
    return fileNames.map(fileName => {
        return {
            params: {
                slug: fileName.split(".")[0]
            }
        }
    })
}

export function getProjectData(slug:string) {
    const fullPath = path.join(projectsDir, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
        slug, 
        ...matterResult.data
    }
}