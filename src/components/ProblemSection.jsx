import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
  const problems = [
    { text: "Scattered across dozens of apps, losing connection to what truly matters" },
    { text: "Struggling to find authentic practitioners who align with your values" },
    { text: "Feeling isolated on your wellness journey without genuine community" },
    { text: "Overwhelmed by surface-level content that lacks depth and wisdom" },
    { text: "Missing the sacred rituals and mindful practices that ground you" }
  ];

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
          {/* Scattered, disconnected shapes - Reduced for mobile */}
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${150 + i * 120},${200 + (i % 3) * 150} Q${200 + i * 120},${150 + (i % 3) * 150} ${250 + i * 120},${200 + (i % 3) * 150} T${350 + i * 120},${250 + (i % 3) * 150}`}
              stroke={i % 3 === 0 ? "#C67B5C" : i % 3 === 1 ? "#87A96B" : "#B8A9C9"}
              strokeWidth="2"
              fill="none"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
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
            The Sacred is <span className="text-terracotta">Scattered</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-forest/70 font-crimson max-w-3xl mx-auto px-2">
            In our digital age, the elements of holistic wellness have become fragmented, leaving seekers wandering through disconnected spaces
          </p>
        </motion.div>

        {/* Mobile-First Problem Cards */}
        <div className="block md:hidden">
          {/* Mobile Stack Layout */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="w-full max-w-sm mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-cream to-sage-light p-6 rounded-2xl shadow-lg border-2 border-dashed border-terracotta/30 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-forest font-crimson text-sm leading-relaxed">
                    {problem.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Floating Layout */}
        <div className="hidden md:block">
          <div className="relative h-96 lg:h-[500px]">
            {problems.map((problem, index) => {
              // Calculate positions for desktop floating layout
              const positions = [
                { top: '10%', left: '15%' },
                { top: '30%', right: '20%' },
                { top: '50%', left: '10%' },
                { top: '70%', right: '15%' },
                { top: '85%', left: '25%' }
              ];

              return (
                <motion.div
                  key={index}
                  className="absolute max-w-xs"
                  style={positions[index]}
                  initial={{ opacity: 0, scale: 0, rotate: Math.random() * 360 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.2,
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <div className="bg-gradient-to-br from-cream to-sage-light p-6 rounded-[2rem] shadow-lg border-2 border-dashed border-terracotta/30 transform rotate-2">
                    <p className="text-forest font-crimson text-sm leading-relaxed">
                      {problem.text}
                    </p>
                    {/* Decorative crack */}
                    <svg className="absolute top-2 right-2 w-8 h-8 opacity-30" viewBox="0 0 32 32">
                      <path d="M8 8 L24 24 M16 4 L16 28 M4 16 L28 16" stroke="#C67B5C" strokeWidth="1" strokeDasharray="2,2" />
                    </svg>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Transition Element */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-terracotta to-dusty-rose mx-auto rounded-full"></div>
          <p className="text-forest/60 font-crimson mt-4 italic text-base sm:text-lg">
            But what if there was a sacred space where all could unite?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;