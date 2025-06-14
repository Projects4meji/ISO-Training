import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaArrowRight, FaChevronDown, FaCertificate, FaAward, FaMedal, FaShieldAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const menuItems = [
    { name: 'Home', to: '/', hash: true },
    { 
      name: 'Certifications', 
      to: '/#certifications',
      hash: true,
      submenu: [
        { name: 'ISO 30000:2009', to: '/certificates/iso-30000', icon: <FaCertificate /> },
        { name: 'ISO/IEC 17025:2005', to: '/certificates/iso-17025', icon: <FaAward /> },
        { name: 'OHSAS 8001:2007', to: '/certificates/ohsas-8001', icon: <FaMedal /> },
        { name: 'HACCP', to: '/certificates/haccp', icon: <FaShieldAlt /> }
      ]
    },
    { name: 'About us', to: '/#about', hash: true },
    { name: 'Contact us', to: '/#contact', hash: true }
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#1a2b4b] z-50">
      <div className="relative">
        {/* Gold accent strip */}
        <div className="absolute left-0 top-0 h-full w-[200px] bg-secondary transform-gpu skew-x-[25deg] origin-top-left"></div>
        
        {/* White line separator */}
        <div className="absolute left-[180px] top-0 h-full w-[2px] bg-white/10 transform-gpu skew-x-[25deg] origin-top-left"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-[60px] relative">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3 relative z-10 pl-4"
            >
              <HashLink smooth to="/#hero" className="text-2xl font-bold text-white tracking-wide">ACS-GP</HashLink>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-between flex-1 pl-20">
              <div className="flex items-center space-x-10">
                {menuItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.hash ? (
                      <HashLink
                        smooth
                        to={item.to}
                        className="text-white/90 hover:text-white transition-colors text-base font-medium cursor-pointer tracking-wide flex items-center"
                        onMouseEnter={() => item.submenu && setIsDropdownOpen(true)}
                        onMouseLeave={() => item.submenu && setIsDropdownOpen(false)}
                      >
                        {item.name}
                        {item.submenu && (
                          <FaChevronDown className="ml-2 text-xs transition-transform group-hover:rotate-180" />
                        )}
                      </HashLink>
                    ) : (
                      <Link
                        to={item.to}
                        className="text-white/90 hover:text-white transition-colors text-base font-medium cursor-pointer tracking-wide flex items-center"
                        onMouseEnter={() => item.submenu && setIsDropdownOpen(true)}
                        onMouseLeave={() => item.submenu && setIsDropdownOpen(false)}
                      >
                        {item.name}
                        {item.submenu && (
                          <FaChevronDown className="ml-2 text-xs transition-transform group-hover:rotate-180" />
                        )}
                      </Link>
                    )}
                    {item.submenu && (
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-72 bg-gradient-to-br from-[#1a2b4b] to-primary rounded-xl shadow-xl overflow-hidden z-50 border border-white/10"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                          >
                            {item.submenu.map((subItem, index) => (
                              <Link
                                key={subItem.name}
                                to={subItem.to}
                                className="group block relative"
                              >
                                <motion.div
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-all duration-300"
                                >
                                  <div className="text-secondary text-lg">
                                    {subItem.icon}
                                  </div>
                                  <span className="text-white/90 group-hover:text-white transition-colors">
                                    {subItem.name}
                                  </span>
                                  <motion.div
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute bottom-0 left-0 h-[1px] bg-secondary/30"
                                  />
                                </motion.div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              {/* Verify Certificate Button */}
              <div>
                <Link
                  to="/verify"
                  className="flex items-center space-x-2 bg-secondary text-[#1a2b4b] px-6 py-2.5 rounded-full hover:bg-secondary/90 transition-all duration-300 text-base font-medium shadow-lg hover:shadow-secondary/20"
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
                  <div key={item.name}>
                    {item.hash ? (
                      <HashLink
                        smooth
                        to={item.to}
                        className="text-white/90 hover:text-white transition-colors text-base font-medium px-4 tracking-wide block"
                        onClick={() => !item.submenu && setIsMenuOpen(false)}
                      >
                        {item.name}
                      </HashLink>
                    ) : (
                      <Link
                        to={item.to}
                        className="text-white/90 hover:text-white transition-colors text-base font-medium px-4 tracking-wide block"
                        onClick={() => !item.submenu && setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.submenu && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pl-8 mt-2 space-y-2 border-l-2 border-secondary/20 ml-4"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.to}
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="text-secondary text-base">{subItem.icon}</span>
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <div className="px-4">
                  <Link
                    to="/verify"
                    className="flex items-center justify-center space-x-2 bg-secondary text-[#1a2b4b] px-6 py-2.5 rounded-full hover:bg-secondary/90 transition-all duration-300 text-base font-medium shadow-lg hover:shadow-secondary/20"
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