import { motion } from 'framer-motion';
import { FaHandshake, FaChartLine, FaShieldAlt, FaCertificate, FaUserCheck, FaChartBar, FaArrowRight } from 'react-icons/fa';

const ApprovalCard = ({ title, approach, results, icon, delay, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay 
      }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
    >
      {/* Card Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center">
          <div className="p-3 bg-white/90 backdrop-blur-sm rounded-xl mr-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-8">
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-primary mb-3">Approach</h4>
          <p className="text-gray-600">{approach}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-primary mb-3">Results</h4>
          <ul className="space-y-4">
            {results.map((result, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.1 * index }}
                className="flex items-start text-gray-600 group/item"
              >
                <FaShieldAlt className="text-secondary mr-3 flex-shrink-0 mt-1 group-hover/item:rotate-12 transition-transform" />
                {result}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.button
          whileHover={{ x: 5 }}
          className="mt-8 flex items-center text-secondary font-medium group/btn"
        >
          Learn More 
          <FaArrowRight className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Approved = () => {
  const approvalTypes = [
    {
      title: "Become an Approved Partner",
      approach: "Our expert consultants provide strategic support to help organizations achieve competitive excellence through deliberate and innovative approaches.",
      results: [
        "Enhanced market presence through innovative solutions",
        "Advanced risk management with data-driven analytics",
        "Increased profitability and client satisfaction rates",
        "Access to global certification network"
      ],
      icon: <FaHandshake className="w-8 h-8 text-primary" />,
      delay: 0.2,
      image: "/Business.jpeg"
    },
    {
      title: "Become an Approved Inspection Body",
      approach: "Join our network of certified inspection bodies to deliver high-quality assessment services while maintaining the highest standards of integrity.",
      results: [
        "Comprehensive training and technical support",
        "Recognition in international markets",
        "Access to cutting-edge inspection tools",
        "Regular professional development opportunities"
      ],
      icon: <FaCertificate className="w-8 h-8 text-primary" />,
      delay: 0.4,
      image: "/Safety1.jpeg"
    }
  ];

  const backgroundVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        variants={backgroundVariants}
        animate="animate"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(45deg, #00809D 25%, transparent 25%, transparent 75%, #00809D 75%, #00809D), linear-gradient(45deg, #00809D 25%, transparent 25%, transparent 75%, #00809D 75%, #00809D)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium mb-4 block">Join Our Network</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Become an Approved Member</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our growing network of certified partners and inspection bodies to expand your business horizons and deliver excellence in certification services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {approvalTypes.map((type, index) => (
            <ApprovalCard key={index} {...type} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center text-lg font-medium shadow-lg hover:shadow-xl"
          >
            <FaUserCheck className="mr-2" />
            Apply for Membership
          </motion.button>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Approved; 