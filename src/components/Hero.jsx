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
    <section id="home" className="relative h-screen flex items-center bg-gradient-to-br from-primary to-[#134B70] overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 transform skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-white/5 transform -skew-x-12"></div>
      </div>

      {/* Decorative Icons */}
      <motion.div
        className="absolute top-[15%] left-[10%] text-white/10 text-7xl"
        variants={rotatingIconVariants}
        animate="rotate"
      >
        <FaCertificate />
      </motion.div>
      <motion.div
        className="absolute bottom-[15%] right-[10%] text-white/10 text-8xl"
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
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-secondary font-medium mb-4 block"
            >
              Welcome to ISO Excellence
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl xl:text-7xl font-bold text-white mb-6"
            >
              Empowering Your <br />
              <span className="text-light">Business Success</span> <br />
              Through ISO Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-200 text-lg mb-8 max-w-lg"
            >
              Elevate your organization with internationally recognized ISO certifications. Expert guidance, comprehensive support, and proven success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 max-w-xl"
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
              className="text-gray-300 mt-4 text-sm"
            >
              Join 2,000+ companies who've reached certification excellence
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Stats Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-20 right-0 bg-[#1E293B]/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl text-white z-30"
            >
              <div className="grid grid-cols-2 gap-8 md:gap-10">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white">3K+</div>
                  <div className="text-gray-300 text-sm mt-2">Certified Trainers</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white">2K+</div>
                  <div className="text-gray-300 text-sm mt-2">Certified Companies</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white">98%</div>
                  <div className="text-gray-300 text-sm mt-2">Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white">10K+</div>
                  <div className="text-gray-300 text-sm mt-2">Certified Lead Auditors</div>
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

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-xl z-20"
            >
              <FaCertificate className="text-4xl text-secondary" />
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
              className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl z-20"
            >
              <FaShieldAlt className="text-4xl text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 