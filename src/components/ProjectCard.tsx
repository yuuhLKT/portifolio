import { useState } from 'react'
import StackIcon from 'tech-stack-icons'
import GithubIcon from '../icons/GithubIcon'
import LinkIcon from '../icons/LinkIcon'

interface ProjectCardProps {
    image: string
    title: string
    description: string
    stacks: string[]
    github: string
    link: string
}

export default function ProjectCard({
    image,
    title,
    description,
    stacks,
    github,
    link,
}: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Thumbnail image */}
            <img
                src={image}
                alt={title}
                className="h-[374px] w-full object-cover cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            />
            <h1 className="mt-2 text-black text-2xl py-2 text-left">{title}</h1>
            <div className="w-full border-t-2 border-lightGrey my-3"></div>
            <div className="mt-2 mb-2 text-lg py-2 text-left">
                {description}
            </div>
            <div className="flex gap-4 mb-4">
                {stacks.map((stack) => (
                    <div key={stack} className="w-10 h-10">
                        <StackIcon name={stack} className="w-full h-full" />
                    </div>
                ))}
            </div>
            <div className="flex gap-5 mt-5">
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                    </a>
                )}
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <LinkIcon />
                    </a>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative">
                        <img
                            src={image}
                            alt={title}
                            className="max-h-[90vh] max-w-[90vw] object-contain"
                        />
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
