
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  designation: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, designation, delay }) => {
  return (
    <AnimatedElement delay={delay} className="w-full">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col">
        <Quote className="h-8 w-8 text-fluidpe-teal opacity-40 mb-4" />
        <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
        <div>
          <p className="font-semibold text-fluidpe-teal">{author}</p>
          <p className="text-sm text-gray-500">{designation}</p>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default TestimonialCard;
