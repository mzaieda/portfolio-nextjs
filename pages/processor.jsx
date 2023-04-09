import Image from 'next/image';
import React from 'react';
import riscv from '../public/assets/projects/risc.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const processor = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={riscv}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>RISC-V 32I Processor</h2>
          <h3>Computer Architecture / Verilog / RISC-V</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          I created a RISC-V 32-bit processor using Verilog, 
          a hardware description language. The project involved designing
           and implementing the processor's datapath, including the ALU, 
           register file, memory, and control unit, as well as defining the 
           processor's instruction set architecture (ISA). To begin, I designed 
           the datapath components in Verilog and tested their behavior through 
           simulation. Once I was confident in the correctness of the datapath, 
           I moved on to designing the processor's ISA. Using Verilog, I defined 
           the behavior of each instruction and its interaction with the datapath. 
           Next, I tested the processor by writing assembly code and running it 
           on a simulator or on the actual hardware. Through iteration and 
           optimization, I improved the processor's performance and reduced power 
           consumption.
          </p>
          <a
            href='https://github.com/mzaieda/RISCV32I-M-Processor-Verilog'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          {/* <a
            href='https://cryptobase-yt.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a> */}

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> RISC-V architecture
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Verilog
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Instruction set architecture (ISA)
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

export default processor;
