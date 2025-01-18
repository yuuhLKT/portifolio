import { projects } from '../data/Projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
        <div className="h-auto px-4 md:px-16 lg:px-64 py-6 flex flex-col justify-center items-center text-center">
            <h1 className="text-black text-3xl md:text-4xl font-bold">
                Projects
            </h1>
            <div className="w-full md:w-80 border-t-2 border-darkGrey my-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        stacks={project.stacks}
                        github={project.github}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}
