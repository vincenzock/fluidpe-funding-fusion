
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
      <div className="feature-card h-full group hover:transform hover:-translate-y-2 transition-all duration-300 p-6 rounded-xl border border-gray-100/30 shadow-sm hover:shadow-md bg-gradient-to-br from-white to-fluidpe-light-teal/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
        <div className={`${color || 'bg-fluidpe-light-teal'} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-fluidpe-teal group-hover:text-white transition-all duration-300 relative z-10`}>
          <Icon className="h-8 w-8 text-fluidpe-teal group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-fluidpe-teal group-hover:translate-x-1 transition-transform duration-300 relative z-10">{title}</h3>
        <div className="w-0 h-0.5 bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal mb-3 group-hover:w-2/3 transition-all duration-500 relative z-10"></div>
        <p className="text-gray-600 relative z-10 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      </div>
    </AnimatedElement>
  );
};

export default FeatureCard;
