import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      text: "Efficient problem-solving, insightful market analysis, and actionable plans made the consulting experience invaluable to our business's success.",
      author: "James Bond",
      position: "CEO & Head of Sky Tech Inc.",
      rating: 5
    },
    {
      text: "The ISO certification process was smooth and professional. Their expertise in quality management systems is outstanding.",
      author: "Sarah Johnson",
      position: "Operations Director, Global Solutions",
      rating: 5
    },
    {
      text: "Outstanding support throughout our certification journey. The team's knowledge and guidance were instrumental to our success.",
      author: "Michael Chen",
      position: "Quality Manager, Tech Innovations",
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
  }

  return (
    <section id="testimonials" className="section bg-gradient-to-b from-light to-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Words from Our Clients
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg px-4">
            Discover why leading organizations trust us for their certification needs.
          </p>
        </motion.div>

        <div className="relative w-[95%] sm:w-[85%] lg:w-[75%] mx-auto">
          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-8 z-10 bg-white p-2 sm:p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-base sm:text-xl" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-8 z-10 bg-white p-2 sm:p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-base sm:text-xl" />
          </button>

          {/* Testimonial Cards */}
          <div className="relative h-[350px] sm:h-[400px] overflow-hidden px-2 sm:px-4">
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
                <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between border border-gray-100 w-[95%] sm:w-[85%] lg:w-[75%] mx-auto">
                  <div>
                    <div className="flex justify-center mb-3 sm:mb-4 lg:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <FaQuoteLeft className="text-xl sm:text-2xl lg:text-3xl text-primary" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 text-center leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 sm:mb-3 lg:mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg sm:text-xl lg:text-2xl">★</span>
                      ))}
                    </div>
                    <p className="font-bold text-base sm:text-lg lg:text-xl text-primary mb-1 sm:mb-2">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm lg:text-base">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-3 sm:mt-4 lg:mt-6 gap-1.5 sm:gap-2 lg:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 