
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay }) => {
  return (
    <AnimatedElement delay={delay} animation="fade-right" className="w-full">
      <div className="group relative bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-fluidpe-light-teal hover:border-fluidpe-teal shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="absolute -top-3 -left-3 bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal rounded-full text-white font-bold w-14 h-14 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative">
          <div className="absolute w-full h-full rounded-full bg-fluidpe-teal animate-ping opacity-30 duration-1000"></div>
          <div className="absolute w-full h-full rounded-full bg-white/10"></div>
          {number}
        </div>
        
        <div className="ml-6">
          <h3 className="text-xl font-semibold mb-3 text-fluidpe-teal group-hover:translate-x-1 transition-transform duration-300 mt-1">
            {title}
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
            {description}
          </p>
          
          <div className="w-full h-1 bg-gradient-to-r from-fluidpe-light-teal to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default ProcessStep;
