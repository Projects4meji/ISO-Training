import { motion } from 'framer-motion';
import { FaHandshake, FaGlobe, FaAward, FaUsers, FaCertificate, FaCheckCircle, FaMedal, FaShieldAlt } from 'react-icons/fa';

const RotatingIcon = ({ icon, className }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ 
        rotate: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{ 
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        },
        scale: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {icon}
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Decorative Icons */}
        <RotatingIcon 
          icon={<FaCertificate className="w-24 h-24 text-[#134B70]/30" />} 
          className="top-10 left-0 z-0"
        />
        <RotatingIcon 
          icon={<FaCheckCircle className="w-16 h-16 text-[#508C9B]/25" />} 
          className="top-40 right-10 z-0"
        />
        <RotatingIcon 
          icon={<FaMedal className="w-20 h-20 text-primary/30" />} 
          className="bottom-20 left-20 z-0"
        />
        <RotatingIcon 
          icon={<FaShieldAlt className="w-28 h-28 text-[#134B70]/25" />} 
          className="bottom-40 right-0 z-0"
        />

        {/* Top Section with Welcome Message */}
        <div className="mb-16 relative">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-medium mb-4 block"
          >
            About us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Welcome to{" "}
            <span className="text-primary">ISO Certification</span>
          </motion.h2>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.8
            }}
            className="relative"
          >
            <div className="w-full h-[500px] rounded-2xl overflow-hidden group">
              <img 
                src="/Mastering ISO_IEC 27001_2022 - Exercise 17 Walkthrough.jpeg"
                alt="ISO Certification Process"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/20 to-transparent"></div>
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-10 right-10 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.8,
              delay: 0.2
            }}
            className="lg:pl-10"
          >
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our certification body is highly reputable and renowned, accredited by International Accreditation Services for Certification Bodies (IASCB). Over time, we have established ourselves and received accreditation for highly demanding ISO Certifications including ISO 9001:2015 Quality Management System, ISO 14001:2015 Environmental Management System, and ISO 45001:2018 Occupational Safety & Health Management System.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <FaHandshake className="w-8 h-8 text-secondary" />,
                  title: "Expert Guidance",
                  description: "Professional consultation and support"
                },
                {
                  icon: <FaGlobe className="w-8 h-8 text-secondary" />,
                  title: "Global Reach",
                  description: "Worldwide certification services"
                },
                {
                  icon: <FaAward className="w-8 h-8 text-secondary" />,
                  title: "Accredited",
                  description: "IASCB recognized certification"
                },
                {
                  icon: <FaUsers className="w-8 h-8 text-secondary" />,
                  title: "Client Focus",
                  description: "Dedicated support team"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
                More About us
              </button>
              <button className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/5 transition-colors">
                Play Intro Video
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 