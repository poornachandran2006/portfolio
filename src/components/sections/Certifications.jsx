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
    <section id="certifications" className="py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <SectionHeading label={certifications.label} heading={certifications.heading} />

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.items.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-4">
                  <Award size={24} className="text-gray-900 dark:text-white" />
                </div>

                {/* Cert Name */}
                <h3 className="font-medium text-gray-900 dark:text-white mb-2 leading-snug">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{cert.issuer}</p>

                {/* Date */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{cert.date}</p>

                {/* Verify Link */}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
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
