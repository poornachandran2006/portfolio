import { motion } from 'framer-motion';

const SectionDivider = () => (
  <div className="flex items-center justify-center py-4 px-6 max-w-[1100px] mx-auto">
    <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #1e1e1e)' }} />
    <motion.div
      className="mx-4 w-[6px] h-[6px] rotate-45 flex-shrink-0"
      style={{ background: '#00c8e8', opacity: 0.6 }}
      whileInView={{ opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      viewport={{ once: false }}
    />
    <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, #1e1e1e, transparent)' }} />
  </div>
);

export default SectionDivider;
