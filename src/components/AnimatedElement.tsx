
import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'flip' | 'bounce' | 'fade-in';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationType;
  duration?: number;
  threshold?: number;
  interactive?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className = '',
  delay = 0,
  animation = 'fade-up',
  duration = 700,
  threshold = 0.1,
  interactive = false
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
              // Cast to HTMLElement to access dataset property
              const targetElement = entry.target as HTMLElement;
              targetElement.dataset.animation = animation;
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, 
      { threshold: threshold, rootMargin: "10px" }
    );
    
    if (elementRef.current) {
      elementRef.current.style.setProperty('--animation-duration', `${duration}ms`);
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, animation, duration, threshold]);
  
  const interactiveClass = interactive 
    ? 'transition-transform duration-300 hover:scale-105 hover:-translate-y-2' 
    : '';
  
  return (
    <div 
      ref={elementRef} 
      className={`animate-on-scroll ${className} ${interactiveClass}`}
      data-animation={animation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
