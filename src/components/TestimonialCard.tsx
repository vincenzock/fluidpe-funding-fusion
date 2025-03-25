
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface TestimonialCardProps {
  quote: string;
  author: string;
  designation: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, designation, delay }) => {
  // Generate a unique but consistent avatar URL based on the author's name
  const getAvatarUrl = (name: string) => {
    const seed = name.replace(/\s+/g, '').toLowerCase();
    return `https://api.dicebear.com/7.x/micah/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
  };
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <AnimatedElement delay={delay} animation="zoom-in" className="w-full">
      <div className="bg-gradient-to-br from-white to-fluidpe-light-teal/20 p-6 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col hover:shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
        <Quote className="h-8 w-8 text-fluidpe-teal opacity-40 mb-4 group-hover:scale-110 transition-transform duration-300" />
        <p className="text-gray-700 mb-6 flex-grow relative">
          <span className="relative z-10 transition-all duration-300 group-hover:text-fluidpe-teal/80">{quote}</span>
        </p>
        <div className="relative z-10 flex items-center">
          <Avatar className="h-12 w-12 border-2 border-fluidpe-light-teal mr-3 group-hover:border-fluidpe-teal transition-all duration-300 shadow-sm">
            <AvatarImage src={getAvatarUrl(author)} alt={author} />
            <AvatarFallback className="bg-gradient-to-br from-fluidpe-light-teal to-fluidpe-medium-teal text-white">
              {getInitials(author)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-fluidpe-teal group-hover:translate-x-1 transition-transform duration-300">{author}</p>
            <p className="text-sm text-gray-500 group-hover:translate-x-1 transition-transform duration-500">{designation}</p>
            <div className="w-0 h-0.5 bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal mt-2 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default TestimonialCard;
