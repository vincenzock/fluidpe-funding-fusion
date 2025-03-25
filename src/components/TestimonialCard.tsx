
import React, { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  quote: string;
  author: string;
  designation: string;
  delay: number;
  avatarUrl?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  designation, 
  delay, 
  avatarUrl,
  rating = 5
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
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
      <div 
        className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col hover:shadow-2xl transition-all duration-300 ${isHovered ? 'transform -translate-y-2' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-between items-start mb-4">
          <Quote className={`h-8 w-8 text-fluidpe-teal opacity-40 ${isHovered ? 'scale-110' : ''} transition-transform duration-300`} />
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            ))}
          </div>
        </div>
        <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 border-2 border-fluidpe-light-teal mr-3">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={author} />
            ) : null}
            <AvatarFallback className="bg-fluidpe-teal text-white">{getInitials(author)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-fluidpe-teal">{author}</p>
            <p className="text-sm text-gray-500">{designation}</p>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default TestimonialCard;
