import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { Menu, X } from 'lucide-react';

import { navigation } from '../../data/portfolioData';



const navEase = [0.645, 0.045, 0.355, 1.000];



const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('');



  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 100);

    };



    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  useEffect(() => {

    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            setActiveSection(entry.target.id);

          }

        });

      },

      { threshold: 0.4 }

    );

    sections.forEach(s => observer.observe(s));

    return () => observer.disconnect();

  }, []);



  const scrollToSection = (href) => {

    const element = document.querySelector(href);

    if (element) {

      element.scrollIntoView({ behavior: 'smooth' });

      setIsMobileMenuOpen(false);

    }

  };



  return (

    <>

      <motion.nav

        initial={{ y: -20, opacity: 0 }}

        animate={{ y: 0, opacity: 1 }}

        transition={{ duration: 0.6, delay: 0.1, ease: navEase }}

        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled

          ? 'bg-[#0a0a0aee] backdrop-blur-sm shadow-nav'

          : 'bg-transparent'

          }`}

      >

        <div className="max-w-content mx-auto px-6">

          <div className="flex items-center justify-between h-[70px]">

            <a

              href="#hero"

              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}

              className="font-display font-semibold text-slate-text-primary"

            >

              {navigation.name}

            </a>



            <div className="hidden lg:flex items-center gap-8">

              {navigation.links.map((link, index) => {

                const num = String(index + 1).padStart(2, '0');

                const sectionId = link.href.substring(1);

                const isActive = activeSection === sectionId;

                return (

                  <div key={link.href} className="flex flex-col items-center">

                    <a

                      href={link.href}

                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}

                      className={`nav-link ${isActive ? 'text-cyan-accent' : 'text-slate-text-secondary'}`}

                    >

                      <span className="text-cyan-accent mr-1">{num}.</span>

                      {link.label}

                    </a>

                    {isActive && (

                      <motion.div

                        layoutId="active-dot"

                        className="w-1 h-1 bg-cyan-accent rounded-full mx-auto mt-1"

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        transition={{ duration: 0.2 }}

                      />

                    )}

                  </div>

                );

              })}

              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-sm"
              >
                {navigation.cta.label}
              </button>

            </div>



            <div className="flex items-center lg:hidden">

              <button

                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

                className="p-2 text-slate-text-primary"

                aria-label="Toggle menu"

              >

                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}

              </button>

            </div>

          </div>

        </div>

      </motion.nav>



      <AnimatePresence>

        {isMobileMenuOpen && (

          <motion.div

            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            exit={{ opacity: 0, y: -20 }}

            transition={{ duration: 0.2 }}

            className="fixed inset-0 z-40 bg-charcoal lg:hidden"

            style={{ top: '70px' }}

          >

            <motion.div

              variants={{

                hidden: {},

                visible: { transition: { staggerChildren: 0.05 } }

              }}

              initial="hidden"

              animate="visible"

              className="flex flex-col items-center justify-center h-full gap-8 px-6"

            >

              {navigation.links.map((link, index) => {

                const sectionId = link.href.substring(1);

                const isActive = activeSection === sectionId;

                return (

                  <motion.a

                    key={link.href}

                    variants={{

                      hidden: { opacity: 0, y: 20 },

                      visible: { opacity: 1, y: 0 }

                    }}

                    href={link.href}

                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}

                    className={`font-display text-2xl font-semibold transition-colors duration-200 ${isActive ? 'text-cyan-accent' : 'text-slate-text-primary hover:text-cyan-accent'

                      }`}

                  >

                    <span className="text-cyan-accent">{String(index + 1).padStart(2, '0')}.</span> {link.label}

                  </motion.a>

                );

              })}

              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-sm"
              >
                {navigation.cta.label}
              </motion.button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

};



export default Navbar;


