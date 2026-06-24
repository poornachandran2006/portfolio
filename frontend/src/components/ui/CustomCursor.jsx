import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    let rafId;
    const move = (e) => {
      rafId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };
    const over = (e) => {
      setIsHovering(!!e.target.closest('a, button, input, textarea'));
    };
    const down = (e) => {
      setIsClicking(true);
      const id = Date.now();
      setRipples(r => [...r, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 400);
    };
    const up = () => setIsClicking(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    let animId;
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      setOuterPos(prev => ({
        x: lerp(prev.x, pos.x, 0.12),
        y: lerp(prev.y, pos.y, 0.12),
      }));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: pos.x, y: pos.y }}
        animate={{ scale: isClicking ? 0.7 : 1 }}
        transition={{ duration: 0.1 }}
      >
        {isHovering ? (
          <div style={{ transform: 'translate(-50%, -50%)', position: 'relative', width: 12, height: 12 }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 1, height: 8, background: '#00c8e8' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%) translateY(-8px)', width: 1, height: 8, background: '#00c8e8' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 8, height: 1, background: '#00c8e8' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%) translateX(-8px)', width: 8, height: 1, background: '#00c8e8' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 3, height: 3, background: '#00c8e8', borderRadius: '50%' }} />
          </div>
        ) : (
          <div style={{
            transform: 'translate(-50%, -50%)',
            width: 8, height: 8,
            background: '#00c8e8',
            borderRadius: '50%',
            opacity: 0.9,
          }} />
        )}
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: outerPos.x, y: outerPos.y }}
        animate={{
          scale: isClicking ? 1.3 : 1,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          opacity: isHovering ? 0.5 : 0.2,
        }}
        transition={{ duration: 0.15 }}
      >
        <div style={{
          transform: 'translate(-50%, -50%)',
          width: '100%', height: '100%',
          border: '1px solid #00c8e8',
          borderRadius: '50%',
        }} />
      </motion.div>

      <AnimatePresence>
        {ripples.map(rp => (
          <motion.div
            key={rp.id}
            className="fixed top-0 left-0 pointer-events-none z-[9997]"
            style={{ x: rp.x, y: rp.y }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div style={{
              transform: 'translate(-50%, -50%)',
              width: 40, height: 40,
              border: '1px solid #00c8e8',
              borderRadius: '50%',
            }} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;
