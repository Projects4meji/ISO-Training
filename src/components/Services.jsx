import { motion } from 'framer-motion'
import { FaCertificate, FaIndustry, FaUsers, FaCheckCircle } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: "ISO Certifications",
      description: "Specializing in highly demanding ISO certifications including ISO 9001:2015 Quality Management System, ISO 14001:2015 Environmental Management System, and ISO 45001:2018 Occupational Safety & Health Management System.",
      icon: <FaCertificate className="text-3xl" />,
      features: [
        "ISO 9001:2015 Quality Management",
        "ISO 14001:2015 Environmental Management",
        "ISO 45001:2018 Safety & Health"
      ]
    },
    {
      title: "Industrial Solutions",
      description: "Our tailored solutions, designed under OSHA standards, cater to various industries, offering comprehensive guidance in construction, oil & energy, chemical, and common sectors worldwide.",
      icon: <FaIndustry className="text-3xl" />,
      features: [
        "Construction Industry Solutions",
        "Oil & Energy Sector Compliance",
        "Chemical Industry Standards"
      ]
    },
    {
      title: "Personnel Certification",
      description: "ACS-GP offers personnel certification across diverse programs offered by IASCB, ensuring individuals meet industry standards and contribute to organizational excellence.",
      icon: <FaUsers className="text-3xl" />,
      features: [
        "Lead Auditor Certification",
        "Industry Expert Training",
        "Professional Development"
      ]
    }
  ]

  return (
    <section id="services" className="section bg-gradient-to-b from-light to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">We Provide Quality Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Trust ACS-GP for unparalleled, globally recognized certification services and industrial solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
            >
              <div className="bg-primary/10 text-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 