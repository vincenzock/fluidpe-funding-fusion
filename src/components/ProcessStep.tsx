
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
    <AnimatedElement delay={delay} animation="fade-right" className="w-full">
      <div className="flex items-start gap-4 group hover:transform hover:-translate-y-1 transition-all duration-300">
        <div className="bg-fluidpe-teal rounded-full text-white font-bold w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative">
          <div className="absolute w-full h-full rounded-full bg-fluidpe-teal animate-ping opacity-30 duration-1000"></div>
          {number}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-fluidpe-teal group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default ProcessStep;
