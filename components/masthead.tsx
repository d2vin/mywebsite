import React from 'react';
import Image from 'next/image';

const Masthead = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start xs:pl-4 sm:pl-0">
      <div className="max-w-lg flex flex-col pr-8 pl-4 xs:pt-0 sm:pt-20 md:pt-20">
        <p className="sm:text-6xl text-3xl">Devin Minnihan</p>
        <p className="text-2xl font-extralight">Parsons 2022</p>
        <p className="w-full pt-4">
          Software Developer studying{' '}
          <a
            href="https://www.newschool.edu/parsons/bba-design-management/"
            rel="noreferrer"
            target="_blank"
            className="hover:text-red-500"
          >
            Strategic Design & Management
          </a>{' '}
          at the Parsons School of Design
        </p>
      </div>
      <div className="w-[80px] sm:w-[176px] relative mb-0 sm:mb-0 mr-auto pt-8 pl-4 pb-4">
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
