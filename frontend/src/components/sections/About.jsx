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
    <section id="about" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading sectionNumber="01" label={about.label} heading={about.heading} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div variants={fadeUp} className="space-y-6">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base lg:text-lg text-slate-text-secondary leading-[1.7]">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-charcoal-secondary border border-border rounded-lg p-6 lg:p-8 card-hover h-fit"
            >
              <h3 className="font-display font-semibold text-lg mb-6 text-slate-text-primary">
                My Approach
              </h3>
              <div className="space-y-4">
                {about.approach.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-md bg-charcoal-tertiary flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-cyan-accent" />
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-medium text-slate-text-primary">{item.label}</p>
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
