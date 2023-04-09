import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import pegasus from '../public/assets/projects/pegasus.png';
import riscv from '../public/assets/projects/risc.png'
import cache from '../public/assets/projects/cache.png'
import tom from '../public/assets/projects/tom.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#b83232]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Text Summarization'
            backgroundImg={pegasus}
            projectUrl='/deep'
            tech='Deep Learning - Python'
          />
          <ProjectItem
            title='RISC-V Processor'
            backgroundImg={riscv}
            projectUrl='/processor'
            tech='Verilog '

          />
          <ProjectItem
            title='Cache Simulator'
            backgroundImg={cache}
            projectUrl='/simulator'
            tech='C/C++'

          />
          <ProjectItem
            title='Tomasulo Algorithm Simulator'
            backgroundImg={tom}
            projectUrl='/tomasulo'
            tech='C/C++'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
