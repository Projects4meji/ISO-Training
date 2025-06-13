import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaCertificate, FaShieldAlt, FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  const rotatingIconVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  const floatingIconVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary to-[#134B70] overflow-hidden py-20 lg:py-0">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 transform skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-white/5 transform -skew-x-12"></div>
      </div>

      {/* Decorative Icons - Responsive positioning */}
      <motion.div
        className="absolute top-[5%] sm:top-[10%] lg:top-[15%] left-[5%] sm:left-[8%] lg:left-[10%] text-white/10 text-4xl sm:text-5xl lg:text-7xl"
        variants={rotatingIconVariants}
        animate="rotate"
      >
        <FaCertificate />
      </motion.div>
      <motion.div
        className="absolute bottom-[5%] sm:bottom-[10%] lg:bottom-[15%] right-[5%] sm:right-[8%] lg:right-[10%] text-white/10 text-4xl sm:text-5xl lg:text-8xl"
        variants={rotatingIconVariants}
        animate="rotate"
      >
        <FaShieldAlt />
      </motion.div>

      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto lg:mx-0"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-secondary font-medium mb-4 block text-center lg:text-left"
            >
              Welcome to ISO Excellence
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 text-center lg:text-left"
            >
              Empowering Your{' '}
              <span className="text-light">Business Success</span>{' '}
              Through ISO Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-200 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
            >
              Elevate your organization with internationally recognized ISO certifications. Expert guidance, comprehensive support, and proven success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="w-full px-6 py-4 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
              </div>
              <button className="bg-secondary text-white px-8 py-4 rounded-full hover:bg-secondary/90 transition-colors inline-flex items-center justify-center whitespace-nowrap">
                Get Certificate
              </button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 mt-4 text-sm text-center lg:text-left"
            >
              Join 2,000+ companies who've reached certification excellence
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-2xl mx-auto lg:mx-0 w-full"
          >
            {/* Stats Box - Hidden on smaller screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-20 right-0 bg-[#1E293B]/90 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-2xl shadow-xl text-white z-30 hidden md:block max-w-[90%] lg:max-w-[85%]"
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-between">
                <div className="flex flex-col justify-between">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">3K+</div>
                  <div className="text-gray-300 text-xs sm:text-sm mt-1">Certified Trainers</div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">2K+</div>
                  <div className="text-gray-300 text-xs sm:text-sm mt-1">Certified Companies</div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">98%</div>
                  <div className="text-gray-300 text-xs sm:text-sm mt-1">Success Rate</div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">10K+</div>
                  <div className="text-gray-300 text-xs sm:text-sm mt-1">Lead Auditors</div>
                </div>
              </div>
            </motion.div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/Business.jpeg"
                alt="ISO Certification"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>

            {/* Floating Elements - Responsive positioning */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 sm:-top-8 lg:-top-10 -right-6 sm:-right-8 lg:-right-10 bg-white p-3 sm:p-4 rounded-xl shadow-xl z-20"
            >
              <FaCertificate className="text-2xl sm:text-3xl lg:text-4xl text-secondary" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 -left-6 sm:-left-8 lg:-left-10 bg-white p-3 sm:p-4 rounded-xl shadow-xl z-20"
            >
              <FaShieldAlt className="text-2xl sm:text-3xl lg:text-4xl text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 