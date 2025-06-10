import { motion } from 'framer-motion'
import { FaUserTie, FaBuilding, FaUserGraduate, FaChartLine } from 'react-icons/fa'

const Stats = () => {
  const stats = [
    {
      icon: <FaUserTie className="w-8 h-8" />,
      number: "3000+",
      label: "Certified Trainers",
      description: "Expert professionals delivering quality training worldwide. Empowering organizations with industry-leading certification knowledge.",
      delay: 0.2
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      number: "2000+",
      label: "Certified Companies",
      description: "Businesses achieving excellence through our comprehensive certification programs. From startups to enterprises, we ensure quality standards.",
      delay: 0.4
    },
    {
      icon: <FaUserGraduate className="w-8 h-8" />,
      number: "10000+",
      label: "Certified Lead Auditors",
      description: "Qualified auditors ensuring compliance and excellence. Our network maintains the highest standards of certification integrity.",
      delay: 0.6
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      number: "98%",
      label: "Success Rate",
      description: "Consistently delivering successful certifications across industries. Our proven methodology ensures reliable outcomes.",
      delay: 0.8
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-1/2 h-full">
          <img src="/Safety1.jpeg" alt="Safety" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img src="/Safety2.jpeg" alt="Safety" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium mb-4 block">Our Impact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Numbers Reflect Our Reputation
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Expertise in ISO certifications, OSHA-compliant solutions, and gold/silver-rated programs. 
            Trust us for unparalleled, globally recognized certification services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: stat.delay
              }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  {stat.icon}
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: stat.delay + 0.2
                }}
                className="text-4xl font-bold text-primary mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-800 font-medium mb-3">{stat.label}</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats 