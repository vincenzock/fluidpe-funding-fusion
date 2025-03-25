
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
    <AnimatedElement delay={delay} className="w-full">
      <div className="flex items-start gap-4">
        <div className="bg-fluidpe-teal rounded-full text-white font-bold w-12 h-12 flex items-center justify-center flex-shrink-0">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-fluidpe-teal">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default ProcessStep;
