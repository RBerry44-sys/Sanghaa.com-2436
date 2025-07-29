import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import supabase from '../lib/supabase';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiEye, FiEyeOff, FiUser, FiMail, FiPhone, FiBriefcase, FiHeart } = FiIcons;

const AuthModal = ({ isOpen, onClose }) => {
  const [authMode, setAuthMode] = useState('signin'); // 'signin', 'signup'
  const [userType, setUserType] = useState('seeker'); // 'seeker', 'practitioner'
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    businessName: '',
    practitionerType: ''
  });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState(null);
  const [authSuccess, setAuthSuccess] = useState(null);

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      businessName: '',
      practitionerType: ''
    });
    setErrors({});
    setAuthError(null);
    setAuthSuccess(null);
  };

  const handleModeChange = (mode) => {
    setAuthMode(mode);
    resetForm();
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    resetForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Clear any auth errors when user changes input
    if (authError) setAuthError(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (authMode === 'signup') {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required *';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required *';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required *';
      
      if (userType === 'practitioner') {
        if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required *';
        if (!formData.practitionerType.trim()) newErrors.practitionerType = 'Type of service is required *';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required *';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email *';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required *';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters *';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      setAuthError(null);

      try {
        if (authMode === 'signup') {
          // Register new user with Supabase
          const { data: authData, error: authError } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
              data: {
                first_name: formData.firstName,
                last_name: formData.lastName,
                phone: formData.phone,
                user_type: userType,
                business_name: userType === 'practitioner' ? formData.businessName : null,
                practitioner_type: userType === 'practitioner' ? formData.practitionerType : null,
              }
            }
          });

          if (authError) throw authError;

          // Store user registration details in our custom table
          if (authData?.user) {
            const { error: registrationError } = await supabase
              .from('user_registrations_e9f5h72k')
              .insert({
                user_id: authData.user.id,
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                user_type: userType,
                business_name: userType === 'practitioner' ? formData.businessName : null,
                practitioner_type: userType === 'practitioner' ? formData.practitionerType : null
              });

            if (registrationError) {
              console.error("Error saving registration data:", registrationError);
              // Continue with signup process even if the secondary table insert fails
            }
          }

          setAuthSuccess("Account created successfully! Please check your email to confirm your account.");
          setTimeout(() => {
            onClose();
          }, 2000);

        } else {
          // Handle sign in
          const { error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          });

          if (error) throw error;

          setAuthSuccess("Signed in successfully!");
          setTimeout(() => {
            onClose();
          }, 1000);
        }
      } catch (error) {
        console.error("Auth error:", error);
        setAuthError(error.message || "Authentication failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-forest/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-cream rounded-2xl md:rounded-[2rem] p-6 sm:p-8 w-full max-w-sm sm:max-w-md shadow-2xl border border-sage/20 max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center text-forest hover:bg-sage/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SafeIcon icon={FiX} className="w-4 h-4" />
          </motion.button>

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <motion.div
              className="mb-3 sm:mb-4 overflow-hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-dancing text-forest font-bold bg-gradient-to-br from-sage to-forest bg-clip-text text-transparent px-4 pb-2"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.2, ease: "easeOut" }
                  }}
                >
                  Sanghaa
                </motion.h1>
                <motion.div
                  className="h-1 w-0 bg-gradient-to-r from-sage to-forest mx-auto mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                />
              </motion.div>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl font-dancing text-forest mb-2">
              {authMode === 'signin' ? 'Welcome Back' : 'Join Our Sacred Circle'}
            </h2>
            <p className="text-forest/70 font-crimson text-sm sm:text-base">
              {authMode === 'signin' ? 'Continue your spiritual journey' : 'Begin your wellness transformation'}
            </p>
          </div>

          {/* Auth Mode Toggle */}
          <div className="flex bg-sage/10 rounded-full p-1 mb-4 sm:mb-6">
            <motion.button
              onClick={() => handleModeChange('signin')}
              className={`flex-1 py-2 px-3 sm:px-4 rounded-full font-medium transition-all text-sm sm:text-base ${
                authMode === 'signin'
                  ? 'bg-sage text-cream shadow-lg'
                  : 'text-forest hover:text-sage'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>
            <motion.button
              onClick={() => handleModeChange('signup')}
              className={`flex-1 py-2 px-3 sm:px-4 rounded-full font-medium transition-all text-sm sm:text-base ${
                authMode === 'signup'
                  ? 'bg-sage text-cream shadow-lg'
                  : 'text-forest hover:text-sage'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign Up
            </motion.button>
          </div>

          {/* User Type Toggle (only for signup) */}
          {authMode === 'signup' && (
            <motion.div
              className="mb-4 sm:mb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs sm:text-sm text-forest/70 font-crimson mb-3 text-center">
                I am a...
              </p>
              <div className="flex bg-terracotta/10 rounded-full p-1">
                <motion.button
                  onClick={() => handleUserTypeChange('seeker')}
                  className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-full font-medium transition-all flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm ${
                    userType === 'seeker'
                      ? 'bg-terracotta text-cream shadow-lg'
                      : 'text-forest hover:text-terracotta'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SafeIcon icon={FiHeart} className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Seeker</span>
                </motion.button>
                <motion.button
                  onClick={() => handleUserTypeChange('practitioner')}
                  className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-full font-medium transition-all flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm ${
                    userType === 'practitioner'
                      ? 'bg-terracotta text-cream shadow-lg'
                      : 'text-forest hover:text-terracotta'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SafeIcon icon={FiBriefcase} className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Practitioner</span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Auth Error/Success Messages */}
          <AnimatePresence>
            {authError && (
              <motion.div
                className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {authError}
              </motion.div>
            )}
            {authSuccess && (
              <motion.div
                className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {authSuccess}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Name Fields (only for signup) */}
            {authMode === 'signup' && (
              <motion.div
                className="grid grid-cols-2 gap-3 sm:gap-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-forest mb-1 sm:mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <SafeIcon
                      icon={FiUser}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-forest/50 w-3 h-3 sm:w-4 sm:h-4"
                    />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm sm:text-base ${
                        errors.firstName
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-sage/30 focus:ring-sage/20 focus:border-sage'
                      }`}
                      placeholder="First name"
                    />
                  </div>
                  {errors.firstName && (
                    <motion.p
                      className="text-red-500 text-xs mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.firstName}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-forest mb-1 sm:mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <SafeIcon
                      icon={FiUser}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-forest/50 w-3 h-3 sm:w-4 sm:h-4"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm sm:text-base ${
                        errors.lastName
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-sage/30 focus:ring-sage/20 focus:border-sage'
                      }`}
                      placeholder="Last name"
                    />
                  </div>
                  {errors.lastName && (
                    <motion.p
                      className="text-red-500 text-xs mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.lastName}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-forest mb-1 sm:mb-2">
                Email Address *
              </label>
              <div className="relative">
                <SafeIcon
                  icon={FiMail}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-forest/50 w-3 h-3 sm:w-4 sm:h-4"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm sm:text-base ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-sage/30 focus:ring-sage/20 focus:border-sage'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <motion.p
                  className="text-red-500 text-xs mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Phone (only for signup) */}
            {authMode === 'signup' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-xs sm:text-sm font-medium text-forest mb-1 sm:mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <SafeIcon
                    icon={FiPhone}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-forest/50 w-3 h-3 sm:w-4 sm:h-4"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm sm:text-base ${
                      errors.phone
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-sage/30 focus:ring-sage/20 focus:border-sage'
                    }`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && (
                  <motion.p
                    className="text-red-500 text-xs mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </motion.div>
            )}

            {/* Practitioner-specific fields */}
            {authMode === 'signup' && userType === 'practitioner' && (
              <motion.div
                className="space-y-3 sm:space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-forest mb-1 sm:mb-2">
                    Business Name *
                  </label>
                  <div className="relative">
                    <SafeIcon
                      icon={FiBriefcase}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-forest/50 w-3 h-3 sm:w-4 sm:h-4"
                    />
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm sm:text-base ${
                        errors.businessName
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-sage/30 focus:ring-sage/20 focus:border-sage'
                      }`}
                      placeholder="Enter your business name"
                    />
                  </div>
                  {errors.businessName && (
                    <motion.p
                      className="text-red-500 text-xs mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.businessName}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-forest mb-1 sm:mb-2">
                    Type of Service *
                  </label>
                  <div className="relative">
                    <SafeIcon
                      icon={FiBriefcase}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-forest/50 w-3 h-3 sm:w-4 sm:h-4"
                    />
                    <input
                      type="text"
                      name="practitionerType"
                      value={formData.practitionerType}
                      onChange={handleInputChange}
                      className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm sm:text-base ${
                        errors.practitionerType
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-sage/30 focus:ring-sage/20 focus:border-sage'
                      }`}
                      placeholder="Describe your practice or service"
                    />
                  </div>
                  {errors.practitionerType && (
                    <motion.p
                      className="text-red-500 text-xs mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {errors.practitionerType}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Password */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-forest mb-1 sm:mb-2">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm sm:text-base ${
                    errors.password
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-sage/30 focus:ring-sage/20 focus:border-sage'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-forest/50 hover:text-forest"
                >
                  <SafeIcon
                    icon={showPassword ? FiEyeOff : FiEye}
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                </button>
              </div>
              {errors.password && (
                <motion.p
                  className="text-red-500 text-xs mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errors.password}
                </motion.p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-terracotta to-dusty-rose text-cream py-2 sm:py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 mt-4 sm:mt-6 relative overflow-hidden text-sm sm:text-base"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              {isLoading && (
                <motion.span
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </motion.span>
              )}
              <span className={isLoading ? 'opacity-0' : ''}>
                {authMode === 'signin' ? 'Sign In' : 'Join Sacred Circle'}
              </span>
            </motion.button>
          </form>

          {/* Footer */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-forest/60 font-crimson text-xs sm:text-sm">
              {authMode === 'signin' ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => handleModeChange(authMode === 'signin' ? 'signup' : 'signin')}
                className="text-terracotta hover:text-dusty-rose font-medium ml-2 transition-colors"
              >
                {authMode === 'signin' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
            <p className="text-forest/50 font-crimson text-xs mt-2 italic">
              "May your journey be blessed with authentic connections"
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;