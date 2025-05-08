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
      <ExperienceLink
        company={'Maximal Asset Management'}
        position={'Contract Software Engineer'}
        location={'New York'}
        yearFrom={'2024'}
        yearTo={'Present'}
        link={'https://www.maximalam.com/'}
      />
      <ExperienceLink
        company={'Reign Ventures'}
        position={'Contract Software Engineer'}
        location={'New York'}
        yearFrom={'2024'}
        yearTo={'Present'}
        link={'https://www.reignvc.com/'}
      />
      <ExperienceLink
        company={'Digital Gallery'}
        position={'Freelance Software Engineer'}
        location={'New York'}
        yearFrom={'2024'}
        yearTo={'Present'}
        link={'https://kaito-mu.vercel.app/'}
      />
      <ExperienceLink
        company={'Teleportium'}
        position={'Contract Software Engineer'}
        location={'New York'}
        yearFrom={'2023'}
        yearTo={'Present'}
        link={'https://www.teleportium.us/'}
      />
      <ExperienceLink
        company={'Stop Capping Co.'}
        position={'Side-Project'}
        location={'New York'}
        yearFrom={'2024'}
        yearTo={'Present'}
        link={'https://www.stopcapping.co/'}
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
        company={'Global Blockchain Convergence'}
        position={'Contract Software Engineer'}
        location={'New York'}
        yearFrom={'2022'}
        yearTo={'2023'}
        link={'https://www.globalbc.io/'}
      />
      <ExperienceLink
        company={'C2 Ventures'}
        position={'Spring & Summer Research Intern'}
        location={'Remote'}
        yearFrom={'2022'}
        yearTo={'2023'}
        link={'https://www.c2ventures.co/'}
      />
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
