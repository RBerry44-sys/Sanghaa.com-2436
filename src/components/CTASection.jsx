import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Garden Gate Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-golden/10 via-terracotta/10 to-lavender/10"></div>
        
        {/* Sanctuary entrance illustration */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="xMidYMid slice">
          {/* Gateway arch */}
          <motion.path
            d="M400,500 Q400,200 600,200 Q800,200 800,500"
            stroke="url(#gateGradient)"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          
          {/* Decorative pillars */}
          <motion.rect
            x="380"
            y="300"
            width="20"
            height="200"
            fill="url(#pillarGradient)"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.rect
            x="800"
            y="300"
            width="20"
            height="200"
            fill="url(#pillarGradient)"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            viewport={{ once: true }}
          />
          
          {/* Welcome light rays - Reduced for mobile */}
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1="600"
              y1="200"
              x2={520 + i * 20}
              y2="100"
              stroke="rgba(232,197,71,0.3)"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: 1 + i * 0.1,
                repeat: Infinity,
                repeatDelay: 3
              }}
              viewport={{ once: true }}
            />
          ))}
          
          {/* Floating welcome elements - Reduced for mobile */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={350 + i * 60}
              cy={150 + (i % 3) * 100}
              r="3"
              fill={i % 3 === 0 ? "#87A96B" : i % 3 === 1 ? "#C67B5C" : "#B8A9C9"}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.6 }}
              transition={{
                duration: 1,
                delay: 1.5 + i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
              viewport={{ once: true }}
            />
          ))}
          
          <defs>
            <linearGradient id="gateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D5A27" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#C67B5C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#87A96B" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="pillarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B6F47" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2D5A27" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Sacred entrance message */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6">
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🌸
              </motion.span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-dancing text-forest mb-4 md:mb-6 leading-tight px-2">
              The Gates of Your <br />
              <span className="text-terracotta">Sacred Journey</span>
              <br />
              Await
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-forest/70 font-crimson leading-relaxed mb-6 md:mb-8 px-2">
              Step through the threshold into a sanctuary where ancient wisdom meets modern community, where your spiritual path unfolds in sacred digital harmony
            </p>
          </motion.div>

          {/* Sacred entrance portal */}
          <motion.div
            className="bg-gradient-to-br from-cream/95 to-sage-light/95 backdrop-blur-sm rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-2xl border-2 border-golden/30 mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6"
              animate={{
                y: [0, -10, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-dancing text-forest mb-4 md:mb-6">
              Your Sacred Circle Awaits
            </h3>
            <p className="text-forest/70 font-crimson mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
              Join thousands of conscious souls who have found their digital sanctuary. Your journey of authentic connection and spiritual growth begins with a single step.
            </p>

            {/* Sacred action button */}
            <motion.button
              className="w-full sm:w-auto bg-gradient-to-r from-forest via-sage to-terracotta text-cream px-8 sm:px-12 py-4 sm:py-5 rounded-full font-medium text-lg sm:text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(45,90,39,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              {/* Magical shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              <span className="relative z-10">Enter the Sacred Circle</span>
            </motion.button>

            {/* Trust signals as gentle affirmations */}
            <motion.div
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-6 md:mt-8 text-xs sm:text-sm text-forest/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sage rounded-full"></div>
                <span>Sacred & Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                <span>Authentic Community</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-lavender rounded-full"></div>
                <span>Free to Begin</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Sacred blessing */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <p className="text-forest/60 font-crimson italic text-base sm:text-lg px-4">
              "May your digital journey be as sacred as your spiritual path"
            </p>
            <motion.div
              className="mt-4 md:mt-6 flex justify-center space-x-2 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              viewport={{ once: true }}
            >
              {['🌿', '✨', '🌸', '🕊️', '🌙'].map((symbol, index) => (
                <motion.span
                  key={index}
                  className="text-xl sm:text-2xl opacity-60"
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {symbol}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;