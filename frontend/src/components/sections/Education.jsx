import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import Tag from '../ui/Tag';
import { staggerContainer, fadeUp } from '../ui/AnimatedSection';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading label={education.label} heading={education.heading} />

          {/* Education Card */}
          <motion.div
            variants={fadeUp}
            className="bg-white dark:bg-gray-900 border-l-[3px] border-l-gray-900 dark:border-l-white border-t border-r border-b border-gray-200 dark:border-gray-700 rounded-2xl p-6 lg:p-8 shadow-sm mb-8"
          >
            <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-2">
              {education.degree}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{education.institution}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{education.year}</p>

            {/* Coursework */}
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, index) => (
                  <Tag key={index}>{course}</Tag>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={fadeUp}
            className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 lg:p-8"
          >
            <div className="relative">
              <svg
                className="absolute -top-2 -left-2 w-8 h-8 text-gray-300 dark:text-gray-700 opacity-50"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 italic leading-relaxed mb-4 pl-6">
                {education.quote}
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white pl-6">— {education.author}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
