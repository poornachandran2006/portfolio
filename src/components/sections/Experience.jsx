import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import Tag from '../ui/Tag';
import { staggerContainer, fadeUp } from '../ui/AnimatedSection';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading label={experience.label} heading={experience.heading} />

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />

            <div className="space-y-12 lg:space-y-16">
              {experience.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 lg:left-1/2 w-3 h-3 bg-gray-900 dark:bg-white rounded-full -ml-[5px] lg:-ml-[6px] mt-2 hidden sm:block" />

                  {/* Content */}
                  <div className={`sm:pl-8 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-[calc(50%+2rem)]' : 'lg:pl-[calc(50%+2rem)]'}`}>
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                      {/* Period */}
                      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-2">
                        {item.period}
                      </p>

                      {/* Role */}
                      <h3 className="text-xl lg:text-2xl font-display font-semibold text-gray-900 dark:text-white mb-1">
                        {item.role}
                      </h3>

                      {/* Company */}
                      <p className="text-gray-500 dark:text-gray-400 mb-4">{item.company}</p>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                            <span className="text-gray-900 dark:text-white mt-1">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {item.techStack.map((tech, i) => (
                          <Tag key={i}>{tech}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
