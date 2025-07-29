import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Organic Background Illustration */}
      <div className="absolute inset-0">
        <svg className="w-full h-full object-cover" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
          {/* Flowing Hills */}
          <motion.path
            d="M0,400 Q300,200 600,350 T1200,300 L1200,800 L0,800 Z"
            fill="url(#gradient1)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,500 Q400,300 800,450 T1200,400 L1200,800 L0,800 Z"
            fill="url(#gradient2)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
          />

          {/* Floating Elements */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={150 + i * 120}
              cy={150 + (i % 3) * 200}
              r="3"
              fill={i % 3 === 0 ? "#87A96B" : i % 3 === 1 ? "#C67B5C" : "#B8A9C9"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}

          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#87A96B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2D5A27" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C67B5C" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#D4A5A5" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        {/* Decorative Elements - Responsive */}
        <motion.div
          className="absolute -top-12 -left-8 sm:-top-20 sm:-left-20 w-8 h-8 sm:w-16 sm:h-16 opacity-30"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M32 8 L36 24 L52 20 L40 32 L52 44 L36 40 L32 56 L28 40 L12 44 L24 32 L12 20 L28 24 Z" fill="#C67B5C" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute -bottom-8 -right-8 sm:-bottom-16 sm:-right-16 w-6 h-6 sm:w-12 sm:h-12 opacity-30"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: -360, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
        >
          <svg viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" stroke="#87A96B" strokeWidth="2" fill="none" />
            <circle cx="24" cy="24" r="12" stroke="#B8A9C9" strokeWidth="2" fill="none" />
            <circle cx="24" cy="24" r="4" fill="#E8C547" />
          </svg>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-12"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-dancing text-forest mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your Sacred <br />
            <span className="text-terracotta">Digital Home</span>
            <br />
            for Holistic Wellness
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-forest/80 font-crimson mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Where authentic practitioners, mindful communities, and sacred wisdom converge in harmony
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.button
              className="w-full sm:w-auto bg-gradient-to-r from-forest to-sage text-cream px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Your Journey
            </motion.button>

            <motion.button
              className="w-full sm:w-auto border-2 border-terracotta text-terracotta px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-terracotta hover:text-cream transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore the Community
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scattered Decorative Elements - Responsive */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 sm:w-8 sm:h-8 opacity-40"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M16 4 L20 12 L28 8 L24 16 L28 24 L20 20 L16 28 L12 20 L4 24 L8 16 L4 8 L12 12 Z" fill="#D4A5A5" />
          </svg>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on small screens */}
      <motion.div
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-forest/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-1 h-3 bg-forest/50 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;