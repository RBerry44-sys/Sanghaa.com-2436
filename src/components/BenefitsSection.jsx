import React from 'react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const leftBenefits = [
    {
      title: "Authentic Community",
      description: "Connect with genuine seekers who share your values and spiritual journey",
      icon: "🌱"
    },
    {
      title: "Verified Practitioners",
      description: "Trust in practitioners who honor traditional lineages and ethical practices",
      icon: "✨"
    },
    {
      title: "Sacred Marketplace",
      description: "Access ethically sourced tools, herbs, and creations from conscious artisans",
      icon: "🎋"
    },
    {
      title: "Wisdom Traditions",
      description: "Learn from ancient teachings adapted for modern spiritual practice",
      icon: "📜"
    }
  ];

  const rightBenefits = [
    {
      title: "Mindful Events",
      description: "Participate in ceremonies, workshops, and gatherings that nourish the soul",
      icon: "🌙"
    },
    {
      title: "Personal Growth",
      description: "Track your spiritual journey with tools designed for conscious evolution",
      icon: "🦋"
    },
    {
      title: "Global Connection",
      description: "Join a worldwide network of practitioners and wisdom keepers",
      icon: "🌍"
    },
    {
      title: "Sacred Privacy",
      description: "Your spiritual journey remains private and protected in our sanctuary",
      icon: "🛡️"
    }
  ];

  const allBenefits = [...leftBenefits, ...rightBenefits];

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Flowing River Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <motion.path
            d="M0,400 Q200,200 400,400 T800,300 Q1000,200 1200,400"
            stroke="url(#riverGradient)"
            strokeWidth="60"
            fill="none"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M0,450 Q300,250 600,450 T1200,350"
            stroke="url(#riverGradient2)"
            strokeWidth="40"
            fill="none"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          <defs>
            <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#87A96B" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#C67B5C" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#B8A9C9" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="riverGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E8C547" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4A5A5" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dancing text-forest mb-4 md:mb-6">
            Where Ancient Wisdom <br />
            <span className="text-terracotta">Meets Modern Life</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-forest/70 font-crimson max-w-3xl mx-auto px-2">
            Experience the transformation when sacred practices flow seamlessly into your daily journey
          </p>
        </motion.div>

        {/* Mobile-First Layout */}
        <div className="block lg:hidden">
          {/* Mobile Stack Layout */}
          <div className="space-y-6">
            {allBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative w-full max-w-sm mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-cream to-sage-light rounded-2xl p-6 shadow-lg border border-sage/20 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl mb-2 flex-shrink-0">{benefit.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-dancing text-forest mb-2">{benefit.title}</h3>
                      <p className="text-forest/70 font-crimson leading-relaxed text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Two-Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left Column */}
          <div className="space-y-12">
            {leftBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div className="bg-gradient-to-br from-cream to-sage-light rounded-[2rem] p-8 shadow-lg border border-sage/20 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl mb-2">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-dancing text-forest mb-3">{benefit.title}</h3>
                      <p className="text-forest/70 font-crimson leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>

                  {/* Growing vine decoration */}
                  <motion.svg
                    className="absolute -bottom-2 -right-2 w-8 h-8 opacity-30"
                    viewBox="0 0 32 32"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <path d="M4 28 Q16 16 28 4 M12 28 Q20 20 28 12" stroke="#87A96B" strokeWidth="2" fill="none" />
                  </motion.svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12 lg:mt-16">
            {rightBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                whileHover={{ x: -10 }}
              >
                <div className="bg-gradient-to-bl from-cream to-lavender-light rounded-[2rem] p-8 shadow-lg border border-lavender/20 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl mb-2">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-dancing text-forest mb-3">{benefit.title}</h3>
                      <p className="text-forest/70 font-crimson leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>

                  {/* Blooming flower decoration */}
                  <motion.svg
                    className="absolute -top-2 -left-2 w-8 h-8 opacity-30"
                    viewBox="0 0 32 32"
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 1, delay: 1.5 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <circle cx="16" cy="16" r="3" fill="#C67B5C" />
                    <ellipse cx="16" cy="8" rx="3" ry="8" fill="#B8A9C9" opacity="0.7" />
                    <ellipse cx="24" cy="16" rx="8" ry="3" fill="#B8A9C9" opacity="0.7" />
                    <ellipse cx="16" cy="24" rx="3" ry="8" fill="#B8A9C9" opacity="0.7" />
                    <ellipse cx="8" cy="16" rx="8" ry="3" fill="#B8A9C9" opacity="0.7" />
                  </motion.svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Central Unity Message */}
        <motion.div
          className="text-center mt-12 md:mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-golden/20 via-terracotta/20 to-lavender/20 rounded-2xl md:rounded-[3rem] p-8 md:p-12 max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🌸
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-dancing text-forest mb-3 md:mb-4">Sacred Transformation</h3>
            <p className="text-forest/70 font-crimson leading-relaxed text-sm sm:text-base">
              When all elements flow together in harmony, your spiritual journey becomes a living mandala of growth, connection, and authentic awakening.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;