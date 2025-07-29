import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: "Sacred Gatherings",
      description: "Join meaningful events, workshops, and ceremonies that nourish your soul",
      icon: "🌙",
      benefits: ["Virtual & in-person events", "Authentic facilitators", "Sacred ceremony spaces"]
    },
    {
      title: "Wisdom Keepers",
      description: "Connect with verified practitioners who honor ancient traditions",
      icon: "🌟",
      benefits: ["Verified practitioners", "Traditional lineages", "Personalized guidance"]
    },
    {
      title: "Abundance Exchange",
      description: "A conscious marketplace for sacred tools, herbs, and healing arts",
      icon: "🌺",
      benefits: ["Ethically sourced products", "Artisan creations", "Fair trade practices"]
    },
    {
      title: "Ancient Wisdom",
      description: "Access timeless teachings and practices from wisdom traditions",
      icon: "📿",
      benefits: ["Sacred texts", "Guided practices", "Lineage teachings"]
    },
    {
      title: "Soul Connections",
      description: "Build authentic relationships with like-minded spiritual seekers",
      icon: "💫",
      benefits: ["Interest-based groups", "Meaningful conversations", "Support circles"]
    }
  ];

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Background Mandala - Responsive */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl" viewBox="0 0 800 800" fill="none">
          {/* Central Hub */}
          <motion.circle
            cx="400"
            cy="400"
            r="60"
            fill="url(#centerGradient)"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          {/* Connecting Lines */}
          {features.map((_, index) => (
            <motion.line
              key={index}
              x1="400"
              y1="400"
              x2={400 + Math.cos((index * 72 - 90) * Math.PI / 180) * 200}
              y2={400 + Math.sin((index * 72 - 90) * Math.PI / 180) * 200}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
              viewport={{ once: true }}
            />
          ))}

          {/* Outer Circles */}
          {features.map((_, index) => (
            <motion.circle
              key={index}
              cx={400 + Math.cos((index * 72 - 90) * Math.PI / 180) * 200}
              cy={400 + Math.sin((index * 72 - 90) * Math.PI / 180) * 200}
              r="40"
              fill="url(#featureGradient)"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
            />
          ))}

          <defs>
            <radialGradient id="centerGradient">
              <stop offset="0%" stopColor="#E8C547" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C67B5C" stopOpacity="0.6" />
            </radialGradient>
            <linearGradient id="lineGradient">
              <stop offset="0%" stopColor="#87A96B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#B8A9C9" stopOpacity="0.4" />
            </linearGradient>
            <radialGradient id="featureGradient">
              <stop offset="0%" stopColor="#FBF7F0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#87A96B" stopOpacity="0.7" />
            </radialGradient>
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
            The Five Sacred <span className="text-terracotta">Pillars</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-forest/70 font-crimson max-w-3xl mx-auto px-2">
            Each element flows from the center, creating a harmonious ecosystem of wellness
          </p>
        </motion.div>

        {/* Mobile-First Feature Cards Layout */}
        <div className="block md:hidden">
          {/* Mobile Stack Layout */}
          <div className="space-y-6 px-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-sm mx-auto"
              >
                <div className="bg-cream/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-sage/20 text-center hover:shadow-2xl transition-all duration-300">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-dancing text-forest mb-3">{feature.title}</h3>
                  <p className="text-forest/70 font-crimson mb-4 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefitIndex}
                        className="flex items-center justify-center text-xs text-forest/60"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + benefitIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-terracotta rounded-full mr-2"></div>
                        {benefit}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Mandala Layout - Hidden on Mobile */}
        <div className="hidden md:block">
          <div className="relative h-[500px] lg:h-[700px]">
            {features.map((feature, index) => {
              // Calculate positions for desktop mandala
              const positions = [
                { top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }, // Sacred Gatherings
                { top: '25%', right: '15%', transform: 'translate(50%, -50%)' }, // Wisdom Keepers
                { top: '25%', left: '15%', transform: 'translate(-50%, -50%)' }, // Abundance Exchange
                { bottom: '25%', right: '15%', transform: 'translate(50%, 50%)' }, // Ancient Wisdom
                { bottom: '0%', left: '50%', transform: 'translate(-50%, 50%)' } // Soul Connections
              ];

              return (
                <motion.div
                  key={index}
                  className="absolute w-72 lg:w-80 max-w-sm"
                  style={positions[index]}
                  initial={{ opacity: 0, scale: 0, rotate: 45 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    zIndex: 50,
                    transition: { duration: 0.3 }
                  }}
                  animate={{ zIndex: 10 }}
                >
                  <div className="bg-cream/95 backdrop-blur-sm rounded-[2rem] p-6 lg:p-8 shadow-xl border border-sage/20 text-center hover:shadow-2xl transition-shadow duration-300">
                    <div className="text-4xl lg:text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl lg:text-2xl font-dancing text-forest mb-4">{feature.title}</h3>
                    <p className="text-forest/70 font-crimson mb-6 leading-relaxed text-sm lg:text-base">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          className="flex items-center justify-center text-xs lg:text-sm text-forest/60"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 2 + index * 0.2 + benefitIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-terracotta rounded-full mr-3"></div>
                          {benefit}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Central Message */}
        <motion.div
          className="text-center mt-8 md:mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-golden/20 to-terracotta/20 rounded-2xl md:rounded-full p-8 md:p-12 max-w-sm md:max-w-md mx-auto">
            <h3 className="text-xl md:text-2xl font-dancing text-forest mb-3 md:mb-4">Sacred Unity</h3>
            <p className="text-forest/70 font-crimson text-sm md:text-base">
              When all pillars align, transformation flows naturally
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;