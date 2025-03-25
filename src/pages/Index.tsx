import React, { useEffect, useState } from 'react';
import { 
  LineChart as LineChartIcon, PieChart as PieChartIcon, BarChart as BarChartIcon, Wallet, Clock, Shield, Award, 
  TrendingUp, Percent, CreditCard, Briefcase, ArrowRight, CheckCircle, Check, Upload, FileText, Send, Star,
  TrendingDown, AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import FeatureCard from '@/components/FeatureCard';
import ProcessStep from '@/components/ProcessStep';
import TestimonialCard from '@/components/TestimonialCard';
import FaqItem from '@/components/FaqItem';
import ScrollToTop from '@/components/ScrollToTop';
import BlogCard from '@/components/BlogCard';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(500000); // ₹5 Lakh default
  const [loanDuration, setLoanDuration] = useState(24); // 24 months
  const [interestRate, setInterestRate] = useState(8.5); // 8.5% default
  
  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 1200; // Monthly interest rate
    const tenure = loanDuration; // in months
    
    const emi = principal * ratePerMonth * Math.pow(1 + ratePerMonth, tenure) / (Math.pow(1 + ratePerMonth, tenure) - 1);
    return Math.round(emi);
  };
  
  const emi = calculateEMI();
  
  const calculateSavings = () => {
    const personalLoanRate = 14; // 14% for personal loan
    const creditCardRate = 36; // 36% for credit card
    
    const ourInterest = loanAmount * (interestRate / 100) * (loanDuration / 12);
    const personalLoanInterest = loanAmount * (personalLoanRate / 100) * (loanDuration / 12);
    const creditCardInterest = loanAmount * (creditCardRate / 100) * (loanDuration / 12);
    
    return {
      personalLoan: Math.round(personalLoanInterest - ourInterest),
      creditCard: Math.round(creditCardInterest - ourInterest),
      personalLoanExtra: Math.round(personalLoanInterest),
      creditCardExtra: Math.round(creditCardInterest),
      ourInterest: Math.round(ourInterest)
    };
  };
  
  const savings = calculateSavings();

  const blogPosts = [
    {
      id: 1,
      title: "How Mutual Fund Loans Are Transforming India's Financial Landscape",
      excerpt: "Discover how loans against mutual funds are providing a new level of financial flexibility to Indian investors and how it compares to traditional lending options.",
      date: "June 15, 2023",
      author: "Rahul Sharma",
      category: "Investment",
      imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: 2,
      title: "Understanding the Tax Implications of Loans Against Mutual Funds",
      excerpt: "Learn about the tax advantages and considerations when taking a loan against your mutual fund investments compared to selling your funds outright.",
      date: "July 3, 2023",
      author: "Priya Patel",
      category: "Taxation",
      imageUrl: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: 3,
      title: "Best Mutual Funds to Pledge for Loans in 2023",
      excerpt: "An analysis of which mutual fund categories offer the best loan-to-value ratios and why some funds are more suitable as collateral than others.",
      date: "July 28, 2023",
      author: "Vikram Singh",
      category: "Strategy",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: 4,
      title: "Navigating Market Volatility: Using Mutual Fund Loans as a Safety Net",
      excerpt: "How to use loans against mutual funds as a strategic tool during market downturns instead of selling investments at unfavorable prices.",
      date: "August 15, 2023",
      author: "Anjali Kumar",
      category: "Market Analysis",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: 5,
      title: "Emergency Funding: Why Mutual Fund Loans Beat Personal Loans",
      excerpt: "Comparing the benefits of taking a loan against mutual funds versus applying for a personal loan during financial emergencies.",
      date: "September 2, 2023",
      author: "Arjun Mehta",
      category: "Personal Finance",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: 6,
      title: "The Digital Revolution in Mutual Fund Financing",
      excerpt: "How fintech innovation is making loans against mutual funds more accessible, faster, and more user-friendly for the average investor.",
      date: "September 21, 2023",
      author: "Neha Gupta",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: 7,
      title: "Building a Diversified Mutual Fund Portfolio for Optimum Loan Value",
      excerpt: "Strategic advice on how to structure your mutual fund investments to maximize both returns and potential loan value.",
      date: "October 10, 2023",
      author: "Sanjay Verma",
      category: "Portfolio Management",
      imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: 8,
      title: "Mutual Fund Loans for Business Expansion: A Case Study",
      excerpt: "Real-world examples of how entrepreneurs have used loans against mutual funds to fund business growth without diluting equity.",
      date: "November 5, 2023",
      author: "Kiran Shah",
      category: "Entrepreneurship",
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: 9,
      title: "The Future of Mutual Fund Financing in India",
      excerpt: "Experts predict how regulatory changes and market evolution will shape the landscape of loans against mutual funds in the coming years.",
      date: "November 29, 2023",
      author: "Ravi Kapoor",
      category: "Market Trends",
      imageUrl: "https://images.unsplash.com/photo-1596470612101-8486a192678c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: 10,
      title: "Common Mistakes to Avoid When Taking a Loan Against Mutual Funds",
      excerpt: "Learn from the errors of others with this comprehensive guide to pitfalls and how to navigate the mutual fund loan process successfully.",
      date: "December 12, 2023",
      author: "Deepa Reddy",
      category: "Risk Management",
      imageUrl: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    }
  ];

  return (
    <div className="overflow-x-hidden font-sans">
      <Navbar />
      
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 bg-hero-pattern relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute right-[-10%] top-[10%] w-72 h-72 rounded-full bg-fluidpe-light-teal blur-3xl opacity-60 animate-float"></div>
          <div className="absolute left-[-5%] bottom-[5%] w-80 h-80 rounded-full bg-fluidpe-light-gold blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <AnimatedElement>
                <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-fluidpe-light-teal to-fluidpe-medium-teal/30 text-fluidpe-teal text-sm font-medium mb-4">
                  Financial Freedom At Your Fingertips
                </span>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">
                  Unlock the Power of Your Mutual Funds
                </h1>
              </AnimatedElement>
              
              <AnimatedElement delay={400}>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                  Get instant loans against your mutual fund investments without selling them. Enjoy competitive interest rates starting at 8.5% with minimal documentation.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={600}>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none" size="lg">
                    Apply Now
                  </Button>
                  <Button className="bg-white text-fluidpe-teal px-6 py-3 rounded-lg font-medium border border-fluidpe-teal/30 transition-all duration-300 hover:border-fluidpe-teal hover:bg-fluidpe-light-teal shadow-sm hover:shadow-md hover:-translate-y-1" size="lg">
                    Learn More
                  </Button>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={800}>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center backdrop-blur-sm bg-white/30 rounded-lg p-3 border border-white/50 shadow-sm">
                    <p className="text-2xl md:text-3xl font-bold text-fluidpe-teal">₹2.5Cr+</p>
                    <p className="text-sm text-gray-600">Loans Disbursed</p>
                  </div>
                  <div className="text-center backdrop-blur-sm bg-white/30 rounded-lg p-3 border border-white/50 shadow-sm">
                    <p className="text-2xl md:text-3xl font-bold text-fluidpe-teal">500+</p>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
                  <div className="text-center backdrop-blur-sm bg-white/30 rounded-lg p-3 border border-white/50 shadow-sm">
                    <p className="text-2xl md:text-3xl font-bold text-fluidpe-teal">8.5%</p>
                    <p className="text-sm text-gray-600">Interest Rate</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            <AnimatedElement delay={300} className="relative">
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="absolute w-full h-full bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal opacity-90"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" 
                    alt="Trading Dashboard" 
                    className="w-full h-auto mix-blend-overlay"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-2xl font-bold mb-2">Loan Against Mutual Funds</h3>
                      <p className="mb-4">Unlock liquidity from your portfolio</p>
                      <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-white/90 text-sm mb-1">Loan Amount</p>
                        <p className="text-3xl font-bold">₹25,00,000</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-full p-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Portfolio Value</p>
                      <p className="font-semibold text-fluidpe-teal">₹1.2 Cr</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Percent className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Interest Rate</p>
                      <p className="font-semibold text-fluidpe-teal">8.5% p.a</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      <section className="py-10 bg-fluidpe-light-gray">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <p className="text-center text-gray-500 mb-8">Trusted by leading institutions</p>
          </AnimatedElement>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <AnimatedElement delay={0} animation="fade-up">
              <div className="flex items-center justify-center h-16">
                <img 
                  src="https://www.camsonline.com/static/img/logo.png" 
                  alt="CAMS" 
                  className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </AnimatedElement>
            <AnimatedElement delay={100} animation="fade-up">
              <div className="flex items-center justify-center h-16">
                <img 
                  src="https://www.kfintech.com/wp-content/uploads/2020/08/logo-1.png" 
                  alt="KFINTECH" 
                  className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </AnimatedElement>
            <AnimatedElement delay={200} animation="fade-up">
              <div className="flex items-center justify-center h-16">
                <img 
                  src="https://nsdl.co.in/images/NSDL-logo.svg" 
                  alt="NSDL" 
                  className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-fluidpe-light-teal/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-[10%] top-[20%] w-[600px] h-[600px] rounded-full bg-fluidpe-light-teal/20 blur-3xl opacity-60 animate-float"></div>
          <div className="absolute -left-[5%] bottom-[10%] w-[500px] h-[500px] rounded-full bg-fluidpe-light-gold/20 blur-3xl opacity-50" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement animation="fade-up">
            <div className="flex flex-col items-center justify-center mb-16">
              <div className="bg-gradient-to-r from-fluidpe-teal/20 to-fluidpe-medium-teal/20 p-2 px-4 rounded-full mb-4">
                <span className="text-fluidpe-teal text-sm font-semibold">Why our clients trust us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">
                Why Choose Fluidpe
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal rounded-full mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto text-center">
                Unlock the full potential of your mutual fund investments with our innovative loan solutions
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
            <FeatureCard 
              icon={Wallet}
              title="Competitive Interest Rates"
              description="Enjoy interest rates starting from just 8.5% p.a., significantly lower than personal loans and credit cards."
              delay={0}
              color="bg-gradient-to-br from-fluidpe-light-teal/70 to-fluidpe-light-teal/20"
            />
            
            <FeatureCard 
              icon={Clock}
              title="Quick Disbursals"
              description="Get funds in your account within 24 hours after approval, with minimal documentation requirements."
              delay={100}
              color="bg-gradient-to-br from-fluidpe-light-gold/70 to-fluidpe-light-gold/20"
              animation="fade-down"
            />
            
            <FeatureCard 
              icon={LineChartIcon}
              title="Retain Market Upside"
              description="Continue to benefit from potential market appreciation while accessing funds for your immediate needs."
              delay={200}
              color="bg-gradient-to-br from-[#E5DEFF]/70 to-[#E5DEFF]/20"
              animation="fade-up"
            />
            
            <FeatureCard 
              icon={Shield}
              title="Flexible Repayment Options"
              description="Choose from multiple repayment plans that suit your cash flow, with no prepayment penalties."
              delay={300}
              color="bg-gradient-to-br from-[#D3E4FD]/70 to-[#D3E4FD]/20"
              animation="fade-right"
            />
            
            <FeatureCard 
              icon={Award}
              title="Higher Loan Amounts"
              description="Access up to 80% of your mutual fund portfolio value, with loan amounts ranging from ₹1 Lakh to ₹5 Crores."
              delay={400}
              color="bg-gradient-to-br from-[#FFDEE2]/70 to-[#FFDEE2]/20"
              animation="fade-up"
            />
            
            <FeatureCard 
              icon={Briefcase}
              title="Wide Range of Acceptable Funds"
              description="Pledge various mutual fund schemes including equity, debt, and hybrid funds to secure your loan with maximum flexibility."
              delay={500}
              color="bg-gradient-to-br from-[#FDE1D3]/70 to-[#FDE1D3]/20"
              animation="fade-left"
            />
          </div>
          
          <AnimatedElement animation="fade-up" delay={600} className="mt-16 text-center">
            <div className="inline-block bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-fluidpe-light-teal/30">
              <div className="flex items-center justify-center gap-2 text-fluidpe-teal font-medium">
                <Check className="h-5 w-5" />
                <span>No hidden charges</span>
                <div className="w-1 h-1 rounded-full bg-fluidpe-teal/30"></div>
                <Check className="h-5 w-5" />
                <span>Transparent process</span>
                <div className="w-1 h-1 rounded-full bg-fluidpe-teal/30"></div>
                <Check className="h-5 w-5" />
                <span>Excellent support</span>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
      
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-fluidpe-light-teal/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute right-[-10%] bottom-[-5%] w-96 h-96 rounded-full bg-fluidpe-light-teal blur-3xl opacity-40"></div>
          <div className="absolute left-[-5%] top-[10%] w-80 h-80 rounded-full bg-fluidpe-light-gold blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">How It Works</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200} animation="fade-up">
            <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto text-center">
              Four simple steps to unlock the value of your mutual fund investments
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <ProcessStep 
              number={1}
              title="Upload Documents"
              description="Upload KYC, PAN and other documents for quick verification."
              delay={0}
              icon={<Upload className="w-10 h-10" />}
            />
            
            <ProcessStep 
              number={2}
              title="Select Mutual Funds"
              description="Choose the mutual funds you wish to pledge as collateral."
              delay={200}
              icon={<FileText className="w-10 h-10" />}
            />
            
            <ProcessStep 
              number={3}
              title="Digital Signing"
              description="Complete the digital signing process securely online - no paperwork."
              delay={400}
              icon={<Send className="w-10 h-10" />}
            />
            
            <ProcessStep 
              number={4}
              title="Instant Disbursal"
              description="Receive funds instantly in your bank account once approved."
              delay={600}
              icon={<Wallet className="w-10 h-10" />}
            />
          </div>
          
          <AnimatedElement delay={800} className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none group">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </AnimatedElement>
        </div>
      </section>
      
      <section id="benefits" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute right-[-5%] top-[10%] w-72 h-72 rounded-full bg-fluidpe-light-teal/30 blur-3xl"></div>
          <div className="absolute left-[-5%] bottom-[10%] w-80 h-80 rounded-full bg-fluidpe-light-gold/30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text-animate">
              Calculate Your Savings with Loan Against Mutual Funds
            </h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
              See how much you can save compared to traditional financing options
            </p>
          </AnimatedElement>
          
          <div className="mt-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatedElement delay={100} animation="fade-up" className="h-full">
                <div className="premium-card h-full overflow-hidden">
                  <div className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal px-6 py-4">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <Wallet className="w-5 h-5 mr-2" /> Loan Calculator
                    </h3>
                    <p className="text-sm text-white/80">Adjust the sliders to see your potential savings</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1 text-fluidpe-teal" /> Loan Amount
                          </label>
                          <span className="text-sm font-medium text-fluidpe-teal">₹{loanAmount.toLocaleString()}</span>
                        </div>
                        <Slider 
                          min={100000} 
                          max={5000000} 
                          step={100000} 
                          value={[loanAmount]} 
                          onValueChange={(value) => setLoanAmount(value[0])} 
                          className="calculator-slider cursor-pointer"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-fluidpe-teal" /> Duration (Months)
                          </label>
                          <span className="text-sm font-medium text-fluidpe-teal">{loanDuration} months</span>
                        </div>
                        <Slider 
                          min={6} 
                          max={60} 
                          step={6} 
                          value={[loanDuration]} 
                          onValueChange={(value) => setLoanDuration(value[0])} 
                          className="calculator-slider cursor-pointer"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center">
                            <Percent className="w-4 h-4 mr-1 text-fluidpe-teal" /> Interest Rate
                          </label>
                          <span className="text-sm font-medium text-fluidpe-teal">{interestRate}%</span>
                        </div>
                        <Slider 
                          min={8.5} 
                          max={12.99} 
                          step={0.5} 
                          value={[interestRate]} 
                          onValueChange={(value) => setInterestRate(value[0])} 
                          className="calculator-slider cursor-pointer"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-gradient-to-br from-fluidpe-light-teal/50 to-fluidpe-light-gold/30 p-6 rounded-xl shadow-inner">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold text-fluidpe-teal flex items-center">
                          <Star className="w-5 h-5 mr-2 text-fluidpe-medium-teal" /> Your Loan Summary
                        </h4>
                        <div className="bg-fluidpe-teal text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse-soft">
                          Best Rate!
                        </div>
                      </div>
                      
                      <div className="space-y-4 mt-4">
                        <div className="flex justify-between items-center pb-3 border-b border-fluidpe-light-teal/30">
                          <span className="text-gray-700 font-medium">Monthly EMI</span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent animate-float-slow">
                            ₹{calculateEMI().toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-2 border-b border-fluidpe-light-teal/30">
                          <span className="text-gray-700">Loan Amount</span>
                          <span className="font-medium text-fluidpe-teal">₹{loanAmount.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-2 border-b border-fluidpe-light-teal/30">
                          <span className="text-gray-700">Interest Rate</span>
                          <span className="font-medium text-fluidpe-teal">{interestRate}% p.a.</span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-2 border-b border-fluidpe-light-teal/30">
                          <span className="text-gray-700">Loan Duration</span>
                          <span className="font-medium text-fluidpe-teal">{loanDuration} months</span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-2">
                          <span className="text-gray-700">Total Interest Payable</span>
                          <span className="font-medium text-fluidpe-teal">₹{savings.ourInterest.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={300} animation="fade-up" className="h-full">
                <div className="h-full flex flex-col">
                  <div className="bg-gradient-to-r from-fluidpe-light-teal to-fluidpe-light-gold/50 px-6 py-4 rounded-t-xl">
                    <h3 className="text-xl font-semibold text-fluidpe-teal flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" /> Your Savings Comparison
                    </h3>
                    <p className="text-sm text-gray-600">See how much you save with us vs. other financing options</p>
                  </div>
                  
                  <div className="flex-grow bg-white p-6 rounded-b-xl shadow-md border border-gray-100">
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <div className="bg-green-100 rounded-full p-2 mr-3">
                            <TrendingDown className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">Fluidpe Loan</p>
                            <p className="text-sm text-gray-500">{interestRate}% interest rate</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-fluidpe-teal font-semibold">₹{savings.ourInterest.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">Total interest</p>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <div className="bg-yellow-100 rounded-full p-2 mr-3">
                            <AlertTriangle className="h-5 w-5 text-yellow-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">Personal Loan</p>
                            <p className="text-sm text-gray-500">14% interest rate</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-yellow-600 font-semibold">₹{savings.personalLoanExtra.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">Total interest</p>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <div className="bg-red-100 rounded-full p-2 mr-3">
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">Credit Card</p>
                            <p className="text-sm text-gray-500">36% interest rate</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-red-600 font-semibold">₹{savings.creditCardExtra.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">Total interest</p>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-fluidpe-light-teal/30 to-fluidpe-light-gold/30 p-4 rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-700">Your total savings vs Personal Loan</p>
                          <p className="text-xl font-bold text-fluidpe-teal">₹{savings.personalLoan.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-700">Your total savings vs Credit Card</p>
                          <p className="text-xl font-bold text-fluidpe-teal">₹{savings.creditCard.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none w-full">
                        Apply Now and Save
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
