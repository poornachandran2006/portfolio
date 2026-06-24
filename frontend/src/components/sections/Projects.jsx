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

const AnimatedLeftBorder = ({ delay = 0 }) => (
  <motion.div
    className="absolute left-0 top-0 w-[2px] bg-cyan-accent-border"
    initial={{ scaleY: 0 }}
    whileInView={{ scaleY: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay }}
    style={{ transformOrigin: 'top', height: '100%' }}
  />
);

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading sectionNumber="03" label={projects.label} heading={projects.heading} />

          <motion.div
            variants={fadeUp}
            className="project-card bg-charcoal-secondary border border-border rounded-lg p-7 lg:p-8 mb-8 card-hover group"
          >
            <AnimatedLeftBorder delay={0} />

            <div className="mb-6">
              <Tag variant="accent">{projects.featured.badge}</Tag>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.featured.tags.map((tag, index) => (
                    <Tag key={index} variant="tech">{tag}</Tag>
                  ))}
                </div>

                <h3 className="text-xl font-display font-semibold text-slate-text-primary mb-4">
                  {projects.featured.title}
                </h3>

                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-slate-text-muted font-medium mb-2">Problem</p>
                  <p className="text-slate-text-secondary text-[15px] leading-relaxed">{projects.featured.problem}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-slate-text-muted font-medium mb-2">Solution</p>
                  <p className="text-slate-text-secondary text-[15px] leading-relaxed">{projects.featured.solution}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-slate-text-muted font-medium mb-4">Architecture</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {projects.featured.architecture.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className="px-3 py-1.5 border border-border rounded bg-charcoal-tertiary text-xs font-medium text-slate-text-primary">
                          {step}
                        </div>
                        {index < projects.featured.architecture.length - 1 && (
                          <ArrowRight size={14} className="mx-1 text-slate-text-muted" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-slate-text-muted font-medium mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {projects.featured.techStack.map((tech, index) => (
                      <Tag key={index} variant="tech">{tech}</Tag>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={projects.featured.github}
                    className="inline-flex items-center gap-2 text-slate-text-secondary hover:text-cyan-accent transition-colors duration-200 text-sm"
                  >
                    <GithubIcon size={16} />
                    View on GitHub
                  </a>
                  <a
                    href={projects.featured.caseStudy}
                    className="inline-flex items-center gap-2 text-slate-text-secondary hover:text-cyan-accent transition-colors duration-200 text-sm"
                  >
                    Case Study
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="bg-charcoal border border-border rounded-lg p-6">
                <h4 className="font-display font-semibold text-lg mb-4 text-slate-text-primary">Key Features</h4>
                <div className="space-y-2 mb-6">
                  {projects.featured.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-cyan-accent mt-1">✓</span>
                      <span className="text-sm text-slate-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {projects.featured.highlights.map((highlight, index) => (
                    <Tag key={index} variant="tech">{highlight}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="project-card bg-charcoal-secondary border border-border rounded-lg p-7 lg:p-8 card-hover"
          >
            <AnimatedLeftBorder delay={0.15} />

            <div className="flex flex-wrap gap-2 mb-4">
              {projects.secondary.tags.map((tag, index) => (
                <Tag key={index} variant="tech">{tag}</Tag>
              ))}
            </div>

            <h3 className="text-xl font-display font-semibold text-slate-text-primary mb-3">
              {projects.secondary.title}
            </h3>

            <p className="text-slate-text-secondary text-[15px] leading-relaxed mb-6">
              {projects.secondary.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {projects.secondary.keyHighlights.map((highlight, index) => {
                const Icon = iconMap[highlight.icon];
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-charcoal-tertiary flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-cyan-accent" />
                    </div>
                    <span className="text-sm font-medium text-slate-text-primary">{highlight.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              {projects.secondary.techStack.map((tech, index) => (
                <Tag key={index} variant="tech">{tech}</Tag>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
