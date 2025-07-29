import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import AuthModal from './AuthModal';
import { useAuth } from '../context/AuthContext';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiUser, FiLogOut } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, userProfile, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthClick = () => {
    setIsAuthModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-cream/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sage to-forest rounded-full flex items-center justify-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-cream rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-terracotta rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-dancing text-forest font-bold">
                Sanghaa
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {['Community', 'Practitioners', 'Events', 'Marketplace', 'Lifeademia'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-forest hover:text-terracotta transition-colors duration-300 font-medium text-sm lg:text-base"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}

              {/* User Menu or Sign In Button */}
              {user ? (
                <div className="relative">
                  <motion.button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 text-forest hover:text-terracotta transition-colors duration-300 font-medium"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-8 h-8 bg-terracotta/20 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiUser} className="w-4 h-4 text-terracotta" />
                    </div>
                    <span className="hidden lg:inline-block truncate max-w-24">
                      {userProfile?.first_name || user.email.split('@')[0]}
                    </span>
                  </motion.button>

                  {/* User Dropdown Menu */}
                  {showUserMenu && (
                    <motion.div
                      className="absolute right-0 mt-2 w-48 bg-cream rounded-xl shadow-xl border border-sage/20 py-2 z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 py-2 border-b border-sage/10">
                        <p className="text-sm font-medium text-forest truncate">
                          {userProfile?.first_name} {userProfile?.last_name}
                        </p>
                        <p className="text-xs text-forest/60 truncate">{user.email}</p>
                      </div>
                      <div className="pt-2">
                        <button
                          onClick={handleSignOut}
                          className="w-full text-left px-4 py-2 text-sm text-forest hover:bg-sage/10 transition-colors flex items-center space-x-2"
                        >
                          <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.button
                  onClick={handleAuthClick}
                  className="flex items-center space-x-2 text-forest hover:text-terracotta transition-colors duration-300 font-medium"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <SafeIcon icon={FiUser} className="w-4 h-4" />
                  <span>Sign In</span>
                </motion.button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-forest"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-4 pb-2 space-y-3 border-t border-sage/20 mt-3 bg-cream/50 backdrop-blur-sm rounded-xl px-4 py-4 shadow-lg border border-sage/30">
              {['Community', 'Practitioners', 'Events', 'Marketplace', 'Lifeademia'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-forest hover:text-terracotta transition-colors duration-300 font-medium py-2 text-base"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.a>
              ))}

              {/* Mobile User Menu or Sign In */}
              {user ? (
                <>
                  <div className="py-2 border-t border-sage/20 mt-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-terracotta/20 rounded-full flex items-center justify-center">
                        <SafeIcon icon={FiUser} className="w-4 h-4 text-terracotta" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-forest truncate">
                          {userProfile?.first_name} {userProfile?.last_name}
                        </p>
                        <p className="text-xs text-forest/60 truncate">{user.email}</p>
                      </div>
                    </div>
                    <motion.button
                      onClick={handleSignOut}
                      className="flex items-center space-x-2 text-forest hover:text-terracotta transition-colors duration-300 font-medium py-2"
                      whileHover={{ x: 10 }}
                    >
                      <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                      <span>Sign Out</span>
                    </motion.button>
                  </div>
                </>
              ) : (
                <motion.button
                  onClick={handleAuthClick}
                  className="flex items-center space-x-2 text-forest hover:text-terracotta transition-colors duration-300 font-medium py-2 border-t border-sage/20 mt-4 pt-4"
                  whileHover={{ x: 10 }}
                >
                  <SafeIcon icon={FiUser} className="w-4 h-4" />
                  <span>Sign In</span>
                </motion.button>
              )}
            </div>
          </motion.div>
        </nav>
      </motion.header>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Header;