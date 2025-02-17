import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { clsx } from 'clsx';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PlanCardProps {
  type: 'mobile' | 'internet' | 'security';
  name: string;
  price: number;
  features: PlanFeature[];
  popular?: boolean;
  provider: 'rogers' | 'telus';
  onClick: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  type,
  name,
  price,
  features,
  popular = false,
  provider,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={clsx(
        "relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2",
        popular ? "border-blue-500" : "border-transparent"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
        <div className="flex items-center justify-center">
          <span className="text-3xl font-bold text-blue-600">${price}</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={clsx(
              "h-5 w-5 mr-2",
              feature.included ? "text-blue-500" : "text-gray-300 dark:text-gray-600"
            )} />
            <span className={clsx(
              "text-sm",
              feature.included 
                ? "text-gray-700 dark:text-gray-300" 
                : "text-gray-400 dark:text-gray-500 line-through"
            )}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={clsx(
          "w-full py-3 px-4 rounded-lg font-medium transition-colors",
          provider === 'rogers' 
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-green-600 hover:bg-green-700 text-white"
        )}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default PlanCard;