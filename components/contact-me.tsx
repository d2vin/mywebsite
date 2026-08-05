import { useState, useCallback } from 'react';
import axios from 'axios';
import { ArrowUpRight } from 'lucide-react';

const ContactMe = () => {
  const [status, setStatus] = useState({ submitted: false, submitting: false, error: '' });
  const [inputs, setInputs] = useState({ fullName: '', email: '', message: '' });

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs((current) => ({ ...current, [event.target.id]: event.target.value }));
    setStatus({ submitted: false, submitting: false, error: '' });
  }, []);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus({ submitted: false, submitting: true, error: '' });
    try {
      await axios.post(process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL as string, inputs);
      setInputs({ fullName: '', email: '', message: '' });
      setStatus({ submitted: true, submitting: false, error: '' });
    } catch {
      setStatus({ submitted: false, submitting: false, error: 'The message could not be sent. Please email me directly instead.' });
    }
  }, [inputs]);

  return (
    <section className="contact-grid">
      <div className="contact-copy">
        <span className="page-eyebrow">Contact</span>
        <h1>Let&apos;s make<br />something <em>good.</em></h1>
        <p>Have a thoughtful product, a strange idea, or a hard problem? Tell me what you&apos;re working on and where I can help.</p>
        <div className="social-links">
          <a href="https://github.com/d2vin" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/devin-m-6225a6176/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        {status.submitted ? (
          <div className="form-message">Message sent. I&apos;ll get back to you soon.</div>
        ) : (
          <>
            <div className="field"><label htmlFor="fullName">Your name</label><input id="fullName" required maxLength={128} value={inputs.fullName} onChange={handleChange} placeholder="Jane Smith" /></div>
            <div className="field"><label htmlFor="email">Email address</label><input id="email" type="email" required maxLength={128} value={inputs.email} onChange={handleChange} placeholder="jane@studio.com" /></div>
            <div className="field"><label htmlFor="message">What are we making?</label><textarea id="message" required maxLength={1048576} value={inputs.message} onChange={handleChange} placeholder="A little context goes a long way..." /></div>
            {status.error && <p className="form-message" role="alert">{status.error}</p>}
            <button className="submit-button" type="submit" disabled={status.submitting}>{status.submitting ? 'Sending…' : <>Send message <ArrowUpRight size={15} /></>}</button>
          </>
        )}
      </form>
    </section>
  );
};

export default ContactMe;
