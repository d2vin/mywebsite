import React from 'react';

interface ExperienceLinkProps {
  company: string;
  position: string;
  location: string;
  year: string;
  link: string;
}

const ExperienceLink: React.FC<ExperienceLinkProps> = ({
  company,
  position,
  location,
  year,
  link,
}) => {
  return (
    <a target="_blank" href={link} rel="noreferrer">
      <div className="w-7/8 border-b border-black dark:border-gray-200 py-3 transform hover:scale-[1.01] transition-all ml-4 mr-4 md:mx-0">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold">{company}</h1>
            <p className="italic">{position}</p>
          </div>
          <div>
            <h1 className="flex justify-end">{location}</h1>
            <p className="italic flex justify-end">{year}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ExperienceLink;
