import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { projects } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import Tag from '../ui/Tag';
import { staggerContainer, fadeUp } from '../ui/AnimatedSection';

const { ArrowRight, ExternalLink, Network, Boxes, TrendingUp } = Icons;
const GithubIcon = Icons.Github || Icons.GithubIcon || (() => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>);

const iconMap = {
  Network,
  Boxes,
  TrendingUp
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading label={projects.label} heading={projects.heading} />

          {/* Featured Project */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 lg:p-12 shadow-sm mb-8 lg:mb-12 relative overflow-hidden group"
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />

            {/* Flagship Badge */}
            <div className="mb-6 relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Tag variant="dark">{projects.featured.badge}</Tag>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
              {/* Left Column */}
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.featured.tags.map((tag, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Tag>{tag}</Tag>
                    </motion.div>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4"
                    style={{ letterSpacing: '-0.02em' }}>
                  {projects.featured.title}
                </h3>

                {/* Problem */}
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-2">Problem</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{projects.featured.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-2">Solution</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{projects.featured.solution}</p>
                </div>

                {/* Architecture Flow */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-4">Architecture</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {projects.featured.architecture.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs font-medium text-gray-900 dark:text-white">
                          {step}
                        </div>
                        {index < projects.featured.architecture.length - 1 && (
                          <ArrowRight size={14} className="mx-1 text-gray-400 dark:text-gray-600" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {projects.featured.techStack.map((tech, index) => (
                      <Tag key={index}>{tech}</Tag>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={projects.featured.github}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all"
                  >
                    <GithubIcon size={16} />
                    View on GitHub
                  </motion.a>
                  <motion.a
                    href={projects.featured.caseStudy}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
                  >
                    Case Study
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Right Column - Features */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h4 className="font-display font-semibold text-lg mb-4 text-gray-900 dark:text-white">Key Features</h4>
                <div className="space-y-2 mb-6">
                  {projects.featured.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-gray-900 dark:text-white mt-1">✓</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {projects.featured.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-900 dark:text-white"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Project */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
          >
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(90deg, rgba(59,130,246,0.5), rgba(168,85,247,0.5))",
                padding: "1px",
              }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projects.secondary.tags.map((tag, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Tag>{tag}</Tag>
                  </motion.div>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white mb-3">
                {projects.secondary.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {projects.secondary.description}
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {projects.secondary.keyHighlights.map((highlight, index) => {
                  const Icon = iconMap[highlight.icon];
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={18} className="text-gray-900 dark:text-white" />
                      </motion.div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{highlight.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {projects.secondary.techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Tag>{tech}</Tag>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
