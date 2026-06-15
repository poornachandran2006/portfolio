import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Building2, Bot, BarChart3 } from 'lucide-react';
import { about } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeUp } from '../ui/AnimatedSection';

const iconMap = {
  Target,
  Building2,
  Bot,
  BarChart3
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading label={about.label} heading={about.heading} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left - Main Content */}
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Right - Approach Card */}
            <motion.div
              variants={fadeUp}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 lg:p-8 shadow-sm h-fit"
            >
              <h3 className="font-display font-semibold text-xl mb-6 text-gray-900 dark:text-white">
                My Approach
              </h3>
              <div className="space-y-4">
                {about.approach.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-gray-900 dark:text-white" />
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
