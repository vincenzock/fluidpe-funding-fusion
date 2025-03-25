
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
      <div className={`transition-all duration-300 ${isOpen ? 'bg-fluidpe-light-teal/10' : 'bg-white'}`}>
        <button
          className="flex justify-between items-center w-full py-5 px-6 text-left font-medium text-fluidpe-teal focus:outline-none group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`text-lg transition-all duration-300 ${isOpen ? 'text-fluidpe-teal font-semibold' : 'text-gray-700'} group-hover:text-fluidpe-teal`}>
            {question}
          </span>
          <div className={`transition-all duration-300 bg-fluidpe-light-teal/20 rounded-full p-2 ${isOpen ? 'bg-fluidpe-teal/20' : ''}`}>
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-fluidpe-teal transition-transform duration-300 group-hover:scale-110" />
            ) : (
              <ChevronDown className="h-5 w-5 text-fluidpe-teal transition-transform duration-300 group-hover:scale-110" />
            )}
          </div>
        </button>
        <div 
          className={`transition-all duration-500 overflow-hidden px-6 ${
            isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`bg-white rounded-lg p-4 ${isOpen ? 'shadow-inner' : ''}`}>
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default FaqItem;
