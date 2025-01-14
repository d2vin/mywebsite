import React from 'react';
import Image from 'next/image';

const Masthead = () => {
  return (
    <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start">
      <div className="max-w-lg flex flex-col pr-6 md:pl-0 sm:pt-20 md:pt-20">
        <p className="sm:text-6xl text-3xl pl-4 md:pl-0 text-center sm:text-left">
          Devin Minnihan
        </p>
        <p className="text-2xl font-extralight pl-4 md:pl-0 transition-all text-center sm:text-left">
          Parsons 2022
        </p>
        <p className="w-full text-center sm:text-left pt-4 pl-4 md:pl-0 transition-all">
          Software Developer and{' '}
          <span>
            graduate of{' '}
            <a
              href="https://www.newschool.edu/parsons/"
              rel="noreferrer"
              target="_blank"
              className="hover:text-red-500"
            >
              The Parsons School of Design
            </a>
          </span>{' '}
          with a focus on{' '}
          <a
            href="https://www.newschool.edu/parsons/mfa-design-technology/"
            rel="noreferrer"
            target="_blank"
            className="hover:text-red-500"
          >
            Design and Technology
          </a>
          .
        </p>
      </div>
      <div className="w-[176px] sm:w-[176px] flex-shrink-0 left-[50%] translate-x-[-50%] sm:left-0 sm:translate-x-0 relative mb-0 sm:mb-0 mr-auto pt-8 pl-4 pb-4 pr-4 md:pr-0">
        <Image
          src="/me.jpg"
          width={267}
          height={400}
          alt="sunset icon"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Masthead;
