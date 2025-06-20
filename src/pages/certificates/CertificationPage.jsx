import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaCertificate, FaCheckCircle, FaClipboardCheck, FaFileAlt, 
  FaUserCog, FaAward, FaShieldAlt, FaShip, FaRecycle, 
  FaArrowRight, FaChevronRight, FaMedal 
} from 'react-icons/fa';

const RotatingIcon = ({ icon, className, duration = 30, reverse = false, opacity = 0.15, size = 'w-24 h-24' }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear' }}
    style={{ opacity }}
  >
    {React.cloneElement(icon, { className: `${size} pointer-events-none` })}
  </motion.div>
);

// Certification configurations
const certificationConfigs = {
  'iso-30000': {
    id: 'iso-30000',
    title: 'ISO 30000:2009',
    subtitle: 'Ship Recycling Management Systems',
    icon: FaCertificate,
    overview: [
      'Comprehensive framework for safe and environmentally sound ship recycling operations',
      'Ensures compliance with international regulations and standards',
      'Promotes sustainable practices in the maritime industry',
      'Accredited by International Accreditation Services for Certification Bodies (IASCB)'
    ],
    benefits: [
      'Enhanced environmental protection and worker safety',
      'Improved operational efficiency and risk management',
      'Greater competitive advantage in the global market',
      'Access to innovative solutions and advanced analytics'
    ],
    steps: [
      {
        icon: <FaFileAlt />,
        title: "Document Review",
        description: "Initial assessment of your organization's documentation and processes"
      },
      {
        icon: <FaClipboardCheck />,
        title: "Gap Analysis",
        description: "Identification of areas that need improvement to meet ISO 30000:2009 requirements"
      },
      {
        icon: <FaUserCog />,
        title: "Implementation",
        description: "Support in implementing necessary changes and improvements"
      },
      {
        icon: <FaAward />,
        title: "Certification",
        description: "Final audit and issuance of certification"
      },
      {
        icon: <FaShieldAlt />,
        title: "Continuous Improvement",
        description: "Ongoing support and periodic reviews to maintain certification"
      }
    ],
    images: {
      overview: '/Safety2.jpeg',
      benefits: '/Mastering ISO_IEC 27001_2022 - Exercise 4 Walkthrough.jpeg'
    }
  },
  'iso-17025': {
    id: 'iso-17025',
    title: 'ISO/IEC 17025:2005',
    subtitle: 'Testing and Calibration Laboratories',
    icon: FaAward,
    overview: [
      'International standard for testing and calibration laboratories',
      'Ensures technical competence and reliable results',
      'Globally recognized quality management system',
      'Accredited by International Accreditation Services for Certification Bodies (IASCB)'
    ],
    benefits: [
      'International recognition of test results and calibrations',
      'Enhanced customer confidence in laboratory services',
      'Improved operational efficiency and quality control',
      'Access to advanced analytics and risk management tools'
    ],
    steps: [
      {
        icon: <FaFileAlt />,
        title: "Documentation Review",
        description: "Assessment of laboratory documentation and quality management system"
      },
      {
        icon: <FaClipboardCheck />,
        title: "Technical Assessment",
        description: "Evaluation of technical competence and testing/calibration procedures"
      },
      {
        icon: <FaUserCog />,
        title: "Implementation",
        description: "Support in implementing required changes and improvements"
      },
      {
        icon: <FaAward />,
        title: "Accreditation",
        description: "Final assessment and issuance of accreditation"
      },
      {
        icon: <FaShieldAlt />,
        title: "Surveillance",
        description: "Regular monitoring and periodic reassessment"
      }
    ],
    images: {
      overview: '/Mastering ISO_IEC 27001_2022 - Exercise 10 Walkthrough.jpeg',
      benefits: '/Mastering ISO_IEC 27001_2022 - Exercise 17 Walkthrough.jpeg'
    }
  },
  'ohsas-8001': {
    id: 'ohsas-8001',
    title: 'OHSAS 8001:2007',
    subtitle: 'Occupational Health and Safety Management',
    icon: FaMedal,
    overview: [
      'Comprehensive occupational health and safety management system',
      'Risk assessment and prevention strategies',
      'Employee safety and well-being focus',
      'Designed under Guidelines of OSHA standards'
    ],
    benefits: [
      'Reduced workplace incidents and accidents',
      'Enhanced employee morale and productivity',
      'Legal compliance and reduced liability risks',
      'Access to advanced risk management analytics'
    ],
    steps: [
      {
        icon: <FaFileAlt />,
        title: "Initial Review",
        description: "Assessment of current health and safety management system"
      },
      {
        icon: <FaClipboardCheck />,
        title: "Risk Assessment",
        description: "Comprehensive evaluation of workplace hazards and risks"
      },
      {
        icon: <FaUserCog />,
        title: "Implementation",
        description: "Support in implementing required safety measures and procedures"
      },
      {
        icon: <FaAward />,
        title: "Certification",
        description: "Final audit and certification issuance"
      },
      {
        icon: <FaShieldAlt />,
        title: "Monitoring",
        description: "Continuous assessment and improvement of safety measures"
      }
    ],
    images: {
      overview: '/Safety1.jpeg',
      benefits: '/Safety2.jpeg'
    }
  },
  'haccp': {
    id: 'haccp',
    title: 'HACCP',
    subtitle: 'Hazard Analysis and Critical Control Points',
    icon: FaShieldAlt,
    overview: [
      'Systematic preventive approach to food safety',
      'Identification and control of potential hazards',
      'Internationally recognized food safety standard',
      'Comprehensive food safety management system'
    ],
    benefits: [
      'Enhanced food safety and quality control',
      'Reduced risk of foodborne illnesses',
      'Improved customer confidence and market access',
      'Access to innovative food safety solutions'
    ],
    steps: [
      {
        icon: <FaFileAlt />,
        title: "Initial Assessment",
        description: "Review of current food safety practices and documentation"
      },
      {
        icon: <FaClipboardCheck />,
        title: "Hazard Analysis",
        description: "Identification and assessment of potential food safety hazards"
      },
      {
        icon: <FaUserCog />,
        title: "Implementation",
        description: "Establishment of critical control points and monitoring procedures"
      },
      {
        icon: <FaAward />,
        title: "Certification",
        description: "Final audit and certification issuance"
      },
      {
        icon: <FaShieldAlt />,
        title: "Verification",
        description: "Ongoing verification and validation of HACCP system"
      }
    ],
    images: {
      overview: '/Business.jpeg',
      benefits: '/Training.jpeg'
    },
    objectives: [
      'Understand the principles of HACCP and its application in food safety management.',
      'Identify critical control points and implement monitoring procedures.',
      'Develop and maintain effective food safety documentation.'
    ],
    outcomes: [
      'Ability to design and implement a HACCP plan.',
      'Improved understanding of food safety hazards and controls.',
      'Enhanced skills in risk assessment and documentation.'
    ],
    assessments: [
      'Multiple-choice quiz on HACCP principles.',
      'Case study analysis of a food safety scenario.',
      'Practical assignment: Draft a sample HACCP plan.'
    ]
  }
};

