
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
    <AnimatedElement delay={delay} animation="zoom-in" className="w-full">
      <div className="bg-gradient-to-br from-white via-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col hover:shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shine-effect"></div>
        
        <Quote className="h-8 w-8 text-fluidpe-teal opacity-40 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
        
        <p className="text-gray-700 mb-6 flex-grow group-hover:text-gray-800 transition-colors duration-300">{quote}</p>
        
        <div className="border-t border-gray-100 pt-4 group-hover:border-fluidpe-light-teal transition-colors duration-300">
          <p className="font-semibold text-fluidpe-teal group-hover:text-fluidpe-medium-teal transition-colors duration-300">{author}</p>
          <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{designation}</p>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default TestimonialCard;
