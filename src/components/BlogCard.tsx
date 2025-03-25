
import React from 'react';
import { Calendar } from 'lucide-react';
import AnimatedElement from './AnimatedElement';
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  delay: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  author, 
  category, 
  imageUrl, 
  delay 
}) => {
  return (
    <AnimatedElement delay={delay} animation="fade-up" className="w-full">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group border border-gray-100">
        <div className="relative overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="absolute top-4 right-4 bg-fluidpe-teal text-white text-xs py-1 px-2 rounded-full">
            {category}
          </span>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
          <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-fluidpe-teal transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">{excerpt}</p>
          <button className="text-fluidpe-teal font-medium text-sm hover:underline">
            Read More
          </button>
        </CardContent>
      </Card>
    </AnimatedElement>
  );
};

export default BlogCard;
