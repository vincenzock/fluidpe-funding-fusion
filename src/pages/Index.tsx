import React, { useEffect, useState } from 'react';
import { 
  LineChart as LineChartIcon, PieChart as PieChartIcon, BarChart as BarChartIcon, Wallet, Clock, Shield, Award, 
  TrendingUp, Percent, CreditCard, Briefcase, ArrowRight, CheckCircle, Check, Upload, FileText, Send, Star
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
      creditCard: Math.round(creditCardInterest - ourInterest)
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
                    <p className="text-2xl md:text-3xl font-bold text-fluidpe-teal">₹500Cr+</p>
                    <p className="text-sm text-gray-600">Loans Disbursed</p>
                  </div>
                  <div className="text-center backdrop-blur-sm bg-white/30 rounded-lg p-3 border border-white/50 shadow-sm">
                    <p className="text-2xl md:text-3xl font-bold text-fluidpe-teal">10,000+</p>
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
      
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">Why Choose Fluidpe</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Unlock the full potential of your mutual fund investments with our innovative loan solutions
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              icon={Wallet}
              title="Competitive Interest Rates"
              description="Enjoy interest rates starting from just 8.5% p.a., significantly lower than personal loans and credit cards."
              delay={0}
            />
            
            <FeatureCard 
              icon={Clock}
              title="Quick Disbursals"
              description="Get funds in your account within 24 hours after approval, with minimal documentation requirements."
              delay={100}
            />
            
            <FeatureCard 
              icon={LineChartIcon}
              title="Retain Market Upside"
              description="Continue to benefit from potential market appreciation while accessing funds for your immediate needs."
              delay={200}
            />
            
            <FeatureCard 
              icon={Shield}
              title="Flexible Repayment Options"
              description="Choose from multiple repayment plans that suit your cash flow, with no prepayment penalties."
              delay={300}
            />
            
            <FeatureCard 
              icon={Award}
              title="Higher Loan Amounts"
              description="Access up to 80% of your mutual fund portfolio value, with loan amounts ranging from ₹1 Lakh to ₹5 Crores."
              delay={400}
            />
            
            <FeatureCard 
              icon={Briefcase}
              title="Wide Range of Acceptable Funds"
              description="Pledge various mutual fund schemes including equity, debt, hybrid, and ETFs to secure your loan."
              delay={500}
            />
          </div>
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
              <AnimatedElement delay={100} animation="fade-right" className="h-full">
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
                        <div className="bg-fluidpe-teal text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse-slow">
                          Best Rate!
                        </div>
                      </div>
                      
                      <div className="space-y-4 mt-4">
                        <div className="flex justify-between items-center pb-3 border-b border-fluidpe-light-teal/30">
                          <span className="text-gray-700 font-medium">Monthly EMI</span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent animate-float-slow">
                            ₹{emi.toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-2 border-b border-fluidpe-light-teal/30">
                          <span className="text-gray-700">Loan Amount</span>
                          <span className="font-medium text-fluidpe-teal">₹{loanAmount.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-2 border-b border-fluidpe-light-teal/30">
                          <span className="text-gray-700">Interest Rate</span>
                          <div className="flex items-center">
                            <span className="font-medium text-fluidpe-teal">{interestRate}% p.a.</span>
                            <div className="ml-2 bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
                              Lowest!
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Tenure</span>
                          <span className="font-medium text-fluidpe-teal">{loanDuration} months</span>
                        </div>
                        
                        <div className="mt-4 pt-2 border-t border-fluidpe-light-teal/30 text-sm text-center">
                          <p className="text-fluidpe-medium-teal font-medium">
                            No hidden charges • No prepayment penalty • Quick approval
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={300} animation="fade-left" className="h-full">
                <div className="premium-card h-full overflow-hidden">
                  <div className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal px-6 py-4">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" /> Savings Comparison
                    </h3>
                    <p className="text-sm text-white/80">See how much you save with Fluidpe compared to other options</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="overflow-hidden rounded-xl border border-fluidpe-light-teal/30 mb-6 shadow-md">
                      <Table>
                        <TableHeader className="bg-gradient-to-r from-fluidpe-light-teal/70 to-fluidpe-light-gold/50">
                          <TableRow>
                            <TableHead className="text-fluidpe-teal font-semibold">Loan Type</TableHead>
                            <TableHead className="text-fluidpe-teal font-semibold">Interest Rate</TableHead>
                            <TableHead className="text-fluidpe-teal font-semibold">Total Interest</TableHead>
                            <TableHead className="text-fluidpe-teal font-semibold">Your Savings</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="bg-gradient-to-r from-fluidpe-light-teal/30 to-transparent">
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-500 mr-1.5" />
                                <span>Fluidpe Loan Against Mutual Funds</span>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium text-fluidpe-teal">{interestRate}%</TableCell>
                            <TableCell>₹{Math.round(loanAmount * (interestRate/100) * (loanDuration/12)).toLocaleString()}</TableCell>
                            <TableCell className="font-semibold text-fluidpe-teal">-</TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-fluidpe-light-teal/10 transition-colors">
                            <TableCell className="font-medium">Personal Loan</TableCell>
                            <TableCell>14%</TableCell>
                            <TableCell>₹{Math.round(loanAmount * (14/100) * (loanDuration/12)).toLocaleString()}</TableCell>
                            <TableCell className="font-semibold text-green-600">
                              <AnimatedElement animation="fade-in" className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-1.5 text-green-500" />
                                ₹{savings.personalLoan.toLocaleString()}
                              </AnimatedElement>
                            </TableCell>
                          </TableRow>
                          <TableRow className="hover:bg-fluidpe-light-teal/10 transition-colors">
                            <TableCell className="font-medium">Credit Card</TableCell>
                            <TableCell>36%</TableCell>
                            <TableCell>₹{Math.round(loanAmount * (36/100) * (loanDuration/12)).toLocaleString()}</TableCell>
                            <TableCell className="font-semibold text-green-600">
                              <AnimatedElement animation="fade-in" className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-1.5 text-green-500" />
                                ₹{savings.creditCard.toLocaleString()}
                              </AnimatedElement>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="mt-6 mb-4">
                      <h4 className="text-lg font-semibold text-fluidpe-teal mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2" /> Highest Savings Potential
                      </h4>
                      <div className="savings-highlight">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-700 font-medium">By choosing Fluidpe instead of Credit Card financing:</p>
                            <p className="text-xl font-bold text-green-600 mt-2">
                              You save ₹{savings.creditCard.toLocaleString()}
                            </p>
                            <p className="text-xs text-green-600 mt-1">That's {Math.round((savings.creditCard/(loanAmount * (36/100) * (loanDuration/12)))*100)}% in interest savings!</p>
                          </div>
                          <div className="bg-white rounded-full p-3 shadow-md">
                            <Check className="h-8 w-8 text-green-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 gap-4">
                      <AnimatedElement delay={200} className="bg-gradient-to-br from-fluidpe-light-teal/30 to-white p-4 rounded-xl border border-fluidpe-light-teal/30 flex items-center shadow-md">
                        <div className="bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal rounded-full p-2 mr-4">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-md font-semibold text-fluidpe-teal">Keep Growing Your Investments</h4>
                          <p className="text-xs text-gray-600">Continue to earn returns on your mutual funds while accessing liquidity</p>
                        </div>
                      </AnimatedElement>
                      
                      <AnimatedElement delay={300} className="bg-gradient-to-br from-fluidpe-light-teal/30 to-white p-4 rounded-xl border border-fluidpe-light-teal/30 flex items-center shadow-md">
                        <div className="bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal rounded-full p-2 mr-4">
                          <Percent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-md font-semibold text-fluidpe-teal">Lower Interest Rates</h4>
                          <p className="text-xs text-gray-600">Enjoy interest rates as low as 8.5%, saving you thousands in interest</p>
                        </div>
                      </AnimatedElement>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            <AnimatedElement delay={600} className="mt-12 text-center">
              <Button className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none group">
                Apply for Loan Against Mutual Funds <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      <section id="blogs" className="py-16 md:py-24 bg-fluidpe-light-gray">
        <div className="container mx-auto px-4">
          <AnimatedElement>
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
            {blogPosts.slice(0, 6).map((post, index) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                category={post.category}
                imageUrl={post.imageUrl}
                delay={index * 100}
              />
            ))}
          </div>
          
          <AnimatedElement delay={400} className="mt-12 text-center">
            <Button className="bg-white text-fluidpe-teal px-6 py-3 rounded-lg font-medium border border-fluidpe-teal/30 transition-all duration-300 hover:border-fluidpe-teal hover:bg-fluidpe-light-teal hover:shadow-md group">
              View All Articles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </AnimatedElement>
        </div>
      </section>
      
      <section id="testimonials" className="py-16 md:py-24 bg-fluidpe-light-teal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-[-10%] top-[-5%] w-96 h-96 rounded-full bg-white blur-3xl opacity-60"></div>
          <div className="absolute right-[-5%] bottom-[10%] w-80 h-80 rounded-full bg-fluidpe-light-gold blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">What Our Customers Say</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Join thousands of satisfied customers who've experienced the Fluidpe advantage
            </p>
          </AnimatedElement>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Fluidpe provided me with quick funds for my business expansion without having to sell my mutual fund investments. The process was smooth and transparent."
              author="Rahul Sharma"
              designation="Business Owner, Delhi"
              delay={0}
            />
            
            <TestimonialCard 
              quote="I was surprised by how quickly I received the funds. The interest rate was much lower than other options, and I didn't have to liquidate my mutual funds during a market dip."
              author="Priya Patel"
              designation="IT Professional, Bangalore"
              delay={200}
            />
            
            <TestimonialCard 
              quote="The flexible repayment options suited my irregular income pattern perfectly. Their customer service team was extremely helpful throughout the process."
              author="Vikram Singh"
              designation="Freelance Consultant, Mumbai"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-cta-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fluidpe-teal">
                Ready to Unlock the Value of Your Mutual Fund Portfolio?
              </h2>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <p className="text-lg text-gray-600 mb-8">
                Apply now to get a personalized quote and access funds without selling your mutual fund investments. Our experts are ready to help you every step of the way.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={400}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none" size="lg">
                  Apply Now
                </Button>
                <Button className="bg-white text-fluidpe-teal px-6 py-3 rounded-lg font-medium border border-fluidpe-teal/30 transition-all duration-300 hover:border-fluidpe-teal hover:bg-fluidpe-light-teal shadow-sm hover:shadow-md hover:-translate-y-1" size="lg">
                  Talk to an Advisor
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">Frequently Asked Questions</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Find answers to common questions about loans against mutual funds
            </p>
          </AnimatedElement>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <FaqItem 
              question="What mutual funds can I pledge for a loan?"
              answer="You can pledge a wide range of mutual funds including equity funds, debt funds, hybrid funds, and ETFs. The exact list of eligible funds may vary based on current market conditions and our risk assessment policies."
              delay={0}
            />
            
            <FaqItem 
              question="How much loan amount can I get against my mutual funds?"
              answer="You can typically get up to 80% of the value of your pledged mutual funds, depending on the type and quality of funds. Debt funds and large-cap equity funds generally have higher loan-to-value ratios compared to mid or small-cap funds."
              delay={100}
            />
            
            <FaqItem 
              question="What happens if the value of my pledged mutual funds falls?"
              answer="If the value of your pledged mutual funds falls below a certain threshold (typically 120-130% of the loan amount), you'll receive a margin call asking you to either pledge additional funds or partially repay the loan to maintain the required margin."
              delay={200}
            />
            
            <FaqItem 
              question="Can I continue to earn returns on pledged mutual funds?"
              answer="Yes, you continue to receive all dividends, interest, and other benefits from your pledged mutual funds. The funds remain in your name, and only a lien is marked in favor of Fluidpe."
              delay={300}
            />
            
            <FaqItem 
              question="What are the repayment options available?"
              answer="We offer multiple repayment options including interest-only payments with bullet repayment of principal, equated monthly installments (EMI), and flexible repayment schedules. You can also prepay the loan anytime without any penalties."
              delay={400}
            />
            
            <FaqItem 
              question="How long does it take to process my loan application?"
              answer="Once you submit your application and pledge your mutual funds, the verification and approval process typically takes 24-48 hours. After approval, funds are disbursed to your bank account within the next business day."
              delay={500}
            />
          </div>
        </div>
      </section>
      
      <Footer />
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
