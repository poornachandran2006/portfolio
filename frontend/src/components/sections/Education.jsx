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
    <section id="education" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading label={education.label} heading={education.heading} />

          <motion.div
            variants={fadeUp}
            className="bg-charcoal-secondary border border-border border-l-2 border-l-cyan-accent-border rounded-lg p-6 lg:p-8 mb-8 card-hover"
          >
            <h3 className="text-xl font-display font-semibold text-slate-text-primary mb-2">
              {education.degree}
            </h3>
            <p className="text-lg text-slate-text-secondary mb-2">{education.institution}</p>
            <p className="text-sm text-slate-text-muted mb-6">{education.year}</p>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-text-muted font-medium mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, index) => (
                  <Tag key={index} variant="tech">{course}</Tag>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-charcoal-secondary border border-border rounded-lg p-6 lg:p-8 card-hover"
          >
            <div className="relative">
              <svg
                className="absolute -top-2 -left-2 w-8 h-8 text-cyan-accent opacity-20"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <p className="text-lg lg:text-xl text-slate-text-secondary italic leading-relaxed mb-4 pl-6">
                {education.quote}
              </p>
              <p className="text-sm font-medium text-slate-text-primary pl-6">— {education.author}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
