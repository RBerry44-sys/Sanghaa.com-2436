import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: "Sacred Paths",
      links: ["Community", "Practitioners", "Events", "Marketplace", "Learning"]
    },
    {
      title: "Wisdom Traditions",
      links: ["Meditation", "Yoga", "Herbalism", "Energy Healing", "Spiritual Guidance"]
    },
    {
      title: "Sacred Support",
      links: ["Help Center", "Safety Guidelines", "Community Values", "Contact Us"]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-forest via-sage to-brown overflow-hidden">
      {/* Root system background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="xMidYMid slice">
          {/* Tree roots pattern - Simplified for mobile */}
          <motion.path
            d="M600,0 Q550,50 500,100 Q450,150 400,200 Q350,250 300,300"
            stroke="#FBF7F0"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M600,0 Q650,50 700,100 Q750,150 800,200 Q850,250 900,300"
            stroke="#FBF7F0"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M600,0 Q580,80 560,160 Q540,240 520,320"
            stroke="#FBF7F0"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M600,0 Q620,80 640,160 Q660,240 680,320"
            stroke="#FBF7F0"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Section */}
          <motion.div
            className="sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-golden to-terracotta rounded-full flex items-center justify-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-cream rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-forest rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl md:text-3xl font-dancing text-cream font-bold">
                Sanghaa
              </span>
            </div>
            <p className="text-cream/80 font-crimson leading-relaxed mb-4 md:mb-6 text-sm sm:text-base">
              A digital sanctuary where ancient wisdom meets modern community, nurturing authentic connections on the path of holistic wellness.
            </p>
            {/* Sacred symbols */}
            <div className="flex space-x-3 md:space-x-4">
              {['🌿', '✨', '🌸', '🕊️'].map((symbol, index) => (
                <motion.span
                  key={index}
                  className="text-xl md:text-2xl opacity-70 hover:opacity-100 cursor-pointer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  animate={{
                    y: [0, -3, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {symbol}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-dancing text-golden mb-4 md:mb-6">
                {section.title}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-cream/70 hover:text-cream font-crimson transition-colors duration-300 flex items-center group text-sm sm:text-base"
                    >
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-sage rounded-full mr-2 md:mr-3 group-hover:bg-golden transition-colors duration-300"></div>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Sacred Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent mb-6 md:mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-cream/60 font-crimson text-sm text-center md:text-left">
            © 2024 Sanghaa. Crafted with intention and love for the spiritual community.
          </div>

          {/* Sacred affirmations */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-cream/60">
            {[
              "Privacy Sacred",
              "Community Honored", 
              "Wisdom Protected",
              "Hearts Connected"
            ].map((affirmation, index) => (
              <motion.span
                key={index}
                className="hover:text-cream transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {affirmation}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Final blessing */}
        <motion.div
          className="text-center mt-6 md:mt-8 pt-6 md:pt-8 border-t border-cream/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-cream/50 font-crimson italic text-sm">
            "In sacred digital space, may all beings find peace, connection, and authentic growth"
          </p>
          <motion.div
            className="mt-4"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🙏
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;