
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
    <AnimatedElement delay={delay} className="w-full">
      <div className="border-b border-gray-200 pb-4">
        <button
          className="flex justify-between items-center w-full py-4 text-left font-medium text-fluidpe-teal focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-fluidpe-teal" />
          ) : (
            <ChevronDown className="h-5 w-5 text-fluidpe-teal" />
          )}
        </button>
        <div 
          className={`transition-all duration-300 overflow-hidden ${
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
