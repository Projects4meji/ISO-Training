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
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary to-[#134B70] overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 transform skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-white/5 transform -skew-x-12"></div>
      </div>

      {/* Decorative Icons */}
      <motion.div
        className="absolute top-20 left-20 text-white/10 text-7xl"
        variants={rotatingIconVariants}
        animate="rotate"
      >
        <FaCertificate />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-white/10 text-8xl"
        variants={rotatingIconVariants}
        animate="rotate"
      >
        <FaShieldAlt />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Your Path to Global <br />
              <span className="text-secondary">Certification Standards</span>
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
              className="flex flex-wrap gap-4"
            >
              <Link
                to="about"
                smooth={true}
                className="bg-secondary text-white px-8 py-4 rounded-full hover:bg-secondary/90 transition-colors inline-flex items-center group cursor-pointer"
              >
                Get Started
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="certifications"
                smooth={true}
                className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                View Certifications
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Shapes */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            
            {/* Image Container with Clip Path */}
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] transform rotate-3"></div>
              <motion.div
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative rounded-[3rem] overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              >
                <img
                  src="/Mastering ISO_IEC 27001_2022 - Exercise 4 Walkthrough.jpeg"
                  alt="ISO Certification Process"
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </motion.div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <FaCertificate className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Certified Companies</div>
                  <div className="text-xl font-bold text-primary">2000+</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Small Icons */}
      <motion.div
        className="absolute top-40 right-1/4 text-white/5 text-4xl"
        variants={floatingIconVariants}
        animate="float"
      >
        <FaCertificate />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-1/3 text-white/5 text-5xl"
        variants={floatingIconVariants}
        animate="float"
      >
        <FaShieldAlt />
      </motion.div>
    </section>
  )
}

export default Hero 