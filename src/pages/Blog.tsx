
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Separator } from '@/components/ui/separator';
import BlogCard from '@/components/BlogCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import TestimonialCard from '@/components/TestimonialCard';
import AnimatedElement from '@/components/AnimatedElement';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const Blog = () => {
  // Sample blog data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Loans Against Mutual Funds",
      excerpt: "Learn how you can leverage your mutual fund investments without selling them and the benefits this approach offers.",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      category: "Finance",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "5 Common Myths About Mutual Fund Loans",
      excerpt: "We debunk the most common misconceptions about taking loans against your mutual fund investments.",
      date: "July 22, 2023",
      author: "Michael Chen",
      category: "Investment",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "How to Optimize Your Mutual Fund Portfolio",
      excerpt: "Expert tips on building and managing a mutual fund portfolio that aligns with your financial goals.",
      date: "August 10, 2023",
      author: "Priya Sharma",
      category: "Investment",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Tax Implications of Loans Against Mutual Funds",
      excerpt: "A comprehensive guide to understanding the tax aspects of taking loans against your mutual fund investments.",
      date: "September 5, 2023",
      author: "David Wilson",
      category: "Tax",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Market Volatility and Your Mutual Fund Loans",
      excerpt: "How market fluctuations impact loans against mutual funds and strategies to mitigate risks.",
      date: "October 18, 2023",
      author: "Anjali Patel",
      category: "Market Analysis",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 6,
      title: "The Future of Digital Lending Against Assets",
      excerpt: "Exploring how technology is transforming the landscape of asset-based lending, particularly for mutual funds.",
      date: "November 30, 2023",
      author: "James Roberts",
      category: "Technology",
      imageUrl: "/placeholder.svg"
    }
  ];

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

  // State for the article dialog
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to open article dialog
  const openArticle = (testimonial) => {
    setSelectedArticle(testimonial);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fluidpe-teal mb-4">
              Fluidpe Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights, guides, and news about mutual funds, loans, and personal finance to help you make informed financial decisions.
            </p>
            <Separator className="w-24 mx-auto mt-6 bg-fluidpe-teal/30" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                category={post.category}
                imageUrl={post.imageUrl}
                delay={0}
              />
            ))}
          </div>

          {/* Testimonials Section */}
          <section className="py-16 bg-gradient-to-b from-white to-fluidpe-light-teal/10 mt-16">
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
                    <CarouselItem key={index} className="md:basis-1/4">
                      <div onClick={() => openArticle(testimonial)} className="cursor-pointer">
                        <TestimonialCard
                          quote={testimonial.quote}
                          author={testimonial.author}
                          designation={testimonial.designation}
                          delay={index * 100}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8">
                  <CarouselPrevious className="static translate-y-0 mr-2" />
                  <CarouselNext className="static translate-y-0 ml-2" />
                </div>
              </Carousel>
            </div>
          </section>
        </div>
      </main>

      {/* Dialog for displaying the full article */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          {selectedArticle && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl text-fluidpe-teal">{selectedArticle.author}'s Experience</DialogTitle>
                <DialogDescription className="text-gray-500 text-sm">{selectedArticle.designation}</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-gray-700 mb-4">{selectedArticle.quote}</p>
                <p className="text-gray-700">
                  {selectedArticle.author} shares more insights about how our platform has transformed their business operations. 
                  The implementation process was smooth, and the team was able to adapt quickly to the new system.
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                  <p className="text-gray-600 italic">
                    "Working with this platform has been a game-changer for our team. We've been able to streamline
                    our processes and focus on what really matters - growing our business and serving our customers better."
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
