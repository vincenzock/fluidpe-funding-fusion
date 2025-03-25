
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import TestimonialCard from './TestimonialCard';
import AnimatedElement from './AnimatedElement';

const testimonials = [
  {
    quote: "This solution transformed our workflow. We've seen a 50% increase in productivity since implementation.",
    author: "Sarah Johnson",
    designation: "Director of Operations, TechCorp"
  },
  {
    quote: "Intuitive interface and powerful features. It's exactly what our team needed to streamline our processes.",
    author: "Michael Chen",
    designation: "Product Manager, InnoSystems"
  },
  {
    quote: "The customer support is exceptional. They helped us customize the platform to meet our specific needs.",
    author: "Priya Patel",
    designation: "CTO, GrowthLabs"
  },
  {
    quote: "We've reduced our operational costs by 30% after adopting this solution. The ROI has been remarkable.",
    author: "James Rodriguez",
    designation: "Finance Director, OptimizeNow"
  },
  {
    quote: "The analytics dashboard provides insights we never had access to before. Game-changing for our decision making.",
    author: "Emily Watson",
    designation: "Data Analyst, InsightfulTech"
  },
  {
    quote: "Implementation was smooth and the learning curve was minimal. Our entire team was up and running in days.",
    author: "David Kim",
    designation: "HR Manager, TalentForce"
  },
  {
    quote: "The automation features have eliminated repetitive tasks, allowing our team to focus on strategic initiatives.",
    author: "Olivia Martinez",
    designation: "Innovation Lead, FutureCorp"
  },
  {
    quote: "Scalable and reliable. As our company has grown, the platform has grown with us without any performance issues.",
    author: "Robert Taylor",
    designation: "IT Director, ScaleUp Inc."
  },
  {
    quote: "The security features give us peace of mind when handling sensitive customer data. Compliance has never been easier.",
    author: "Aisha Johnson",
    designation: "Security Officer, TrustGuard"
  },
  {
    quote: "This platform has become the backbone of our operations. I can't imagine running our business without it now.",
    author: "Thomas Wilson",
    designation: "CEO, VisionaryGroup"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <AnimatedElement animation="fade-up" className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-fluidpe-teal mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover how our solutions have helped companies across industries achieve their goals and transform their operations.</p>
      </AnimatedElement>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                designation={testimonial.designation}
                delay={index * 100}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8">
          <CarouselPrevious className="static translate-y-0 mr-2" />
          <CarouselNext className="static translate-y-0 ml-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialsSection;
