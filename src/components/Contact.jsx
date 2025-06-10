import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="section bg-primary text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-light">Contact our team to begin your certification journey today.</p>
          <button className="btn bg-white text-primary hover:bg-opacity-90">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 