"use client";
import React, { useState,useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion';



const projectsData = [
    {
        id: 1,
        title: 'Chatbot',
        description: 'An AI-powered chatbot built with JavaScript that responds to user input, simulating natural conversation for web-based applications.',
        image: '/images/projects/chatbot.png',
        tag: ["Web", "All"],
        gitUrl: "https://github.com/FaryalAhmed7/chatbot",
        previewUrl: "/",
    },

    {
        id: 2,
        title: 'Spotify Clone',
        description: 'A functional Spotify-inspired music streaming UI built using HTML, CSS, and JavaScript, replicating core features and responsive design.',
        image: '/images/projects/Spotify.png',
        tag: ["Web", "All"],
        gitUrl: "https://github.com/FaryalAhmed7/Spotifyclone",
        previewUrl: "/",
    },

    {
        id: 3,
        title: 'iTask',
        description: 'A modern to-do list application for task management with a clean UI, built using React for efficient state handling and dynamic updates.',
        image: '/images/projects/itask.png',
        tag: ["Web", "All"],
        gitUrl: "https://github.com/FaryalAhmed7/todoList",
        previewUrl: "/",
    },

    {
        id: 4,
        title: 'Portfolio Website',
        description: 'This is my personal portfolio website, developed using Next.js and Tailwind CSS to showcase my projects, skills, and professional background.',
        image: '/images/projects/portfolio.png',
        tag: ["Web", "All"],
        gitUrl: "https://github.com/FaryalAhmed7/Portfolio",
        previewUrl: "/",
    },

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
    const ref = useRef(null);
    const isInView = useInView (ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag) 
    );

    const cardvariants = {
        initial : { y: 50, opacity: 0 },
        animate : { y: 0, opacity: 1 }, 
    };

    return (
        <section id='projects' >
            <h2 className='text-center text-4xl font-bold text- text-emerald-500 mt-4 mb-8 md:mb-12'  >
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
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12 '>
                {filteredProjects.map((project, index) => (
                    <motion.li 
                    key={index}
                    variants={cardvariants}
                    initial='initial'
                    animate={isInView ? 'animate' : "initial"}
                    transition= {{duration: 0.3, delay: index * 0.4}}>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                    </motion.li>
                ))}
            </ul>

        </section>


    )
}

export default Project