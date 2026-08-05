import { ArrowUpRight } from 'lucide-react';

interface Props { company: string; position: string; location: string; yearFrom: string; yearTo?: string; link: string; index?: number; }

const ExperienceLink = ({ company, position, location, yearFrom, yearTo = 'Present', link, index = 0 }: Props) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="work-row"
  >
    <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
    <span className="work-company">{company}<small>{position}</small></span>
    <span className="work-meta">{location}<small>{yearFrom} — {yearTo}</small></span>
    <span className="work-arrow"><ArrowUpRight size={18} /></span>
  </a>
);

export default ExperienceLink;
