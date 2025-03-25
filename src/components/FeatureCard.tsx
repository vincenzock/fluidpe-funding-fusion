
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade-down';
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  delay,
  animation = 'fade-up',
  color = 'bg-gradient-to-br from-fluidpe-light-teal to-fluidpe-light-gold/30'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedElement delay={delay} animation={animation} className="w-full" interactive>
      <div 
        className={`feature-card h-full rounded-xl p-6 shadow-md transition-all duration-500 
        ${color} hover:shadow-xl border border-transparent relative overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background blob */}
        <div className={`absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-white/20 opacity-0 
          transition-all duration-700 ${isHovered ? 'opacity-20 scale-150' : ''}`}></div>
        
        {/* Shine effect overlay */}
        <div 
          className={`shine-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full 
          ${isHovered ? 'animate-shine' : ''}`} 
          style={{ 
            backgroundSize: '200% 100%'
          }}
        ></div>
        
        <div className="relative z-10">
          <div className="bg-white p-3 rounded-xl w-16 h-16 flex items-center justify-center mb-6 
            shadow-md transform transition-all duration-300 group-hover:rotate-3">
            <Icon className={`h-8 w-8 text-fluidpe-teal transition-all duration-300 
              ${isHovered ? 'scale-110' : ''}`} />
          </div>
          
          <h3 className={`text-xl font-semibold mb-3 text-fluidpe-teal transition-all duration-300 
            ${isHovered ? 'translate-x-1' : ''}`}>{title}</h3>
          
          <p className="text-gray-700 transition-all duration-300 min-h-[80px]">{description}</p>
          
          <div className={`mt-4 h-1 w-0 bg-fluidpe-teal/60 rounded-full transition-all duration-500 
            ${isHovered ? 'w-2/3' : ''}`}></div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default FeatureCard;
