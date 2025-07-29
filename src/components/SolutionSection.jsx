import React from 'react';
import {motion} from 'framer-motion';

const SolutionSection=()=> {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Harmonious Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
          {/* Mandala-like pattern forming */}
          <motion.g 
            initial={{opacity: 0, scale: 0}} 
            whileInView={{opacity: 0.6, scale: 1}} 
            transition={{duration: 2}} 
            viewport={{once: true}}
          >
            {/* Central circle */}
            <circle cx="600" cy="400" r="80" fill="url(#mandalaGradient)" opacity="0.3" />
            
            {/* Radiating petals */}
            {[...Array(8)].map((_, i)=> (
              <motion.ellipse 
                key={i} 
                cx="600" 
                cy="320" 
                rx="25" 
                ry="60" 
                fill="url(#petalGradient)" 
                opacity="0.4" 
                transform={`rotate(${i * 45} 600 400)`}
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                transition={{duration: 1, delay: 0.5 + i * 0.1}}
                viewport={{once: true}}
              />
            ))}
            
            {/* Connecting lines */}
            {[...Array(8)].map((_, i)=> (
              <motion.line 
                key={i} 
                x1="600" 
                y1="400" 
                x2={600 + Math.cos(i * 45 * Math.PI / 180) * 150} 
                y2={400 + Math.sin(i * 45 * Math.PI / 180) * 150} 
                stroke="#87A96B" 
                strokeWidth="2" 
                opacity="0.3"
                initial={{pathLength: 0}}
                whileInView={{pathLength: 1}}
                transition={{duration: 1.5, delay: 1 + i * 0.05}}
                viewport={{once: true}}
              />
            ))}
          </motion.g>
          
          <defs>
            <radialGradient id="mandalaGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#E8C547" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#C67B5C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2D5A27" stopOpacity="0.2" />
            </radialGradient>
            <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B8A9C9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#87A96B" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-dancing text-forest mb-6 md:mb-8 leading-tight"
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 1, delay: 0.3}}
            viewport={{once: true}}
          >
            A Digital <br />
            <span className="text-terracotta">Gathering</span> <br />
            of Sacred Intention
          </motion.h2>
          
          <motion.div 
            className="bg-cream/90 backdrop-blur-sm rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-2xl border border-sage/20 mb-8 md:mb-12"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.6}}
            viewport={{once: true}}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-forest font-crimson leading-relaxed mb-6 md:mb-8">
              Imagine a sacred digital sanctuary where authentic practitioners, mindful communities, and ancient wisdom flow together in perfect harmony
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Unified Experience",
                  description: "All your wellness needs in one sacred space",
                  icon: "🌸"
                },
                {
                  title: "Authentic Connection",
                  description: "Real practitioners, genuine community",
                  icon: "🤝"
                },
                {
                  title: "Sacred Wisdom",
                  description: "Ancient practices meet modern accessibility",
                  icon: "🌿"
                }
              ].map((feature, index)=> (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{opacity: 0, y: 30}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.6, delay: 0.9 + index * 0.2}}
                  viewport={{once: true}}
                  whileHover={{scale: 1.05, y: -5}}
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{feature.icon}</div>
                  <h3 className="text-lg md:text-xl font-dancing text-forest mb-2">{feature.title}</h3>
                  <p className="text-forest/70 font-crimson text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1, delay: 1.5}}
            viewport={{once: true}}
          >
            <p className="text-base sm:text-lg text-forest/70 font-crimson italic mb-6 md:mb-8">
              "In unity, we find our truest healing"
            </p>
            
            <motion.button 
              className="w-full sm:w-auto bg-gradient-to-r from-terracotta to-dusty-rose text-cream px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{scale: 1.05, y: -3}}
              whileTap={{scale: 0.95}}
            >
              Discover the Sacred Circle
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;