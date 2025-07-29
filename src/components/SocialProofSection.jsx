import React from 'react';
import { motion } from 'framer-motion';

const SocialProofSection = () => {
  const testimonials = [
    {
      text: "Sacred Circle became my digital sanctuary. The practitioners here honor ancient wisdom while embracing modern accessibility. I've found my spiritual tribe.",
      author: "Maya Chen",
      role: "Meditation Teacher",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      text: "The marketplace connects me with authentic tools and herbs sourced with consciousness. Every purchase feels like a sacred exchange.",
      author: "River Thompson",
      role: "Herbalist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      text: "Finding genuine community has been transformative. The events and workshops nourish my soul in ways I never expected from a digital platform.",
      author: "Luna Starweaver",
      role: "Sound Healer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      text: "This platform honors the sacred nature of wellness. Every interaction feels intentional, every practitioner authentic. It's a true digital sanctuary.",
      author: "Sage Williams",
      role: "Yoga Instructor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      text: "The learning resources connect me to wisdom traditions I've always sought. Ancient teachings made accessible for modern practice.",
      author: "Aurora Moonchild",
      role: "Spiritual Seeker",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-br from-forest to-sage">
      {/* Sacred Fabric Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FBF7F0' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Flowing textile patterns */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <motion.path
            d="M0,100 Q300,200 600,100 T1200,150"
            stroke="rgba(251,247,240,0.1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M0,300 Q400,200 800,300 T1200,250"
            stroke="rgba(251,247,240,0.1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dancing text-cream mb-4 md:mb-6">
            Voices from the <span className="text-golden">Sacred Circle</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cream/80 font-crimson max-w-3xl mx-auto px-2">
            Hear from the souls who have found their home in our digital sanctuary
          </p>
        </motion.div>

        {/* Mobile-First Testimonials Layout */}
        <div className="block lg:hidden">
          {/* Mobile Stack Layout */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-full max-w-sm mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-cream/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-golden/20 relative">
                  <blockquote className="text-forest font-crimson leading-relaxed mb-4 italic text-sm">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <motion.div className="relative" whileHover={{ scale: 1.1 }}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-10 h-10 rounded-full object-cover border-2 border-terracotta/30"
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-sage/20 transform rotate-12"></div>
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <p className="font-dancing text-forest text-base font-medium truncate">{testimonial.author}</p>
                      <p className="text-forest/60 text-xs truncate">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Floating Layout */}
        <div className="hidden lg:block">
          <div className="relative h-[600px] xl:h-[700px]">
            {testimonials.map((testimonial, index) => {
              // Calculate positions for desktop floating layout
              const positions = [
                { top: '10%', left: '5%' },
                { top: '15%', right: '10%' },
                { top: '60%', left: '15%' },
                { bottom: '20%', right: '5%' },
                { bottom: '10%', left: '40%' }
              ];

              return (
                <motion.div
                  key={index}
                  className="absolute max-w-sm"
                  style={positions[index]}
                  initial={{ opacity: 0, scale: 0, rotate: Math.random() * 20 - 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2, y: -10 }}
                >
                  <div className="bg-cream/95 backdrop-blur-sm rounded-[2rem] p-6 shadow-xl border border-golden/20 relative">
                    {/* Organic speech bubble tail */}
                    <div className="absolute -bottom-3 left-6 w-6 h-6 bg-cream/95 transform rotate-45 rounded-sm"></div>
                    
                    <blockquote className="text-forest font-crimson leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <motion.div className="relative" whileHover={{ scale: 1.1 }}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover border-2 border-terracotta/30"
                        />
                        {/* Natural frame effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-sage/20 transform rotate-12"></div>
                      </motion.div>
                      <div>
                        <p className="font-dancing text-forest text-lg">{testimonial.author}</p>
                        <p className="text-forest/60 text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Hand-carved decoration */}
                    <motion.svg
                      className="absolute top-2 right-2 w-6 h-6 opacity-20"
                      viewBox="0 0 24 24"
                      initial={{ rotate: 0 }}
                      whileInView={{ rotate: 360 }}
                      transition={{ duration: 2, delay: 2 + index * 0.3 }}
                      viewport={{ once: true }}
                    >
                      <path d="M12 2 L15 9 L22 9 L17 14 L19 22 L12 18 L5 22 L7 14 L2 9 L9 9 Z" fill="#C67B5C" />
                    </motion.svg>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust Affirmations */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { number: "10,000+", label: "Sacred Souls", icon: "🌟" },
              { number: "500+", label: "Verified Practitioners", icon: "✨" },
              { number: "50+", label: "Wisdom Traditions", icon: "📿" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-dancing text-golden mb-1">{stat.number}</div>
                <div className="text-cream/80 font-crimson text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            className="text-cream/70 font-crimson italic mt-6 md:mt-8 max-w-2xl mx-auto text-sm sm:text-base px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            viewport={{ once: true }}
          >
            "In sacred community, we find not just connection, but transformation"
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;