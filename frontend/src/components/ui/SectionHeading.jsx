import { motion } from 'framer-motion';
import { fadeUp } from './AnimatedSection';

const SectionHeading = ({ label, heading, className = "" }) => {
  return (
    <div className={`mb-12 lg:mb-16 ${className}`}>
      <motion.p 
        variants={fadeUp}
        className="text-xs uppercase tracking-[0.1em] text-gray-500 dark:text-gray-400 font-medium mb-3"
      >
        {label}
      </motion.p>
      <motion.h2 
        variants={fadeUp}
        className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white tracking-tight"
        style={{ letterSpacing: '-0.03em' }}
      >
        {heading}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
