import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, fadeUp } from '../ui/AnimatedSection';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-24 lg:py-32 bg-charcoal">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading label={certifications.label} heading={certifications.heading} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.items.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-charcoal-secondary border border-border rounded-lg p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-md bg-charcoal-tertiary flex items-center justify-center mb-4">
                  <Award size={24} className="text-cyan-accent" />
                </div>

                <h3 className="font-display font-medium text-slate-text-primary mb-2 leading-snug">
                  {cert.name}
                </h3>

                <p className="text-sm text-slate-text-secondary mb-1">{cert.issuer}</p>

                <p className="text-xs text-slate-text-muted mb-4">{cert.date}</p>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-slate-text-secondary hover:text-cyan-accent transition-colors duration-200"
                  >
                    Verify
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
