import React from 'react';

const Projects = () => {
  return (
    <>
      <h1 className="pt-8 text-4xl pl-4 md:pl-0 transition-all">
        Featured Works
      </h1>
      <a target="_blank" href="https://gbcio.vercel.app" rel="noreferrer">
        <div className="w-7/8 border-b border-black dark:border-gray-200 py-3 transform hover:scale-[1.01] transition-all ml-4 mr-4 md:mx-0">
          <div className="flex justify-between">
            <h1>GBC Website Design and Devleopment</h1>
            <div>2022</div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Projects;
