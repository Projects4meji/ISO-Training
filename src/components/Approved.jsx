import { motion } from 'framer-motion';
import { FaHandshake, FaChartLine, FaShieldAlt, FaCertificate, FaUserCheck, FaChartBar } from 'react-icons/fa';

const ApprovalCard = ({ title, approach, results, icon, delay }) => {
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
      className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-primary/10 rounded-xl mr-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-primary mb-3">Approach</h4>
        <p className="text-gray-600">{approach}</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-primary mb-3">Results</h4>
        <ul className="space-y-3">
          {results.map((result, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.1 * index }}
              className="flex items-center text-gray-600"
            >
              <FaShieldAlt className="text-secondary mr-3 flex-shrink-0" />
              {result}
            </motion.li>
          ))}
        </ul>
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
      delay: 0.2
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
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/Why Successful Investing Goes Beyond Seeking High Returns!.jpeg"
          alt="Background Pattern"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-50/80"></div>
      </div>

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

        <div className="grid md:grid-cols-2 gap-8">
          {approvalTypes.map((type, index) => (
            <ApprovalCard key={index} {...type} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center">
            <FaUserCheck className="mr-2" />
            Apply for Membership
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Approved; 