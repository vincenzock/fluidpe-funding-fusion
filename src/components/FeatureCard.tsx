
import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-down' | 'zoom-in';
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  delay,
  animation = 'fade-up',
  color
}) => {
  return (
    <AnimatedElement delay={delay} animation={animation} className="w-full">
      <div className="feature-card h-full group hover:transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white via-white to-gray-50 backdrop-blur-sm border border-white/40 rounded-xl p-6 shadow-sm hover:shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shine-effect"></div>
        
        <div className={`${color || 'bg-fluidpe-light-teal'} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-fluidpe-teal transition-all duration-500 transform group-hover:scale-110 glow-on-hover`}>
          <Icon className="h-8 w-8 text-fluidpe-teal group-hover:text-white transition-colors duration-500" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-fluidpe-teal group-hover:text-fluidpe-medium-teal group-hover:translate-x-1 transition-all duration-300 bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text group-hover:text-transparent">{title}</h3>
        
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
        
        <div className="h-1 w-0 bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal rounded-full mt-4 group-hover:w-1/3 transition-all duration-500 ease-in-out"></div>
      </div>
    </AnimatedElement>
  );
};

export default FeatureCard;
