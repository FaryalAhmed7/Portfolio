"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const words = ["Faryal Ahmed", "Full Stack Developer"];
const delayBetweenWords = 3000; // Time before switching text

const Herosection = () => {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, delayBetweenWords);

        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hello, I'm
                        </span>
                        <br />
                        <motion.span
                            key={wordIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8 }}
                            className="block text-white"
                        >
                            {words[wordIndex]}
                        </motion.span>
                    </h1>
                    <p className='text-white text-base sm:text-lg mb-6 lg:text-xl'>
                        I'm a passionate Web Developer specializing in React, JavaScript, and AI-powered applications. I love building user-friendly, innovative, and efficient digital experiences. Let's create something amazing together!
                    </p>

                    <button 
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                        className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-secondary-500 via-primary-500 bg-white hover:bg-slate-200 text-white'
                    >
                        Hire Me
                    </button>

                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'>
                        <a href="/CV/Faryal CV.pdf" download className='block bg-black hover:bg-slate-800 rounded-full px-5 py-2'>
                            Download CV
                        </a>
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-slate-300 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                        <Image 
                            src="/images/hero1.png"
                            alt='hero1-image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Herosection;
