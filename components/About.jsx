import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#b83232]'>
            About
          </p>
          <h2 className='py-4'>What is My Story?</h2>
          <p className='py-2 text-gray-600'>
            I'm passionate about software, machine learning, and their potential 
            to solve complex problems and improve people's lives. Throughout my academic journey,
            I have gained extensive experience in programming languages such as Python and C++ as well
            as deep knowledge of mathematics, including linear algebra and multivariate analysis. 
            My passion for technology has driven me to explore various software development and AI-related projects, 
            including building web applications and implementing machine learning algorithms. I am also 
            keen on staying up-to-date with the latest advancements in the field, attending tech events, 
            and participating in hackathons. As a result, I am confident in my ability to tackle any 
            challenge and thrive in fast-paced, dynamic environments.
          </p>
          <p className='py-2 text-gray-600'>
            I started coding in 2018 and I have recently graduated 
            with a double major degree in Computer Engineering and Mathemtics. 
            I have interned in two companies as a mobile and web developer using ReactJS, 
            NodeJS for web and Flutter for mobile. And I also worked as a sofware engineer (part-time) specialized
            in backed developement using Django and MongoDB. 
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
