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
    <section id="testimonials" className="section bg-gradient-to-b from-light to-white py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Words from Our Clients</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover why leading organizations trust us for their certification needs.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Testimonial Cards */}
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
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full flex flex-col justify-between border border-gray-100">
                  <div>
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <FaQuoteLeft className="text-3xl text-primary" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg md:text-xl mb-8 text-center">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>
                    <p className="font-bold text-xl text-primary mb-1">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-500">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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