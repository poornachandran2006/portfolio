import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-[#0B0F19] overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* GRADIENT GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* LABEL */}
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={16} className="text-blue-500" />
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-medium">
                Full Stack AI Engineer • Building Scalable Systems
              </p>
            </div>

            {/* HEADING */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-6">
              I Build Intelligent Systems That Scale
            </h1>

            {/* SECOND LINE */}
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
              From AI Pipelines to Production Applications
            </h2>

            {/* SUBTEXT */}
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-10">
              I design and engineer scalable AI-powered systems using modern web
              technologies, vector search, and production-grade architectures —
              focused on solving real-world problems efficiently.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">

              {/* PRIMARY */}
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all"
              >
                View Projects
              </motion.button>

              {/* SECONDARY */}
              <a
                href="/Resume_Poornachandran.pdf"
                download="Poornachandran_Resume.pdf"
                className="px-7 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Download Resume
              </a>

              {/* CONTACT */}
              <button
                onClick={scrollToContact}
                className="px-7 py-3 rounded-full text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Contact →
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — AI SYSTEM VISUAL */}
          <div className="relative hidden lg:flex items-center justify-center h-[500px]">

            {/* CENTRAL NODE */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl"
            />

            {/* CONNECTING NODES */}
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60) * (Math.PI / 180);
              const x = Math.cos(angle) * 160;
              const y = Math.sin(angle) * 160;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2 + i, repeat: Infinity }}
                  className="absolute"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <div className="w-4 h-4 rounded-full bg-blue-400 shadow-md" />

                  {/* LINE */}
                  <div
                    className="absolute top-1/2 left-1/2 w-[160px] h-[1px] bg-gradient-to-r from-blue-500/40 to-transparent origin-left"
                    style={{
                      transform: `rotate(${i * 60}deg)`,
                    }}
                  />
                </motion.div>
              );
            })}

            {/* OUTER RING */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[350px] h-[350px] border border-gray-300 dark:border-gray-700 rounded-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;