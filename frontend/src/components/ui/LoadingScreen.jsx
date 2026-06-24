import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 bg-charcoal z-[100] flex items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl lg:text-5xl font-display font-bold text-slate-text-primary"
      >
        Poornachandran
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;
