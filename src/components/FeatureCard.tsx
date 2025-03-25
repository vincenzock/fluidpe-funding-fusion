
import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => {
  return (
    <AnimatedElement delay={delay} className="w-full">
      <div className="feature-card h-full">
        <div className="bg-fluidpe-light-teal p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <Icon className="h-8 w-8 text-fluidpe-teal" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-fluidpe-teal">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </AnimatedElement>
  );
};

export default FeatureCard;
