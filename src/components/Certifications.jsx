import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCheckCircle, FaCertificate, FaAward, FaMedal, FaShieldAlt } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'ISO 30000 2009',
      icon: <FaCertificate className="w-16 h-16 text-secondary" />,
      description: 'Ship recycling management systems certification for safe and environmentally sound ship recycling facilities.'
    },
    {
      id: 2,
      name: 'ISO/IEC 17025 2005',
      icon: <FaAward className="w-16 h-16 text-secondary" />,
      description: 'Testing and calibration laboratories competence certification for accurate and reliable results.'
    },
    {
      id: 3,
      name: 'OHSAS 8001 2007',
      icon: <FaMedal className="w-16 h-16 text-secondary" />,
      description: 'Occupational health and safety management certification for workplace safety excellence.'
    },
    {
      id: 4,
      name: 'HACCP',
      icon: <FaShieldAlt className="w-16 h-16 text-secondary" />,
      description: 'Food safety management system certification for identifying and controlling hazards.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 2) % certifications.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [certifications.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const CertificationCard = ({ certification }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex-1 relative overflow-hidden group"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <img
          src="/Mastering ISO_IEC 27001_2022 - Exercise 10 Walkthrough.jpeg"
          alt="Certification Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col h-full relative z-10">
        {/* Icon */}
        <div className="relative mb-6">
          <div className="bg-primary/5 rounded-full p-4 inline-block">
            {certification.icon}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-secondary/20 rounded-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <FaCheckCircle className="text-xl text-secondary" />
            <h3 className="text-xl font-bold text-primary">
              {certification.name}
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            {certification.description}
          </p>
          
          {/* Decorative line */}
          <div className="h-1 w-20 bg-secondary/20 rounded-full mt-4"></div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium mb-4 block">Certifications</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            ACS-GP offering Accreditation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            for you & your business
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full h-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  <CertificationCard 
                    certification={certifications[currentIndex]} 
                  />
                  <CertificationCard 
                    certification={certifications[(currentIndex + 1) % certifications.length]} 
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {[0, 2].map((index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-secondary scale-125' : 'bg-secondary/30'
                }`}
                aria-label={`Go to certifications ${index + 1} and ${index + 2}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 