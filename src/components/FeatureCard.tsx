
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
      <div className="feature-card h-full group hover:transform hover:-translate-y-2 transition-all duration-300">
        <div className={`${color || 'bg-fluidpe-light-teal'} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-fluidpe-teal group-hover:text-white transition-all duration-300`}>
          <Icon className="h-8 w-8 text-fluidpe-teal group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-fluidpe-teal group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </AnimatedElement>
  );
};

export default FeatureCard;
