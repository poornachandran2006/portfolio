import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { contact } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import Tag from '../ui/Tag';
import { staggerContainer, fadeUp } from '../ui/AnimatedSection';

const { Mail, MapPin, Send, User, MessageSquare, CheckCircle, AlertCircle, Loader } = Icons;
const GithubIcon = Icons.Github || Icons.GithubIcon || (() => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>);
const LinkedinIcon = Icons.Linkedin || Icons.LinkedinIcon || (() => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
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
    <section id="contact" className="py-24 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={staggerContainer}>
          <SectionHeading label={contact.label} heading={contact.heading} className="text-center" />

          <motion.p variants={fadeUp} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12 text-center max-w-2xl mx-auto">
            {contact.subtext}
          </motion.p>

          {/* Contact Cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.a href={`mailto:${contact.email}`} whileHover={{ y: -10, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }} className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 relative overflow-hidden">
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100" transition={{ duration: 0.3 }} />
              <motion.div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10 shadow-lg" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <Mail size={28} className="text-white" />
              </motion.div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 relative z-10">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 break-all relative z-10">{contact.email}</p>
            </motion.a>

            <motion.a href={contact.github} target="_blank" rel="noopener noreferrer" whileHover={{ y: -10, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }} className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-8 hover:shadow-2xl hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 relative overflow-hidden">
              <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100" transition={{ duration: 0.3 }} />
              <motion.div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10 shadow-lg" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <GithubIcon size={28} className="text-white" />
              </motion.div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 relative z-10">GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">View my projects</p>
            </motion.a>

            <motion.a href={contact.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ y: -10, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }} className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-2 border-green-200 dark:border-green-700 rounded-2xl p-8 hover:shadow-2xl hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 relative overflow-hidden">
              <motion.div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100" transition={{ duration: 0.3 }} />
              <motion.div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10 shadow-lg" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <LinkedinIcon size={28} className="text-white" />
              </motion.div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 relative z-10">LinkedIn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">Let's connect</p>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeUp} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h3>

            <div className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare size={18} className="absolute left-4 top-4 text-gray-400 pointer-events-none" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none disabled:opacity-50"
                />
              </div>

              {/* Success Message */}
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl px-4 py-3">
                  <CheckCircle size={18} />
                  <span className="text-sm font-medium">Message sent! I'll get back to you soon.</span>
                </motion.div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl px-4 py-3">
                  <AlertCircle size={18} />
                  <span className="text-sm font-medium">{errorMsg}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                disabled={status === 'loading' || !formData.name || !formData.email || !formData.message}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {status === 'loading' ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Location & Availability */}
          <motion.div variants={fadeUp} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{contact.location}</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Available for:</span>
                {contact.availability.map((item, index) => (
                  <Tag key={index}>{item}</Tag>
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