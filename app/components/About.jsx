"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'> 
        <li>Node.js</li>
        <li>Express</li>
        <li>postgreSQL</li>
        <li>sequelize</li>
        <li>React</li>

      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Iqra University</li>
      </ul>
    )
  },
  {
    title: "Certificates",
    id: "certificates",
    content: (
      <ul className='list-disc pl-2'>
        <li>HTMl5</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
    )
  }
]

const About = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'><div className='md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16'>
      <Image src="/images/about.jpg" alt='AboutImage' width={500} height={500} />
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full' >
        <h2 className='text-4xl font-bold text-white mb-4' >About Me</h2>
        <p
          className='text-base lg:text-lg' > Web Developer with a strong passion for creating intelligent and interactive applications by integrating machine learning. I specialize in building dynamic, user-friendly web solutions that leverage AI-driven technologies to enhance user experiences. With expertise in JavaScript, React, and modern development frameworks, I am always exploring innovative ways to merge software development with cutting-edge machine learning techniques. My goal is to develop applications that are not only functional and efficient but also smart, adaptive, and impactful in solving real-world problems.
        </p>
        <div className="flex flex-row justify-start mt-8">

          <TabButton
            selectTab={() => handleTabChange("skills")} active={tab === 'skills'}
          >
            {" "}
            Skills{" "}
          </TabButton>

          <TabButton
            selectTab={() => handleTabChange("education")} active={tab === 'education'}
          >
            {" "}
            Education {" "}
          </TabButton>

          <TabButton
            selectTab={() => handleTabChange("certificates")} active={tab === 'certificates'}
          >
            {" "}
            Certificates {" "}
          </TabButton>
        </div>

        <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </div>
    </section>

  )
}

export default About