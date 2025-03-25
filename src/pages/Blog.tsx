
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

  // Adding the full blog posts content from the Index page
  const fullBlogPosts = [
    {
      id: 1,
      title: "How Mutual Fund Loans Are Transforming India's Financial Landscape",
      excerpt: "Discover how loans against mutual funds are providing a new level of financial flexibility to Indian investors and how it compares to traditional lending options.",
      date: "June 15, 2023",
      author: "Rahul Sharma",
      category: "Investment",
      imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      content: "Loans against mutual funds have emerged as a revolutionary financial tool in India's lending ecosystem. Unlike traditional loans that require extensive documentation and time-consuming approval processes, loans against mutual funds offer a streamlined approach to accessing liquidity without having to sell valuable investments. This article explores how this innovative financial solution is changing the way Indians think about their investment portfolios and short-term financing needs. We'll examine the key advantages, potential considerations, and how various investor profiles can leverage this option effectively."
    },
    {
      id: 2,
      title: "Understanding the Tax Implications of Loans Against Mutual Funds",
      excerpt: "Learn about the tax advantages and considerations when taking a loan against your mutual fund investments compared to selling your funds outright.",
      date: "July 3, 2023",
      author: "Priya Patel",
      category: "Taxation",
      imageUrl: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      content: "When faced with a need for funds, many investors consider selling their mutual fund holdings, which can trigger capital gains taxes. However, taking a loan against mutual funds presents a tax-efficient alternative that deserves careful consideration. This comprehensive guide delves into the tax implications of both approaches, highlighting how loans against mutual funds can help investors avoid immediate tax liabilities while maintaining their investment strategy. We'll break down the concepts of short-term and long-term capital gains tax as they relate to mutual fund redemptions, and contrast this with the tax-neutral nature of loans against these assets."
    },
    {
      id: 3,
      title: "Best Mutual Funds to Pledge for Loans in 2023",
      excerpt: "An analysis of which mutual fund categories offer the best loan-to-value ratios and why some funds are more suitable as collateral than others.",
      date: "July 28, 2023",
      author: "Vikram Singh",
      category: "Strategy",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      content: "Not all mutual funds are created equal when it comes to using them as collateral for loans. Lenders evaluate various factors like fund type, volatility, liquidity, and historical performance when determining loan-to-value (LTV) ratios. This detailed analysis examines the mutual fund categories that consistently receive the most favorable LTV ratios in 2023, with particular attention to large-cap equity funds, government debt funds, and balanced funds. We also explore why certain sector-specific or thematic funds might receive lower valuations despite potentially higher returns, and provide strategic recommendations for investors looking to optimize their portfolios for both growth and potential borrowing capacity."
    },
    {
      id: 4,
      title: "Navigating Market Volatility: Using Mutual Fund Loans as a Safety Net",
      excerpt: "How to use loans against mutual funds as a strategic tool during market downturns instead of selling investments at unfavorable prices.",
      date: "August 15, 2023",
      author: "Anjali Kumar",
      category: "Market Analysis",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      content: "Market downturns often present investors with a challenging dilemma: needing funds when selling investments would mean locking in losses. This article explores how loans against mutual funds can serve as a strategic financial safety net during volatile market conditions. By pledging mutual fund units as collateral rather than selling them, investors can access necessary liquidity while maintaining their market position and avoiding the permanent crystallization of losses. We examine real-world case studies from recent market corrections, practical strategies for determining optimal loan amounts, and important considerations regarding margin calls in extended bear markets."
    },
    {
      id: 5,
      title: "Emergency Funding: Why Mutual Fund Loans Beat Personal Loans",
      excerpt: "Comparing the benefits of taking a loan against mutual funds versus applying for a personal loan during financial emergencies.",
      date: "September 2, 2023",
      author: "Arjun Mehta",
      category: "Personal Finance",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      content: "When financial emergencies strike, the speed and cost of accessing funds become critical factors. This comparative analysis examines why loans against mutual funds often represent a superior option to personal loans for emergency funding needs. We break down the key differences in interest rates (typically 8.5-12% for mutual fund loans versus 14-24% for personal loans), processing timelines, documentation requirements, and repayment flexibility. The article also addresses how credit scores are affected by each option and provides a decision framework to help readers determine which approach aligns best with their specific financial situation and emergency funding requirements."
    },
    {
      id: 6,
      title: "The Digital Revolution in Mutual Fund Financing",
      excerpt: "How fintech innovation is making loans against mutual funds more accessible, faster, and more user-friendly for the average investor.",
      date: "September 21, 2023",
      author: "Neha Gupta",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      content: "The landscape of mutual fund financing is being transformed by technological innovation, with fintech platforms revolutionizing how investors can leverage their mutual fund holdings. This in-depth exploration examines how digital solutions have streamlined the previously cumbersome process of obtaining loans against mutual funds. From near-instant verification of fund holdings through API integrations with depositories, to paperless documentation and digital signatures, to algorithm-based loan approval systems that can disburse funds within hours instead of days – we investigate the technological advances making this financial option increasingly accessible to retail investors. The article also looks ahead to emerging technologies like blockchain and AI that promise to further enhance security, efficiency, and personalization in mutual fund financing."
    },
    {
      id: 7,
      title: "Building a Diversified Mutual Fund Portfolio for Optimum Loan Value",
      excerpt: "Strategic advice on how to structure your mutual fund investments to maximize both returns and potential loan value.",
      date: "October 10, 2023",
      author: "Sanjay Verma",
      category: "Portfolio Management",
      imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      content: "Savvy investors are increasingly considering the dual objectives of investment returns and potential loan collateral value when structuring their mutual fund portfolios. This strategic guide provides a framework for building a diversified mutual fund portfolio that excels on both fronts. We explore the optimal balance between high-growth funds that maximize returns and stable, liquid funds that lenders prefer as collateral. The article outlines specific allocation strategies across large-cap, mid-cap, and debt funds, with attention to sectoral diversification and liquidity considerations. We also address how investment horizon affects this balance and provide practical rebalancing guidelines to maintain portfolio health while preserving borrowing capacity."
    },
    {
      id: 8,
      title: "Mutual Fund Loans for Business Expansion: A Case Study",
      excerpt: "Real-world examples of how entrepreneurs have used loans against mutual funds to fund business growth without diluting equity.",
      date: "November 5, 2023",
      author: "Kiran Shah",
      category: "Entrepreneurship",
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      content: "Entrepreneurs seeking growth capital often face difficult choices between diluting equity, taking on high-interest business loans, or depleting personal investments. This case study analysis examines how forward-thinking business owners have leveraged loans against mutual funds as an innovative financing strategy. Through detailed real-world examples across various sectors, we illustrate how this approach has enabled entrepreneurs to maintain full ownership of their businesses while accessing capital at favorable rates. The article features the journey of three Indian entrepreneurs who utilized this strategy for inventory expansion, equipment purchase, and hiring respectively, with particular attention to how they structured the loans, managed repayments, and ultimately preserved their investment growth while scaling their businesses."
    },
    {
      id: 9,
      title: "The Future of Mutual Fund Financing in India",
      excerpt: "Experts predict how regulatory changes and market evolution will shape the landscape of loans against mutual funds in the coming years.",
      date: "November 29, 2023",
      author: "Ravi Kapoor",
      category: "Market Trends",
      imageUrl: "https://images.unsplash.com/photo-1596470612101-8486a192678c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      content: "The regulatory environment and market dynamics surrounding loans against mutual funds in India continue to evolve rapidly. This forward-looking analysis brings together insights from leading financial experts, regulatory specialists, and industry insiders to forecast how this financial product will transform in the coming years. We examine pending SEBI regulations that may affect lien marking processes, potential RBI guidelines on lender requirements, and upcoming tax policy considerations. The article also explores how increasing retail investor participation in mutual funds is expanding the potential market for these loans, and how competitive pressures are driving innovation in product features, interest rates, and customer experience. Industry consolidation trends and the entry of traditional banks into this space, previously dominated by NBFCs and fintech companies, are also assessed for their likely impact on borrowers."
    },
    {
      id: 10,
      title: "Common Mistakes to Avoid When Taking a Loan Against Mutual Funds",
      excerpt: "Learn from the errors of others with this comprehensive guide to pitfalls and how to navigate the mutual fund loan process successfully.",
      date: "December 12, 2023",
      author: "Deepa Reddy",
      category: "Risk Management",
      imageUrl: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      content: "While loans against mutual funds offer numerous advantages, borrowers can encounter several pitfalls without proper understanding and preparation. This comprehensive guide identifies the most common mistakes made during the process and provides practical strategies to avoid them. We address critical errors like pledging the wrong types of funds, borrowing too high a percentage of portfolio value, misunderstanding margin call mechanisms, ignoring the fine print on interest calculation methods, and failing to plan for repayment. Each section includes real examples of how these mistakes have affected borrowers, along with expert advice on best practices. The article concludes with a detailed pre-borrowing checklist to ensure readers can confidently navigate the process while maximizing benefits and minimizing risks."
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
  
  // State for blog article dialog
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isBlogDialogOpen, setIsBlogDialogOpen] = useState(false);

  // Function to open article dialog
  const openArticle = (testimonial) => {
    setSelectedArticle(testimonial);
    setIsDialogOpen(true);
  };
  
  // Function to open blog article dialog
  const openBlogArticle = (blog) => {
    setSelectedBlog(blog);
    setIsBlogDialogOpen(true);
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
          
          {/* Featured Blog Posts Section - Moved from Index page */}
          <section id="blogs" className="py-8 md:py-12 bg-fluidpe-light-gray rounded-xl mb-16">
            <div className="container mx-auto px-4">
              <AnimatedElement animation="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">
                  Financial Insights & Resources
                </h2>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
                  Stay informed with our latest articles on mutual funds, investments, and financial planning
                </p>
              </AnimatedElement>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fullBlogPosts.slice(0, 6).map((post, index) => (
                  <div key={post.id} onClick={() => openBlogArticle(post)} className="cursor-pointer">
                    <BlogCard 
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      author={post.author}
                      category={post.category}
                      imageUrl={post.imageUrl}
                      delay={index * 100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          
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

      {/* Dialog for displaying the full testimonial */}
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
      
      {/* Dialog for displaying the full blog article */}
      <Dialog open={isBlogDialogOpen} onOpenChange={setIsBlogDialogOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedBlog && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl text-fluidpe-teal">{selectedBlog.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-2 text-gray-500 text-sm mt-2">
                  <span>By {selectedBlog.author}</span>
                  <span>•</span>
                  <span>{selectedBlog.date}</span>
                  <span>•</span>
                  <span className="bg-fluidpe-light-teal/40 text-fluidpe-teal px-2 py-0.5 rounded-full text-xs">{selectedBlog.category}</span>
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <img
                  src={selectedBlog.imageUrl}
                  alt={selectedBlog.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-gray-700 mb-4 font-medium">{selectedBlog.excerpt}</p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedBlog.content}
                </p>
                <div className="mt-8 pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-fluidpe-light-teal flex items-center justify-center text-fluidpe-teal font-bold">
                        {selectedBlog.author.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-fluidpe-teal font-medium">{selectedBlog.author}</p>
                      <p className="text-gray-500 text-sm">Financial Expert</p>
                    </div>
                  </div>
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
