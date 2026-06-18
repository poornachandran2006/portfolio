import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let rafId;
    const updateMousePosition = (e) => {
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovering ? 10 : 5),
          y: mousePosition.y - (isHovering ? 10 : 5),
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-[10px] h-[10px] bg-white rounded-full" />
      </motion.div>

      {/* Outer ring */}
      {!isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          animate={{
            x: mousePosition.x - 18,
            y: mousePosition.y - 18,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1,
          }}
        >
          <div className="w-[36px] h-[36px] border border-text-primary rounded-full opacity-30" />
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
