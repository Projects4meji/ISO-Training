import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const infoCards = [
  {
    icon: <FaMapMarkerAlt className="w-7 h-7 text-primary" />,
    title: 'Office Location',
    desc: 'The Forbury, Reading RG1 3EU, UK',
    link: 'Direction',
    linkType: 'map',
  },
  {
    icon: <FaClock className="w-7 h-7 text-primary" />,
    title: 'Working Hours',
    desc: 'Mon to Fri: 10am - 6pm\nSat: 10am - 2pm',
    link: 'Learn more',
  },
  {
    icon: <FaEnvelope className="w-7 h-7 text-primary" />,
    title: 'Communication',
    desc: 'info@isotraining.com\n+1 (234) 567-8900',
    link: 'Support',
  },
];

const scrollToMap = (e) => {
  e.preventDefault();
  const mapSection = document.getElementById('map');
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light text-primary flex flex-col py-16 overflow-hidden">
      {/* Top Heading Section */}
      <div className="relative max-w-6xl mx-auto w-full px-4 pt-4 mb-14 flex flex-col items-center justify-center">
        {/* Decorative SVG/Blob behind the heading */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 w-[520px] h-[180px] z-0 pointer-events-none opacity-40">
          <svg width="100%" height="100%" viewBox="0 0 520 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="260" cy="90" rx="260" ry="80" fill="url(#paint1_linear)" />
            <defs>
              <linearGradient id="paint1_linear" x1="0" y1="0" x2="520" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0.18" />
                <stop offset="0.5" stopColor="#00B4D8" stopOpacity="0.13" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0.10" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-5xl md:text-6xl font-extrabold text-primary mb-3 z-10 tracking-tight"
        >
          Contact
          <span className="block mx-auto mt-3 w-24 h-1 rounded-full bg-gradient-to-r from-secondary via-blue-200 to-primary/40"></span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative text-lg md:text-xl text-secondary/90 font-medium mb-2 z-10 max-w-2xl mx-auto text-center"
        >
          We'd love to hear from you! <span className="text-primary/80">Reach out for support, partnership, or general inquiries.</span>
        </motion.p>
      </div>
      {/* Top Section: Get in Touch + Info Cards */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-8 px-4 mb-16 items-start">
        {/* Left: Get in Touch */}
        <div className="md:w-1/3 w-full flex flex-col justify-start mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-0 leading-[1.5] md:leading-[2.2]" style={{letterSpacing: '0.01em', minHeight: '180px', display: 'flex', alignItems: 'center'}}>
            GET IN<br />TOUCH
          </h2>
        </div>
        {/* Right: Info Cards */}
        <div className="md:w-2/3 w-full flex flex-col md:flex-row gap-6">
          {infoCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-white rounded-xl shadow-md p-6 flex-1 flex flex-col items-start border border-primary/10 min-w-[220px]"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-primary mb-2">{card.title}</h3>
              <p className="text-gray-600 whitespace-pre-line mb-4 text-sm">{card.desc}</p>
              {card.linkType === 'map' ? (
                <a href="#map" onClick={scrollToMap} className="text-secondary font-medium hover:underline text-sm mt-auto cursor-pointer">{card.link} &rarr;</a>
              ) : (
                <button className="text-secondary font-medium hover:underline text-sm mt-auto">{card.link} &rarr;</button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Form + Contact Info in a single card with background design */}
      <div className="max-w-6xl mx-auto w-full px-4 relative">
        {/* Decorative SVG/Blob behind the card */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] z-0 pointer-events-none opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="300" cy="150" rx="300" ry="120" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="600" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0.18" />
                <stop offset="0.5" stopColor="#00B4D8" stopOpacity="0.13" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0.10" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row p-0 overflow-hidden relative z-10">
          {/* Left: Form */}
          <div className="md:w-1/2 w-full bg-primary/5 p-8 flex flex-col justify-center">
            <form className="flex flex-col gap-5">
              <input type="text" placeholder="What's your Name?" className="bg-white border border-primary/20 rounded-lg px-4 py-3 text-primary placeholder:text-primary/50 focus:outline-none focus:border-secondary" />
              <input type="email" placeholder="Your email" className="bg-white border border-primary/20 rounded-lg px-4 py-3 text-primary placeholder:text-primary/50 focus:outline-none focus:border-secondary" />
              <textarea placeholder="Message" rows={4} className="bg-white border border-primary/20 rounded-lg px-4 py-3 text-primary placeholder:text-primary/50 focus:outline-none focus:border-secondary" />
              <button type="submit" className="bg-secondary text-white font-semibold rounded-lg px-6 py-3 mt-2 hover:bg-secondary/90 transition-colors shadow-lg w-fit">Send Message</button>
            </form>
          </div>
          {/* Right: Contact Us Info */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-primary/10">
            <span className="text-secondary font-semibold mb-2 text-sm">Have any query?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">CONTACT US</h2>
            <p className="text-gray-700 mb-6">Our team is ready to help you with your certification, training, or partnership needs. Please fill out the form or use the details below to get in touch.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-secondary w-5 h-5" />
                <span className="text-gray-700 text-sm">123 Certification Street, Business District, 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-secondary w-4 h-4" />
                <span className="text-gray-700 text-sm">info@isotraining.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div id="map" className="max-w-6xl mx-auto w-full px-4 mt-16">
        <h3 className="text-2xl font-bold text-primary mb-4">Our Location</h3>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=The+Forbury,+Reading+RG1+3EU,+UK&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 