// List of all certifications for the sidebar
const certifications = [
  { label: 'ISO 9001 2015', href: '/certificates/iso-9001' },
  { label: 'ISO 14001 2015', href: '/certificates/iso-14001' },
  { label: 'ISO 45001 2018', href: '/certificates/iso-45001' },
  { label: 'ISO 20000 2011', href: '/certificates/iso-20000' },
  { label: 'ISO 27001 2005', href: '/certificates/iso-27001' },
  { label: 'ISO-22000-2005', href: '/certificates/iso-22000' },
  { label: 'ISO 22483 2020', href: '/certificates/iso-22483' },
  { label: 'ISO 29001 2010', href: '/certificates/iso-29001' },
  { label: 'ISO 30000 2009', href: '/certificates/iso-30000' },
  { label: 'ISO/IEC 17025 2005', href: '/certificates/iso-17025' },
  { label: 'OHSAS 8001 2007', href: '/certificates/ohsas-8001' },
  { label: 'HACCP', href: '/certificates/haccp' },
];

const CertificationPage = () => {
  const { certId } = useParams();
  const navigate = useNavigate();
  const config = certificationConfigs[certId];

  // Redirect to home if certification not found
  if (!config) {
    navigate('/');
    return null;
  }

  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-light py-20 relative overflow-hidden">
      {/* Decorative Rotating Icons */}
      <RotatingIcon icon={<FaAward />} className="top-16 left-8 z-0" duration={40} size="w-32 h-32" opacity={0.10} />
      <RotatingIcon icon={<FaUserCog />} className="bottom-20 right-10 z-0" duration={28} size="w-24 h-24" opacity={0.13} reverse />
      <RotatingIcon icon={<FaFileAlt />} className="top-1/2 left-4 z-0" duration={35} size="w-20 h-20" opacity={0.09} />
      <RotatingIcon icon={<FaShieldAlt />} className="bottom-0 left-1/3 z-0" duration={50} size="w-28 h-28" opacity={0.08} />

      <div className="w-full max-w-[90rem] mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-6">
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <Icon className="w-16 h-16 text-secondary z-10 mx-auto" />
              {/* Rotating border */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-secondary/20 rounded-full"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">{config.title}</h1>
          <p className="text-xl text-gray-600">{config.subtitle}</p>
          <div className="mt-6 flex justify-center gap-4">
            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              Gold Rated Certification
            </span>
            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              IASCB Accredited
            </span>
          </div>
        </motion.div>

        {/* Horizontal Certifications List */}
        <div className="w-full overflow-x-auto mb-10">
          <ul className="flex gap-3 flex-nowrap md:flex-wrap md:justify-center">
            {certifications.map((cert, idx) => (
              <li key={cert.label} className="flex-shrink-0">
                <a
                  href={cert.href}
                  className={`px-4 py-2 rounded-full border border-secondary/30 bg-white/80 hover:bg-secondary/10 text-primary font-medium shadow-sm transition-colors duration-200 whitespace-nowrap flex items-center gap-2 ${cert.href === window.location.pathname ? 'bg-gradient-to-br from-primary/10 via-primary/30 to-blue-100 text-[#1a2b4b] font-bold border-secondary' : ''}`}
                >
                  {cert.label}
                  {cert.href === window.location.pathname && (
                    <span className="ml-1 w-2 h-2 bg-white rounded-full inline-block" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content and Cards Grid */}
        <div className="flex-1 flex flex-col">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto h-full">
            {/* Left Column - Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-0 md:p-0 overflow-hidden flex flex-col md:flex-row items-stretch"
            >
              {/* Text Section */}
              <div className="flex-1 p-6 flex flex-col justify-start">
                <h2 className="text-2xl font-bold text-primary mb-6 md:mb-4">Overview</h2>
                <div className="space-y-4">
                  {config.overview.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Image Section */}
              <div className="md:w-2/5 w-full flex items-center justify-center bg-gradient-to-bl from-primary/5 to-secondary/10 p-0 md:p-0 h-56 md:h-auto">
                <img
                  src={config.images.overview}
                  alt={`${config.title} Overview`}
                  className="w-full h-full object-cover rounded-none md:rounded-r-none shadow-xl border-0 md:border-l-4 md:border-primary/10 transition-all duration-300"
                  style={{ minHeight: '100%', minWidth: '100%' }}
                />
              </div>
            </motion.div>

            {/* Right Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-0 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 pb-2">
                <h2 className="text-2xl font-bold text-primary mb-6">Benefits</h2>
                <div className="space-y-4 mb-4">
                  {config.benefits.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                      <p className="text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bottom Image Section */}
              <div className="w-full bg-gradient-to-t from-primary/5 to-transparent flex items-end justify-center">
                <img
                  src={config.images.benefits}
                  alt={`${config.title} Benefits`}
                  className="w-full h-40 md:h-48 object-cover rounded-b-none shadow-xl border-t-4 border-primary/10 m-0 p-0"
                  style={{ minHeight: '8rem', maxHeight: '14rem' }}
                />
              </div>
            </motion.div>
          </div>

          {/* --- New Sections: Learning Objective, Outcome, Assessments --- */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {/* Learning Objective */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, delay: 0.1, type: 'tween', scale: { duration: 0.22, type: 'spring', stiffness: 180, damping: 18 } }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start relative overflow-hidden"
            >
              {/* Animated Background Blobs */}
              <motion.div
                className="absolute -top-16 -left-16 w-44 h-44 bg-gradient-to-br from-primary/40 via-secondary/30 to-blue-100/40 rounded-full blur-2xl pointer-events-none z-0"
                animate={{ x: [0, 20, 0], y: [0, 30, 0], rotate: [0, 30, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 12, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-secondary/30 via-blue-100/40 to-primary/30 rounded-full blur-2xl pointer-events-none z-0"
                style={{ transform: 'translate(-50%, -50%)' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7], rotate: [0, -20, 0] }}
                transition={{ duration: 16, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
              <h2 className="text-xl font-bold text-primary mb-4 z-10 relative">Learning Objective</h2>
              <ul className="space-y-3 z-10 relative">
                {(config.objectives || ['Objective 1', 'Objective 2', 'Objective 3']).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Learning Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'tween', scale: { duration: 0.22, type: 'spring', stiffness: 180, damping: 18 } }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start relative overflow-hidden"
            >
              {/* Animated Background Blobs */}
              <motion.div
                className="absolute -bottom-20 -right-20 w-52 h-52 bg-gradient-to-br from-blue-100/50 via-primary/30 to-secondary/30 rounded-full blur-2xl pointer-events-none z-0"
                animate={{ x: [0, -25, 0], y: [0, -35, 0], rotate: [0, 40, 0], scale: [1, 1.18, 1] }}
                transition={{ duration: 14, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute top-1/3 left-0 w-28 h-28 bg-gradient-to-br from-secondary/40 via-blue-100/30 to-primary/30 rounded-full blur-2xl pointer-events-none z-0"
                animate={{ x: [0, 10, 0], y: [0, 15, 0], scale: [1, 1.1, 1], rotate: [0, -15, 0] }}
                transition={{ duration: 18, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
              <h2 className="text-xl font-bold text-primary mb-4 z-10 relative">Learning Outcome</h2>
              <ul className="space-y-3 z-10 relative">
                {(config.outcomes || ['Outcome 1', 'Outcome 2', 'Outcome 3']).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Assessments */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, delay: 0.3, type: 'tween', scale: { duration: 0.22, type: 'spring', stiffness: 180, damping: 18 } }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start relative overflow-hidden"
            >
              {/* Animated Background Blobs */}
              <motion.div
                className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-secondary/40 via-blue-100/40 to-primary/30 rounded-full blur-2xl pointer-events-none z-0"
                animate={{ x: [0, -15, 0], y: [0, 25, 0], scale: [1, 1.13, 1], rotate: [0, 25, 0] }}
                transition={{ duration: 15, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-0 left-1/2 w-40 h-40 bg-gradient-to-br from-primary/30 via-secondary/30 to-blue-100/40 rounded-full blur-2xl pointer-events-none z-0"
                style={{ transform: 'translateX(-50%)' }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8], rotate: [0, -30, 0] }}
                transition={{ duration: 17, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
              <h2 className="text-xl font-bold text-primary mb-4 z-10 relative">Assessments</h2>
              <ul className="space-y-3 z-10 relative">
                {(config.assessments || ['Assessment 1', 'Assessment 2', 'Assessment 3']).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          {/* --- End New Sections --- */}

          {/* Certification Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Certification Process</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
              {config.steps.map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="bg-white rounded-xl shadow-lg p-6 text-center min-w-[220px] max-w-xs mx-auto md:mx-0 flex flex-col justify-between min-h-[180px]"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="text-secondary text-2xl">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </motion.div>
                  {/* Animated Arrow (not after last card) */}
                  {index < config.steps.length - 1 && (
                    <motion.div
                      className="hidden md:flex items-center mx-2"
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: [0, 10, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                    >
                      <FaArrowRight className="text-primary text-3xl drop-shadow-lg" />
                    </motion.div>
                  )}
                  {/* For mobile, show arrow vertically */}
                  {index < config.steps.length - 1 && (
                    <motion.div
                      className="flex md:hidden items-center justify-center my-2"
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: [0, 10, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                    >
                      <FaArrowRight className="text-primary text-2xl rotate-90" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Get Certified Today</h2>
            <p className="text-gray-600 mb-6">Join over 2,000+ companies who trust ACS-GP for their certification needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors duration-300">
                Contact Us
              </button>
              <button className="bg-primary/5 text-primary px-8 py-3 rounded-full hover:bg-primary/10 transition-colors duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage; 