import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useInView as useSectionInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import Tag from '../ui/Tag';
import { staggerContainer, fadeUp } from '../ui/AnimatedSection';

const tagEase = [0.175, 0.885, 0.32, 1.275];

const SkillCategory = ({ tags }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <motion.div
          key={tag}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: i * 0.04,
            ease: tagEase,
          }}
        >
          <Tag>{tag}</Tag>
        </motion.div>
      ))}
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useSectionInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-content mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={staggerContainer}>
          <SectionHeading sectionNumber="02" label={skills.label} heading={skills.heading} />

          <div className="space-y-10">
            {Object.entries(skills.categories).map(([category, items]) => (
              <motion.div key={category} variants={fadeUp}>
                <h3 className="font-display text-sm text-slate-text-primary uppercase tracking-[0.1em] mb-3">
                  {category}
                </h3>
                <SkillCategory tags={items.map((skill) => skill.name)} />
              </motion.div>
            ))}

            <motion.div variants={fadeUp}>
              <h3 className="font-display text-sm text-slate-text-primary uppercase tracking-[0.1em] mb-3">
                System Design
              </h3>
              <SkillCategory tags={skills.systemDesign} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
