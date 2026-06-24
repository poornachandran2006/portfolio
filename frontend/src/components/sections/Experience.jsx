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
    <section id="experience" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading sectionNumber="04" label={experience.label} heading={experience.heading} />

          <div className="relative pl-8">
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-12">
              {experience.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="relative"
                >
                  <div className="absolute -left-8 top-2 w-2 h-2 rounded-full bg-cyan-accent" />

                  <div className="bg-charcoal-secondary border border-border rounded-lg p-6 lg:p-8 card-hover">
                    <p className="text-[13px] text-slate-text-muted mb-2">
                      {item.period}
                    </p>

                    <h3 className="text-lg font-display font-semibold text-slate-text-primary mb-1">
                      {item.role}
                    </h3>

                    <p className="font-display font-semibold text-cyan-accent mb-4">{item.company}</p>

                    <ul className="space-y-2 mb-4">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-text-secondary text-sm leading-relaxed">
                          <span className="text-cyan-accent mt-1.5 text-xs">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech, i) => (
                        <Tag key={i} variant="tech">{tech}</Tag>
                      ))}
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
