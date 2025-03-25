
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
      <div className="group relative bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-fluidpe-light-teal hover:border-fluidpe-teal shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
        <div className="absolute -top-3 -left-3 bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal rounded-full text-white font-bold w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative">
          <div className="absolute w-full h-full rounded-full bg-fluidpe-teal animate-ping opacity-20 duration-1500"></div>
          <div className="absolute w-full h-full rounded-full bg-white/10"></div>
          {number}
        </div>
        
        <div className="ml-5">
          <h3 className="text-lg font-semibold mb-2 text-fluidpe-teal group-hover:translate-x-1 transition-transform duration-300 mt-1">
            {title}
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm">
            {description}
          </p>
          
          <div className="w-full h-0.5 bg-gradient-to-r from-fluidpe-light-teal to-transparent mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default ProcessStep;
