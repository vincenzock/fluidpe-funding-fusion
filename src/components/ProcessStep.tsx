
import React from 'react';
import AnimatedElement from './AnimatedElement';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
  icon?: React.ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay, icon }) => {
  return (
    <AnimatedElement delay={delay} animation="fade-up" className="w-full">
      <div className="relative px-6 py-8 h-full rounded-xl flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-fluidpe-light-teal/50 hover:shadow-md group">
        {icon && (
          <div className="text-fluidpe-teal mb-4">
            {icon}
          </div>
        )}
        
        <div className="bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal rounded-full text-white font-bold w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-fluidpe-teal">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default ProcessStep;
