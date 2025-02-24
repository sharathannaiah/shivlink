import { motion } from 'framer-motion';
import { Shield, Smartphone, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
            <span className="block">Empowering Canadians with</span>
            <span className="block text-blue-600">Cutting-Edge Telecom solutions</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of connectivity with exclusive Rogers and Telus deals for 2025.
            Discover unmatched Mobile, Internet, and Home security solutions.
          </p>

          <div className="mt-10 flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#plans"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Explore Plans
            </motion.a>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<Smartphone className="h-8 w-8 text-blue-600" />}
            title="Mobile Plans"
            description="Latest 5G technology with unlimited data options and exclusive Canadian deals."
          />
          <Feature
            icon={<Wifi className="h-8 w-8 text-blue-600" />}
            title="Internet Services"
            description="Lightning-fast fiber internet with speeds up to 3 Gbps for seamless connectivity."
          />
          <Feature
            icon={<Shield className="h-8 w-8 text-blue-600" />}
            title="Home Security"
            description="Advanced smart home security systems for complete peace of mind."
          />
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
  >
    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export default Hero;