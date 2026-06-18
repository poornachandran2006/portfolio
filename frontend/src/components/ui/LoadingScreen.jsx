import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-[100] flex items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl lg:text-5xl font-display font-extrabold text-gray-900 dark:text-white"
        style={{ letterSpacing: '-0.03em' }}
      >
        Poornachandran
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;
