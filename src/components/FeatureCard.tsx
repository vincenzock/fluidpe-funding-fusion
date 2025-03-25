
import React, { useRef, useState } from 'react';
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
  color = 'bg-fluidpe-light-teal'
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <AnimatedElement delay={delay} animation={animation} className="w-full">
      <div 
        ref={cardRef}
        className={`feature-card h-full group hover:transform hover:-translate-y-2 transition-all duration-300 bg-white p-6 rounded-xl shadow-md hover:shadow-xl relative overflow-hidden`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Shine effect */}
        {isHovering && (
          <div 
            className="absolute w-[150px] h-[150px] bg-white/20 rounded-full pointer-events-none blur-xl transition-all duration-300"
            style={{ 
              left: `${mousePosition.x - 75}px`, 
              top: `${mousePosition.y - 75}px`,
              opacity: 0.4
            }}
          />
        )}
        
        <div className="relative z-10">
          <div className={`${color || 'bg-fluidpe-light-teal'} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-fluidpe-teal group-hover:text-white transition-all duration-300`}>
            <Icon className="h-8 w-8 text-fluidpe-teal group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-fluidpe-teal group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default FeatureCard;
