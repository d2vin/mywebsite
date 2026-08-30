import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { DataPixelArc } from './data-pixel-arc';

const Masthead = () => (
  <section className="hero">
    <DataPixelArc className="hero-bg-canvas" />
    <div className="hero-copy">
      <div className="availability"><span /><Sparkles size={13} /> Available for select projects</div>
      <h1>I build digital<br />things with <em>feeling.</em></h1>
      <p className="hero-deck">
        I&apos;m Devin, a New York–based software engineer and Parsons-trained designer creating expressive, useful experiences where code and culture meet.
      </p>
      <div className="hero-actions">
        <a href="#work" className="button button-primary">Explore my work <ArrowDown size={16} /></a>
        <Link href="/contact"><a className="button button-ghost">Start a conversation <ArrowUpRight size={16} /></a></Link>
      </div>
    </div>

    <div className="portrait-wrap">
      <div className="portrait-glow" />
      <div className="portrait-frame">
        <Image src="/me.jpg" layout="fill" objectFit="cover" objectPosition="center 30%" alt="Devin Minnihan" priority />
        <div className="portrait-shade" />
        <div className="portrait-label"><span>Creative technologist</span><span>NYC / EST</span></div>
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
    </div>
  </section>
);

export default Masthead;
