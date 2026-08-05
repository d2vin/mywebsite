import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props { company: string; position: string; location: string; yearFrom: string; yearTo?: string; link: string; index?: number; }

const ExperienceLink = ({ company, position, location, yearFrom, yearTo = 'Present', link, index = 0 }: Props) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="work-row"
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.25) }}
  >
    <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
    <span className="work-company">{company}<small>{position}</small></span>
    <span className="work-meta">{location}<small>{yearFrom} — {yearTo}</small></span>
    <span className="work-arrow"><ArrowUpRight size={18} /></span>
  </motion.a>
);

export default ExperienceLink;
