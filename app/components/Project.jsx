"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'


const projectsData = [
    {
        id: 1,
        title: 'Chatbot',
        description: 'This is a project 1',
        image: '/images/projects/chatbot.png',
        tag: ["Web", "All"],
        gitUrl: "/",
        previewUrl: "/",
    },

    {
        id: 2,
        title: 'Spotify Clone',
        description: 'This is a project 2',
        image: '/images/projects/Spotify.png',
        tag: ["Web", "All"],
        gitUrl: "/",
        previewUrl: "/",
    },

    {
        id: 3,
        title: 'itask',
        description: 'This is a project 3',
        image: '/images/projects/itask.png',
        tag: ["Web", "All"],
        gitUrl: "/",
        previewUrl: "/",
    },

    // {
    //     id: 4,
    //     title: 'Project 4',
    //     description: 'This is a project 4',
    //     image: '/images/project4.jpg',
    //     tag: ['React', 'Node', 'MongoDB'],
    // },

    // {
    //     id: 5,
    //     title: 'Project 5',
    //     description: 'This is a project 5',
    //     image: '/images/project5.jpg',
    //     tag: ['React', 'Node', 'MongoDB'],
    // },

    // {
    //     id: 6,
    //     title: 'Project 6',
    //     description: 'This is a project 6',
    //     image: '/images/project6.jpg',
    //     tag: ['React', 'Node', 'MongoDB'],
    // },
]

const Project = () => {
    const [tag, setTag] = useState('All');
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag) 
    );

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'  >
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"}
                />
                <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"}
                />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12 '>
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>

        </>


    )
}

export default Project