import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { contact, footer } from '../../data/portfolioData';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail,
};

const Sidebar = () => {
  return (
    <>
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.645, 0.045, 0.355, 1.000] }}
        className="fixed bottom-0 left-6 z-40 hidden lg:flex flex-col items-center gap-5"
        aria-label="Social links"
      >
        {footer.social.map(({ icon, url }) => {
          const Icon = iconMap[icon];
          return (
            <a
              key={icon}
              href={url}
              target={url.startsWith('mailto') ? undefined : '_blank'}
              rel={url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-slate-text-secondary hover:text-cyan-accent transition-colors duration-200"
              aria-label={icon}
            >
              <Icon size={20} />
            </a>
          );
        })}
        <div className="w-px h-20 bg-slate-text-secondary" />
      </motion.aside>

      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.645, 0.045, 0.355, 1.000] }}
        className="fixed bottom-0 right-6 z-40 hidden lg:block"
        aria-label="Email"
      >
        <a
          href={`mailto:${contact.email}`}
          className="text-slate-text-secondary hover:text-cyan-accent transition-colors duration-200 text-xs tracking-[0.1em] [writing-mode:vertical-rl]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {contact.email}
        </a>
      </motion.aside>
    </>
  );
};

export default Sidebar;
