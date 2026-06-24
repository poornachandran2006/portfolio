import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { contact } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import Tag from '../ui/Tag';
import { staggerContainer, fadeUp } from '../ui/AnimatedSection';

const { Mail, MapPin, Send, User, MessageSquare, CheckCircle, AlertCircle, Loader } = Icons;

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Cannot reach server. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-[600px] mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={staggerContainer}>
          <SectionHeading sectionNumber="05" label={contact.label} heading={contact.heading} className="text-center [&>div:last-child]:mx-auto" />

          <motion.p variants={fadeUp} className="text-slate-text-secondary leading-relaxed mb-12 text-center">
            {contact.subtext}
          </motion.p>
          
          <motion.div variants={fadeUp} className="bg-charcoal-secondary border border-border rounded-lg p-8 mb-8 card-hover">
            <h3 className="text-xl font-display font-semibold text-slate-text-primary mb-6 text-center">Send a Message</h3>

            <div className="space-y-5">
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-text-muted pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="form-input pl-11 disabled:opacity-50"
                />
              </div>

              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-text-muted pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="form-input pl-11 disabled:opacity-50"
                />
              </div>

              <div className="relative">
                <MessageSquare size={18} className="absolute left-4 top-4 text-slate-text-muted pointer-events-none" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="form-input pl-11 resize-none disabled:opacity-50"
                />
              </div>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-cyan-accent bg-cyan-accent-subtle border border-cyan-accent-border rounded-md px-4 py-3">
                  <CheckCircle size={18} />
                  <span className="text-sm font-medium">Message sent! I'll get back to you soon.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/30 rounded-md px-4 py-3">
                  <AlertCircle size={18} />
                  <span className="text-sm font-medium">{errorMsg}</span>
                </motion.div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'loading' || !formData.name || !formData.email || !formData.message}
                className="w-full btn-primary py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow-cyan"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader size={18} className="animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-charcoal-secondary border border-border rounded-lg p-8 card-hover">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-slate-text-secondary" />
                <span className="text-slate-text-secondary font-medium">{contact.location}</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-sm text-slate-text-secondary mr-2">Available for:</span>
                {contact.availability.map((item, index) => (
                  <Tag key={index} variant="tech">{item}</Tag>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
