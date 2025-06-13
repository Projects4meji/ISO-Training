import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <section className="relative bg-[#1a2b4b] py-8 sm:py-12 lg:py-16 overflow-hidden">
        {/* Background Design Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent"></div>
          
          {/* Decorative Circles - Responsive sizes */}
          <div className="absolute -right-12 -top-12 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-secondary/5 transform scale-75 sm:scale-100"></div>
          <div className="absolute -left-12 -bottom-12 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-secondary/5 transform scale-75 sm:scale-100"></div>
          
          {/* Diagonal Lines - Adjusted size for mobile */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.05) 55%, transparent 55%)`,
            backgroundSize: '15px 15px',
            '@media (min-width: 640px)': {
              backgroundSize: '20px 20px'
            }
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
              Stay in touch
            </h2>
            <p className="text-white/70 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-0">
              Get updates on ISO certifications, training programs, and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto px-3 sm:px-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm lg:text-base rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-secondary backdrop-blur-sm placeholder:text-white/50 placeholder:text-sm"
              />
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 mt-2 sm:mt-0 bg-secondary text-[#1a2b4b] rounded-lg font-medium hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-secondary/20 text-sm lg:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements - Responsive */}
        <div className="absolute left-1/2 top-0 w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-secondary/20 to-transparent transform -translate-x-1/2"></div>
        <div className="absolute left-1/2 bottom-0 w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-t from-secondary/20 to-transparent transform -translate-x-1/2"></div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#111827] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-secondary mb-6">ISO Training</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Your trusted partner for ISO certifications, quality management systems, and professional training solutions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-white/70 hover:text-secondary text-sm transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/70 hover:text-secondary text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white/70 hover:text-secondary text-sm transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/certifications" className="text-white/70 hover:text-secondary text-sm transition-colors">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-secondary text-sm transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li className="text-white/70 hover:text-secondary text-sm transition-colors cursor-pointer">
                  ISO Certifications
                </li>
                <li className="text-white/70 hover:text-secondary text-sm transition-colors cursor-pointer">
                  Quality Management
                </li>
                <li className="text-white/70 hover:text-secondary text-sm transition-colors cursor-pointer">
                  Training Programs
                </li>
                <li className="text-white/70 hover:text-secondary text-sm transition-colors cursor-pointer">
                  Compliance Solutions
                </li>
                <li className="text-white/70 hover:text-secondary text-sm transition-colors cursor-pointer">
                  Audit Services
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-secondary w-5 h-5 mt-1" />
                  <p className="text-white/70 text-sm">
                    123 Certification Street,<br />
                    Business District, 12345
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-secondary w-4 h-4" />
                  <p className="text-white/70 text-sm">+1 (234) 567-8900</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-secondary w-4 h-4" />
                  <p className="text-white/70 text-sm">info@isotraining.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/70 text-center md:text-left">
                © {new Date().getFullYear()} ISO Training. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link to="/privacy" className="text-white/70 hover:text-secondary text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-white/70 hover:text-secondary text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 