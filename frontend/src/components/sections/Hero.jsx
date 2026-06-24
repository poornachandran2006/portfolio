import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import TypewriterText from "../ui/TypewriterText";

const lineEase = [0.645, 0.045, 0.355, 1.000];

const heroLines = [
  { type: "heading", content: "I Build Intelligent Systems That Scale" },
  { type: "subheading", content: "From AI Pipelines to Production Applications" },
  { type: "paragraph", content: "I design and engineer scalable AI-powered systems using modern web technologies, vector search, and production-grade architectures — focused on solving real-world problems efficiently." },
];

const labelText = "Full Stack AI Engineer • Building Scalable Systems";

const Hero = () => {
  const springX = useSpring(0, { stiffness: 60, damping: 20 });
  const springY = useSpring(0, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handle = (e) => {
      if (window.innerWidth < 768) return;
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth * 6;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight * 6;
      springX.set(x);
      springY.set(y);
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, [springX, springY]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.25 + i * 0.15, ease: lineEase },
    }),
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-charcoal">
      <div className="relative max-w-content mx-auto px-6 py-24 w-full">
        <motion.div className="max-w-3xl" style={{ x: springX, y: springY }}>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            className="flex items-center gap-2 mb-6 w-fit px-3 py-1.5 rounded-full"
            style={{
              background: '#0f2a1a',
              border: '1px solid rgba(34, 197, 94, 0.25)',
            }}
          >
            <div className="relative flex items-center justify-center w-2 h-2">
              <div
                className="absolute w-2 h-2 rounded-full"
                style={{ background: '#22c55e' }}
              />
              <motion.div
                className="absolute rounded-full"
                style={{ width: 8, height: 8, background: '#22c55e' }}
                animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
              />
            </div>
            <span style={{
              fontFamily: 'Inter',
              fontSize: 12,
              color: '#22c55e',
              letterSpacing: '0.05em',
            }}>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            className="font-display text-base text-cyan-accent tracking-[0.1em] mb-5"
          >
            <TypewriterText text={labelText} delay={800} />
          </motion.p>

          {heroLines.map((line, i) => {
            const staggerIndex = i + 2;
            if (line.type === "heading") {
              return (
                <motion.h1
                  key={i}
                  custom={staggerIndex}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className="name-shimmer font-display font-bold text-slate-text-primary leading-[1.1] mb-4"
                  style={{ fontSize: "clamp(40px, 8vw, 72px)" }}
                >
                  {line.content}
                </motion.h1>
              );
            }
            if (line.type === "subheading") {
              return (
                <motion.h2
                  key={i}
                  custom={staggerIndex}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className="font-display font-semibold text-slate-text-secondary leading-[1.1] mb-6"
                  style={{ fontSize: "clamp(32px, 6vw, 56px)" }}
                >
                  {line.content}
                </motion.h2>
              );
            }
            return (
              <motion.p
                key={i}
                custom={staggerIndex}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
                className="text-slate-text-secondary max-w-[540px] text-[17px] leading-[1.7]"
              >
                {line.content}
              </motion.p>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 + (heroLines.length + 2) * 0.15, ease: lineEase }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button onClick={scrollToProjects} className="btn-primary px-7 py-3">
              View Projects
            </button>
            <a
              href="/Resume_Poornachandran.pdf"
              download="Poornachandran_Resume.pdf"
              className="btn-secondary px-7 py-3"
            >
              Download Resume
            </a>
            <button
              onClick={scrollToContact}
              className="btn-secondary px-7 py-3 border-transparent text-slate-text-secondary hover:text-cyan-accent hover:border-transparent"
            >
              Contact →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
