import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About us', href: '#about' },
    { name: 'Contact us', href: '#contact' }
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#1a2b4b] z-50">
      <div className="relative">
        {/* Gold accent strip */}
        <div className="absolute left-0 top-0 h-full w-[180px] bg-secondary transform-gpu skew-x-[25deg] origin-top-left"></div>
        
        {/* White line separator */}
        <div className="absolute left-[160px] top-0 h-full w-[2px] bg-white/10 transform-gpu skew-x-[25deg] origin-top-left"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-[60px] relative">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3 relative z-10"
            >
              <span className="text-2xl font-bold text-white tracking-wide">Company</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-between flex-1 pl-20">
              <div className="flex items-center space-x-10">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-white/90 hover:text-white transition-colors text-base font-medium cursor-pointer tracking-wide"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Verify Certificate Button */}
              <div>
                <Link
                  to="/verify"
                  className="flex items-center space-x-2 bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all duration-300 text-base font-medium"
                >
                  <span>Verify Certificate</span>
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white relative z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 bg-[#1a2b4b] border-t border-white/10 relative z-20"
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-white/90 hover:text-white transition-colors text-base font-medium px-4 tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4">
                  <Link
                    to="/verify"
                    className="flex items-center justify-center space-x-2 bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all duration-300 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Verify Certificate</span>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar 