import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { FaCheckCircle, FaCertificate, FaAward, FaMedal, FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Certifications = () => {
  const navigate = useNavigate();
  
  const certifications = [
    {
      id: 1,
      name: 'ISO 30000 2009',
      icon: <FaCertificate className="w-16 h-16 text-secondary" />,
      description: 'Ship recycling management systems certification for safe and environmentally sound ship recycling facilities.',
      path: '/certificates/iso-30000'
    },
    {
      id: 2,
      name: 'ISO/IEC 17025 2005',
      icon: <FaAward className="w-16 h-16 text-secondary" />,
      description: 'Testing and calibration laboratories competence certification for accurate and reliable results.',
      path: '/certificates/iso-17025'
    },
    {
      id: 3,
      name: 'OHSAS 8001 2007',
      icon: <FaMedal className="w-16 h-16 text-secondary" />,
      description: 'Occupational health and safety management certification for workplace safety excellence.',
      path: '/certificates/ohsas-8001'
    },
    {
      id: 4,
      name: 'HACCP',
      icon: <FaShieldAlt className="w-16 h-16 text-secondary" />,
      description: 'Food safety management system certification for identifying and controlling hazards.',
      path: '/certificates/haccp'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleCardCount = useCallback(() => {
    if (windowWidth < 640) return 1; // Mobile: 1 card
    if (windowWidth < 1024) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  }, [windowWidth]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getVisibleCertifications = useCallback(() => {
    const visibleCards = [];
    const totalCards = certifications.length;
    const cardCount = getVisibleCardCount();
    
    for (let i = 0; i < cardCount; i++) {
      const index = (currentIndex + i) % totalCards;
      visibleCards.push(certifications[index]);
    }
    
    return visibleCards;
  }, [currentIndex, certifications, getVisibleCardCount]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    })
  };

  const CertificationCard = ({ certification }) => (
    <motion.div
      onClick={() => navigate(certification.path)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-all duration-300 w-full min-w-[280px] relative overflow-hidden group cursor-pointer transform hover:scale-105"
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
        <div className="relative mb-4 sm:mb-5 lg:mb-6">
          <div className="bg-primary/5 rounded-full p-2.5 sm:p-3 lg:p-4 inline-block">
            <div className="text-secondary">
              {React.cloneElement(certification.icon, {
                className: "w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12"
              })}
            </div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-secondary/20 rounded-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 lg:mb-4">
              <FaCheckCircle className="text-base sm:text-lg lg:text-xl text-secondary flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-primary line-clamp-1">
                {certification.name}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm line-clamp-3 sm:line-clamp-4">
              {certification.description}
            </p>
          </div>
          
          {/* Decorative line */}
          <div className="h-1 w-16 sm:w-20 bg-secondary/20 rounded-full mt-3 sm:mt-4"></div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-light overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="text-secondary font-medium mb-2 sm:mb-4 block text-sm sm:text-base">Certifications</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            ACS-GP offering Accreditation
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            for you & your business
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-12 z-10 bg-white p-2 sm:p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-base sm:text-xl" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-12 z-10 bg-white p-2 sm:p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-base sm:text-xl" />
          </button>

          {/* Carousel Container */}
          <div className="relative h-[350px] sm:h-[350px] lg:h-[400px] overflow-hidden px-2 sm:px-4">
            <AnimatePresence initial={false} mode="popLayout" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                className="absolute w-full h-full"
              >
                <div className={`grid h-full gap-3 sm:gap-4 lg:gap-6 pb-4 ${
                  getVisibleCardCount() === 1 
                    ? 'grid-cols-1 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto px-4' 
                    : getVisibleCardCount() === 2 
                    ? 'grid-cols-2 w-[95%] lg:w-[85%] mx-auto px-2' 
                    : 'grid-cols-3 w-[98%] lg:w-[90%] mx-auto'
                }`}>
                  {getVisibleCertifications().map((cert, index) => (
                    <div className="flex justify-center" key={`${cert.id}-${index}`}>
                      <CertificationCard certification={cert} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 gap-2 sm:gap-3">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-secondary scale-125' : 'bg-secondary/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 