import React from 'react';
import ExperienceLink from './experience-link';

const Experience = () => {
  return (
    <div className="pb-40">
      <h1 className="pt-8 text-4xl pl-4 md:pl-0 transition-all">Experience</h1>
      <ExperienceLink
        company={'Letterhead'}
        position={'QA Engineer'}
        location={'New York'}
        year={'2022'}
        link={'https://www.tryletterhead.com/'}
      />
      <ExperienceLink
        company={'Productive'}
        position={'Capstone Project'}
        location={'New York'}
        year={'2022'}
        link={'https://www.productive.vote/'}
      />
      <ExperienceLink
        company={'Lectrium'}
        position={'Frontend Software Developer'}
        location={'New York'}
        year={'2022'}
        link={'https://lectrium.io'}
      />
      <ExperienceLink
        company={'C2 Ventures'}
        position={'Spring & Summer Research Intern'}
        location={'Remote'}
        year={'2022'}
        link={'https://www.c2ventures.co/'}
      />
      <ExperienceLink
        company={'Global Blockchain Convergence'}
        position={'Web Developer'}
        location={'Remote'}
        year={'2022'}
        link={'https://gbcio.vercel.app'}
      />
      <ExperienceLink
        company={'Tribeca Early Stage Partners'}
        position={'Research and Marketing Intern'}
        location={'New York'}
        year={'2021'}
        link={'https://www.tribecaesp.com/'}
      />
    </div>
  );
};

export default Experience;
