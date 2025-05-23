import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    console.log('Image URL:', imgUrl);
    return (
        <div>
            <div className='h-52 md:h-72 rounded-t-xl relative group bg-cover bg-center' style={{ backgroundImage: `url(${imgUrl})` }}>

                <div className='overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    <Link href={gitUrl}
                    className='h-14 w-14 mr-2 border-2 relative rounded-full border-gray-300 hover:border-white group/link '>
                        <CodeBracketIcon className='h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                    </Link>
                    <Link href={previewUrl}
                    className='h-14 w-14 border-2 relative rounded-full border-gray-300 hover:border-white group/link '>
                        <EyeIcon className='h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                    </Link>
                </div>

            </div>
            <div className='text-white rounded-b-xl mt-3 bg-black py-6 px-4'>
                <h5 className='text-xl font-semibold mb-2' >{title}</h5>
                <p className='text-gray-300' >{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard