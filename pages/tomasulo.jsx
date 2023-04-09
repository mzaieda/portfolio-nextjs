import Image from 'next/image';
import React from 'react';
import tom from '../public/assets/projects/tom.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const tomasulo = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={tom}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Tomasulo Algorithm without ROB</h2>
          <h3>C++ / Computer Architecture</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          The Tomasulo Simulator project was a challenging yet rewarding 
          experience that provided me with practical experience in computer 
          architecture and simulation tools. The main objective of the project 
          was to develop a Tomasulo simulator based on the CDC 6600 architecture 
          without the use of a Reorder Buffer (ROB). One of the key challenges in 
          implementing the simulator was handling the hazards that can arise in 
          the execution of instructions, specifically RAW (Read After Write), 
          WAR (Write After Read), and WAW (Write After Write) hazards. To tackle 
          this, I implemented a set of algorithms that dynamically allocate functional 
          units and reservation stations to avoid data dependencies and minimize the 
          impact of hazards. Throughout the project, I utilized my skills 
          in programming languages such as Python and C++, as well as my 
          knowledge of computer architecture and simulation tools. I also gained 
          valuable experience in analyzing and optimizing the performance of the 
          simulator, and identifying potential areas for improvement.
          </p>
          {/* <a
            href='https://github.com/mzaieda/Tomasulo-without-ROB-Simulation'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a> */}
          <a
            href='https://github.com/mzaieda/Tomasulo-without-ROB-Simulation'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CDC 6600
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Hazard Handeling
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default tomasulo;
