import React from 'react';
import ExperienceLink from './experience-link';

const Experience = () => {
  return (
    <div className="pb-40">
      <h1 className="pt-8 text-4xl pl-4 md:pl-0 transition-all">Experience</h1>
      <ExperienceLink
        company={'Letterhead'}
        position={'Software Engineer'}
        location={'New York'}
        yearFrom={'2022'}
        yearTo={'Present'}
        link={'https://www.tryletterhead.com/'}
      />
      {/* <ExperienceLink
        company={'AllDealershipJobs.com'}
        position={'Side-Project'}
        location={'New York'}
        yearFrom={'2023'}
        yearTo={'Present'}
        link={'https://www.alldealershipjobs.com/'}
      /> */}
      <ExperienceLink
        company={'Productive'}
        position={'Thesis Project'}
        location={'New York'}
        yearFrom={'2022'}
        yearTo={'Present'}
        link={'https://productive-d2vins-projects.vercel.app/'}
      />
      <ExperienceLink
        company={'Lectrium'}
        position={'Frontend Software Developer'}
        location={'New York'}
        yearFrom={'2022'}
        yearTo={'2023'}
        link={'https://lectrium.io'}
      />
      <ExperienceLink
        company={'C2 Ventures'}
        position={'Spring & Summer Research Intern'}
        location={'Remote'}
        yearFrom={'2022'}
        yearTo={'2023'}
        link={'https://www.c2ventures.co/'}
      />
      {/* <ExperienceLink
        company={'Global Blockchain Convergence'}
        position={'Software Developer (Contract)'}
        location={'Remote'}
        yearFrom={'2022'}
        yearTo={'2023'}
        link={'https://gbcio.vercel.app'}
      /> */}
      <ExperienceLink
        company={'Tribeca Early Stage Partners'}
        position={'Research and Marketing Intern'}
        location={'New York'}
        yearFrom={'2021'}
        yearTo={'2022'}
        link={'https://www.tribecaesp.com/'}
      />
    </div>
  );
};

export default Experience;
