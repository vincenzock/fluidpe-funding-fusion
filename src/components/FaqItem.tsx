
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface FaqItemProps {
  question: string;
  answer: string;
  delay: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <AnimatedElement delay={delay} animation="fade-left" className="w-full">
      <div className="border-b border-gray-200 pb-4 hover:border-fluidpe-teal transition-colors duration-300">
        <button
          className="flex justify-between items-center w-full py-4 text-left font-medium text-fluidpe-teal focus:outline-none group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="group-hover:translate-x-1 transition-transform duration-300">{question}</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-fluidpe-teal transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <ChevronDown className="h-5 w-5 text-fluidpe-teal transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>
        <div 
          className={`transition-all duration-500 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="py-4 text-gray-600">{answer}</p>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default FaqItem;
