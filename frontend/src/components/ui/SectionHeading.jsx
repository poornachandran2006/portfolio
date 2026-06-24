import { motion } from 'framer-motion';
import { fadeUp } from './AnimatedSection';

const SectionHeading = ({ sectionNumber, label, heading, className = "" }) => {
  const formattedLabel = sectionNumber
    ? `${sectionNumber}. ${label}`.toUpperCase()
    : label.toUpperCase();

  return (
    <div className={`mb-12 lg:mb-16 ${className}`}>
      <motion.p
        variants={fadeUp}
        className="section-label"
      >
        {formattedLabel}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-3xl lg:text-4xl font-display font-semibold text-slate-text-primary tracking-tight"
      >
        {heading}
      </motion.h2>
      <motion.div
        variants={fadeUp}
        className="mt-2 h-px w-[200px] bg-gradient-to-r from-cyan-accent to-transparent"
      />
    </div>
  );
};

export default SectionHeading;
