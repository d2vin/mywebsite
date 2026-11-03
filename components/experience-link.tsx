import { ArrowUpRight } from 'lucide-react';

interface Props { company: string; position: string; location: string; yearFrom: string; yearTo?: string; link: string; webLink?: string; index?: number; }

const ExperienceLink = ({ company, position, location, yearFrom, yearTo = 'Present', link, webLink, index = 0 }: Props) => {
  const indexLabel = <span className="work-index">{String(index + 1).padStart(2, '0')}</span>;
  const meta = <span className="work-meta">{location}<small>{yearFrom} — {yearTo}</small></span>;
  const arrow = <span className="work-arrow"><ArrowUpRight size={18} /></span>;

  if (!webLink) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="work-row">
        {indexLabel}
        <span className="work-company">{company}<small>{position}</small></span>
        {meta}
        {arrow}
      </a>
    );
  }

  return (
    <div className="work-row work-row--multi">
      {indexLabel}
      <span className="work-company">
        <a href={link} target="_blank" rel="noreferrer" className="work-main-link">{company}</a>
        <small>{position} · Download on the App Store</small>
        <small className="work-web">
          Also accessible on the web here:{' '}
          <a href={webLink} target="_blank" rel="noreferrer">{webLink.replace(/^https?:\/\//, '')}</a>
        </small>
      </span>
      {meta}
      {arrow}
    </div>
  );
};

export default ExperienceLink;
