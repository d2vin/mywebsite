import React from 'react';
import Image from 'next/image';

const Masthead = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start">
      <div className="max-w-lg flex flex-col pr-6 md:pl-0 sm:pt-20 md:pt-20">
        <p className="sm:text-6xl text-3xl pl-4 md:pl-0 transition-all">
          Devin Minnihan
        </p>
        <p className="text-2xl font-extralight pl-4 md:pl-0 transition-all">
          Parsons 2022
        </p>
        <p className="w-full pt-4 pl-4 md:pl-0 transition-all">
          Software Developer studying{' '}
          <a
            href="https://www.newschool.edu/parsons/bba-design-management/"
            rel="noreferrer"
            target="_blank"
            className="hover:text-red-500"
          >
            Strategic Design & Management
          </a>{' '}
          at the{' '}
          <a
            href="https://www.newschool.edu/parsons/"
            rel="noreferrer"
            target="_blank"
            className="hover:text-red-500"
          >
            Parsons School of Design
          </a>
        </p>
      </div>
      <div className="w-[80px] sm:w-[176px] relative mb-0 sm:mb-0 mr-auto pt-8 pl-4 pb-4 pr-4 md:pr-0">
        <Image
          src="/me.jpg"
          width={267}
          height={400}
          alt="sunset icon"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Masthead;
