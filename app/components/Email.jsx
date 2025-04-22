"use client";
import React , {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Email = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
  

    if (response.status === 200) {
      console.log('Message Sent.');
      setEmailSubmitted(true);
    }
  };
  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2' ></div>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I am currently looking for a new opportunity. Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2 items-center '>
          <Link href='https://github.com/FaryalAhmed7'>
            <Image src='/git.svg' alt='Github Icon' width={30} height={30} />
          </Link>
          <Link href='https://linkedin.com/in/faryal-ahmed-8ab086220'>
            <Image src='/link.svg' alt='LinkedIn Icon' width={40} height={40} />
          </Link>
        </div>
      </div>

      <div>
        <form className='flex flex-col ' onSubmit={handleSubmit} >
          <div className='mb-6'>
            <label htmlFor='email'
              className='text-white mb-2 block  text-sm font-medium'
            > Your Email
            </label>
            <input
              name='email'
              type='email'
              id='email'
              required
              className='bg-[#18181E] border border-[#33353F] placeholder-[#9CA2AF] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='example@gmail.com'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject'
              className='text-white mb-2 block text-sm font-medium'
            > Subject
            </label>
            <input
              name='subject'
              type='text'
              id='subject'
              required
              className='bg-[#18181E] border border-[#33353F] placeholder-[#9CA2AF] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Just saying hi!'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='text-white mb-2 block text-sm font-medium'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='bg-[#18181E] border border-[#33353F] placeholder-[#9CA2AF] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Your message here...'
            />
          </div>
          <button type='submit'
            className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
          >
            Send Message
          </button>
          {
            emailSubmitted && (
              <p className='text-green-500 text-sm mt-2'>
                Email Sent successfully !</p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default Email;
