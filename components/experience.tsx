import ExperienceLink from './experience-link';

const roles: string[][] = [
  ['OpenVote', 'iOS App — Congress Made Clear', 'New York', '2022', 'Present', 'https://apps.apple.com/us/app/openvote-congress-made-clear/id6782198877', 'https://openvote.dev/votes'],
  ['Letterhead', 'Software Engineer', 'New York', '2022', 'Present', 'https://www.tryletterhead.com/', '', 'Sign up today to grow your newsletter'],
  ['Lectrium', 'Frontend Software Developer', 'New York', '2022', '2023', 'https://lectrium.io'],
  ['Reign Ventures', 'Contract Software Engineer', 'New York', '2024', 'Present', 'https://www.reignvc.com/'],
  ['C2 Ventures', 'Research Intern', 'Remote', '2022', '2023', 'https://www.c2ventures.co/'],
  ['Maximal Asset Management', 'Contract Software Engineer', 'New York', '2024', 'Present', 'https://www.maximalam.com/'],
  ['Teleportium', 'Contract Software Engineer', 'New York', '2023', 'Present', 'https://www.teleportium.us/'],
  ['Anakin Clothing', 'Contract Software Engineer', 'New York', '2019', 'Present', 'https://anakin.clothing'],
  ['Kaigan', 'Contract Software Engineer', 'New York', '2026', 'Present', 'https://kaigan.online/'],
  ['Bedlam', 'Contract Software Engineer', 'New York', '2025', 'Present', 'https://bedlamtokyo-c9b429e60a74fa729d53.o2.myshopify.dev/product-wall'],
  ['Digital Gallery', 'Freelance Software Engineer', 'New York', '2024', 'Present', 'https://kaito-mu.vercel.app/'],
  ['Baek Industries', 'Contract Software Engineer', 'New York', '2025', 'Present', 'https://baekindustries.com/'],
];

const Experience = () => (
  <section className="work-section" id="work">
    <div className="section-heading">
      <p>Selected experience</p>
      <h2>Places I&apos;ve made<br />an <em>impact.</em></h2>
      <span>Engineering, design systems, creative development, and zero-to-one product work.</span>
    </div>
    <div className="work-list">
      {roles.map(([company, position, location, yearFrom, yearTo, link, webLink, note], index) => (
        <ExperienceLink key={company} {...{ company, position, location, yearFrom, yearTo, link, webLink: webLink || undefined, note, index }} />
      ))}
    </div>
  </section>
);

export default Experience;
