import { motion } from 'framer-motion';
import { Smartphone, Wifi, Shield } from 'lucide-react';
import PlanCard from '../components/PlanCard';

const mobilePlans = [
  {
    name: "Essential",
    price: 35,
    features: [
      { name: "30GB Data", included: true },
      { name: "Unlimited Canada-wide Calling", included: true },
      { name: "Unlimited International Calling", included: true },
      { name: "Unlimited Texting", included: true },
      { name: "International Roaming", included: false },
      { name: "Canada-US Roaming", included: false },
    ],
  },
  {
    name: "Premium Canada-Wide 5G",
    price: 50,
    features: [
      { name: "60 GB Data", included: true },
      { name: "Unlimited Canada-wide Calling", included: true },
      { name: "Unlimited International Texting", included: true },
      { name: "5G Network Access", included: true },
      { name: "Canada/US Coverage", included: false },
      { name: "International Roaming", included: false },
    ],
    popular: true,
  },
  {
    name: "Premium Can-US 5G+",
    price: 60,
    features: [
      { name: "Unlimited 5G+ Data", included: true },
      { name: "Unlimited Canada/US Calling", included: true },
      { name: "Unlimited International Texting", included: true },
      { name: "5G+ Network Access", included: true },
      { name: "Canada/US Coverage", included: true },
      { name: "Stream+ Entertainment Package", included: true },
    ],
    popular: true,
  },
  {
    name: "Premium Can-US-MEX 5G+",
    price: 65,
    features: [
      { name: "Unlimited 5G+ Data", included: true },
      { name: "Unlimited Global Calling", included: true },
      { name: "Unlimited International Texting", included: true },
      { name: "5G+ Network Access", included: true },
      { name: "Global Coverage", included: true },
      { name: "Priority Support", included: true },
    ],
  },
];

const internetPlans = [
  {
    name: "PureFibre 500",
    price: 65,
    features: [
      { name: "500 Mbps Download", included: true },
      { name: "Unlimited Usage", included: true },
      { name: "Wi-Fi 6 Router", included: true },
      { name: "Static IP", included: false },
      { name: "TELUS Boost Wi-Fi", included: false },
    ],
  },
  {
    name: "PureFibre Gigabit",
    price: 75,
    features: [
      { name: "1.5 Gbps Download", included: true },
      { name: "Unlimited Usage", included: true },
      { name: "Wi-Fi 6 Router", included: true },
      { name: "Static IP", included: true },
      { name: "TELUS Boost Wi-Fi", included: true },
    ],
    popular: true,
  },
  {
    name: "PureFibre Ultra",
    price: 80,
    features: [
      { name: "2 Gbps Download", included: true },
      { name: "Unlimited Usage", included: true },
      { name: "Wi-Fi 6 Router", included: true },
      { name: "Static IP", included: true },
      { name: "TELUS Boost Wi-Fi", included: true },
    ],
    popular: true,
  },
];

const securityPlans = [
  {
    name: "SmartHome Security",
    price: 35,
    features: [
      { name: "24/7 Professional Monitoring", included: true },
      { name: "Mobile App Control", included: true },
      { name: "Motion Sensors", included: true },
      { name: "Door/Window Sensors", included: true },
      { name: "HD Security Cameras", included: false },
      { name: "Voice Control", included: false },
    ],
  },
  {
    name: "SmartHome Security Plus",
    price: 55,
    features: [
      { name: "24/7 Professional Monitoring", included: true },
      { name: "Mobile App Control", included: true },
      { name: "Motion Sensors", included: true },
      { name: "Door/Window Sensors", included: true },
      { name: "HD Security Cameras", included: true },
      { name: "Voice Control", included: true },
    ],
    popular: true,
  },
  {
    name: "SmartHome Security Elite",
    price: 75,
    features: [
      { name: "24/7 Professional Monitoring", included: true },
      { name: "Mobile App Control", included: true },
      { name: "Motion Sensors", included: true },
      { name: "Door/Window Sensors", included: true },
      { name: "HD Security Cameras", included: true },
      { name: "Voice Control", included: true },
    ],
    popular: true,
  },
];

const TelusPlans = () => {
  const handleGetStarted = (type: string) => {
    if (type === 'mobile') {
      window.location.href = 'https://forms.gle/sMkSowyVWi6HJoEy8';
    } else {
      window.location.href = 'https://forms.gle/nanVuJFnvjm3odVF6';
    }
  };

  return (
    <div id="plans" className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Telus Plans
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future with Telus' advanced network and innovative solutions.
          </p>
        </motion.div>

        {/* Mobile Plans */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Smartphone className="h-8 w-8 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mobile Plans</h2>
          </div>
          <div className="offer-container justify-center">
            {mobilePlans.map((plan, index) => (
              <div className="offer-card fade-in-up" key={index}>
                <PlanCard
                  type="mobile"
                  provider="telus"
                  {...plan}
                  onClick={() => handleGetStarted('mobile')}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Internet Plans */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Wifi className="h-8 w-8 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Internet Plans</h2>
          </div>
          <div className="offer-container justify-center">
            {internetPlans.map((plan, index) => (
              <div className="offer-card fade-in-up" key={index}>
                <PlanCard
                  type="internet"
                  provider="telus"
                  {...plan}
                  onClick={() => handleGetStarted('internet')}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Security Plans */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Shield className="h-8 w-8 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Security Plans</h2>
          </div>
          <div className="offer-container justify-center">
            {securityPlans.map((plan, index) => (
              <div className="offer-card fade-in-up" key={index}>
                <PlanCard
                  type="security"
                  provider="telus"
                  {...plan}
                  onClick={() => handleGetStarted('security')}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TelusPlans;