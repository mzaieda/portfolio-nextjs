import Image from 'next/image';
import React from 'react';
import pegasus from '../public/assets/projects/pegasus.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const deep = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={pegasus}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Abstract Text Summarization</h2>
          <h3>Deep Learning / Python / Tensorflow</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I leveraged Google&apos;s pre-trained transformer model, 
            Pegasus-large, to perform abstractive text summarization. 
            I applied two types of data augmentation techniques to the 
            XSum dataset and changed the word embedding algorithm to Word2Vec 
            instead of positional sinusoidal embedding. I also performed extensive 
            hyperparameter tuning to optimize model performance.
          </p>
          <a
            href='https://github.com/mzaieda/Abstractive-Text-Summarization'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          {/* <a
            href='https://deep-finder-development.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a> */}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TensorFlow
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Keras
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Natural Language Toolkit (NLTK) 
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NumPy
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Scikit-learn
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

export default deep;
