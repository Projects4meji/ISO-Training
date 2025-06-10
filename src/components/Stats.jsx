import { motion } from 'framer-motion'
import { FaUserTie, FaBuilding, FaUserShield } from 'react-icons/fa'

const Stats = () => {
  const stats = [
    {
      number: "3000+",
      label: "Certified Trainers",
      description: "Expert trainers qualified to deliver ISO certification training",
      icon: <FaUserTie className="text-3xl" />
    },
    {
      number: "2000+",
      label: "Certified Companies",
      description: "Organizations successfully certified through our programs",
      icon: <FaBuilding className="text-3xl" />
    },
    {
      number: "10000+",
      label: "Lead Auditors",
      description: "Qualified lead auditors ensuring certification excellence",
      icon: <FaUserShield className="text-3xl" />
    }
  ]

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            The Numbers Reflect Our Reputation
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Expertise in ISO certifications, OSHA-compliant solutions, and gold/silver-rated programs. 
            Trust ACS-GP for unparalleled, globally recognized certification services.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -100, y: index * 50 }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                y: index * 40,
                transition: { 
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }
              }}
              viewport={{ once: true }}
              className={`
                w-full md:w-1/3 p-8 rounded-lg
                ${index === 0 ? 'bg-primary text-white' : ''}
                ${index === 1 ? 'bg-secondary text-white' : ''}
                ${index === 2 ? 'bg-accent text-white' : ''}
                transform hover:-translate-y-2 transition-all duration-300
                shadow-lg hover:shadow-xl
              `}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${index === 0 ? 'bg-white/20' : ''}
                  ${index === 1 ? 'bg-white/20' : ''}
                  ${index === 2 ? 'bg-white/20' : ''}
                `}>
                  {stat.icon}
                </div>
                <motion.h3 
                  className="text-3xl font-bold"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.h3>
              </div>
              <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
              <p className="text-white/80 text-sm">{stat.description}</p>
              
              {/* Decorative line */}
              <div className={`
                h-1 w-20 rounded-full mt-4
                ${index === 0 ? 'bg-white/30' : ''}
                ${index === 1 ? 'bg-white/30' : ''}
                ${index === 2 ? 'bg-white/30' : ''}
              `}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats 