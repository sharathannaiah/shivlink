import React from 'react';
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
      { name: "Fido App", included: true },
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
      { name: "Rogers App", included: true },
      { name: "Canada/US Coverage", included: false },
      { name: "International Roaming", included: false },
    ],
    popular: true,
  },
  {
    name: "Premium Can-US 5G+",
    price: 55,
    features: [
      { name: "100 GB Data", included: true },
      { name: "Unlimited Canada/US Calling", included: true },
      { name: "Unlimited International Texting", included: true },
      { name: "Rogers App", included: true },
      { name: "Canada/US Coverage", included: true },
      { name: "International Roaming", included: true },
      { name: "Mexico Roaming", included: false },
    ],
    popular: true,
  },
  {
    name: "Premium Can-US-MEX 5G+",
    price: 60,
    features: [
      { name: "150 BG Data", included: true },
      { name: "Unlimited Canada/US Calling", included: true },
      { name: "Unlimited International Texting", included: true },
      { name: "Rogers App", included: true },
      { name: "Canada/US/Mexico Coverage", included: true },
      { name: "International Roaming", included: true },
      { name: "Mexico Roaming", included: true },
    ],
  },
];

const internetPlans = [
  {
    name: "Ignite 250",
    price: 65,
    features: [
      { name: "250 Mbps Download", included: true },
      { name: "Unlimited Usage", included: true },
      { name: "XB7 Modem", included: true },
      { name: "Priority Support", included: false },
      { name: "Best for 5-10 devices", included: true },
      { name: "Fido Rogers customers save $10", included: true },
    ],
  },
  {
    name: "Ignite 1000",
    price: 75,
    features: [
      { name: "1 Gbps Download", included: true },
      { name: "Unlimited Usage", included: true },
      { name: "Best for steaming, TV, and security", included: true },
      { name: "Best for 20+ devices", included: true },
      { name: "Priority Support", included: true },
      { name: "Fido Rogers customers save $10", included: true },
    ],
    popular: true,
  },
  {
    name: "Ignite 2000",
    price: 80,
    features: [
      { name: "2 Gbps Download", included: true },
      { name: "Unlimited Usage", included: true },
      { name: "Best for gamers", included: true },
      { name: "Best for 25+ devices", included: true },
      { name: "Priority Support", included: true },
      { name: "Fido Rogers customers save $10", included: true },
    ],
    popular: true,
  },
];

const securityPlans = [
  {
    name: "Smart Security",
    price: 29,
    features: [
      { name: "24/7 Monitoring", included: true },
      { name: "Mobile App Access", included: true },
      { name: "Motion Sensors", included: true },
      { name: "Door/Window Sensors", included: true },
      { name: "Video Monitoring", included: false },
      { name: "Smart Home Integration", included: false },
    ],
  },
  {
    name: "Smart Security Pro",
    price: 49,
    features: [
      { name: "24/7 Monitoring", included: true },
      { name: "Mobile App Access", included: true },
      { name: "Motion Sensors", included: true },
      { name: "Door/Window Sensors", included: true },
      { name: "Video Monitoring", included: true },
      { name: "Smart Home Integration", included: true },
    ],
    popular: true,
  },
  {
    name: "Smart Security Elite",
    price: 69,
    features: [
      { name: "24/7 Monitoring", included: true },
      { name: "Mobile App Access", included: true },
      { name: "Motion Sensors", included: true },
      { name: "Door/Window Sensors", included: true },
      { name: "Video Monitoring", included: true },
      { name: "Smart Home Integration", included: true },
    ],
    popular: true,
  },
];

const RogersPlans = () => {
  const handleGetStarted = () => {
    window.location.href = 'https://www.rogers.com'; // Navigate to Rogers website
  };

  return (
    <div id="plans" className="pt-20 pb-16 bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-900 dark:to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Rogers Plans
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
           Our exclusive Rogers deals
          </p>
        </motion.div>

        {/* Mobile Plans */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Smartphone className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mobile Plans</h2>
          </div>
          <div className="offer-container justify-center">
            {mobilePlans.map((plan, index) => (
              <div className="offer-card fade-in-up" key={index}>
                <PlanCard
                  type="mobile"
                  provider="rogers"
                  {...plan}
                  onClick={handleGetStarted}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Internet Plans */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Wifi className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Internet Plans</h2>
          </div>
          <div className="offer-container justify-center">
            {internetPlans.map((plan, index) => (
              <div className="offer-card fade-in-up" key={index}>
                <PlanCard
                  type="internet"
                  provider="rogers"
                  {...plan}
                  onClick={handleGetStarted}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Security Plans */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Shield className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Security Plans</h2>
          </div>
          <div className="offer-container justify-center">
            {securityPlans.map((plan, index) => (
              <div className="offer-card fade-in-up" key={index}>
                <PlanCard
                  type="security"
                  provider="rogers"
                  {...plan}
                  onClick={handleGetStarted}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RogersPlans;