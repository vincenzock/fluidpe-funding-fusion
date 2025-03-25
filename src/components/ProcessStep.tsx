
import React from 'react';
import AnimatedElement from './AnimatedElement';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay }) => {
  return (
    <AnimatedElement delay={delay} animation="fade-up" className="w-full">
      <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-fluidpe-light-teal hover:border-fluidpe-teal shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
        <div className="absolute -top-4 -left-4 bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal rounded-full text-white font-bold w-10 h-10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        
        <div className="ml-2">
          <h3 className="text-lg font-semibold mb-2 text-fluidpe-teal group-hover:translate-x-1 transition-transform duration-300 mt-1">
            {title}
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm">
            {description}
          </p>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default ProcessStep;
