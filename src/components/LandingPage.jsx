import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './Header';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';
import SocialProofSection from './SocialProofSection';
import CTASection from './CTASection';
import Footer from './Footer';

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cream via-sage-light to-lavender-light overflow-hidden">
      {/* Organic Background Texture */}
      <motion.div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute inset-0 bg-organic-texture bg-cover bg-center mix-blend-soft-light"></div>
      </motion.div>

      {/* Floating Particles - Only render on client side */}
      <div className="fixed inset-0 pointer-events-none">
        {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sage/20 rounded-full"
            initial={{
              x: Math.random() * (window.innerWidth || 1200),
              y: Math.random() * (window.innerHeight || 800),
            }}
            animate={{
              x: mousePosition.x + (Math.random() - 0.5) * 100,
              y: mousePosition.y + (Math.random() - 0.5) * 100,
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              ease: "easeOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <BenefitsSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;