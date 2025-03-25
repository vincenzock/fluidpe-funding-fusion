
import React, { useEffect, useState } from 'react';
import { 
  LineChart as LineChartIcon, PieChart as PieChartIcon, BarChart as BarChartIcon, Wallet, Clock, Shield, Award, 
  TrendingUp, Percent, CreditCard, Briefcase, ArrowRight, CheckCircle, Check, Upload, FileText, Send, Star,
  TrendingDown, AlertTriangle, Sparkles, Smartphone, ChevronRight, BarChart4, PieChart, BarChart2
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

  const generateChartData = () => {
    const data = [];
    for (let i = 0; i < 12; i++) {
      data.push({
        month: i,
        value: 50 + Math.random() * 50 + (i * 5)
      });
    }
    return data;
  };

  const chartData1 = generateChartData();
  const chartData2 = generateChartData().map(item => ({ ...item, value: item.value * 0.8 }));
  const chartData3 = generateChartData().map(item => ({ ...item, value: item.value * 1.2 }));

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
              <div className="relative z-10 shadow-2xl rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-pattern-grid"></div>
                    <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute left-32 top-16 w-20 h-20 bg-white/20 rounded-full blur-md"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <BarChart4 className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Investment Dashboard</h3>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-white/10 rounded-full w-3 h-3"></div>
                        <div className="bg-white/20 rounded-full w-3 h-3"></div>
                        <div className="bg-white/30 rounded-full w-3 h-3"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="text-white/80 text-sm">Portfolio Value</p>
                          <div className="flex items-center">
                            <p className="text-2xl font-bold text-white">₹87,45,000</p>
                            <div className="ml-2 flex items-center bg-green-500/20 px-2 py-0.5 rounded text-green-300 text-xs">
                              <TrendingUp className="h-3 w-3 mr-1" /> <span>+12.3%</span>
                            </div>
                          </div>
                        </div>
                        <AnimatedElement animation="slide-right" infinite={true} duration={2000}>
                          <div className="flex items-end h-16 space-x-1">
                            {[35, 42, 38, 45, 40, 48, 52, 49, 55, 58, 62, 60].map((height, index) => (
                              <div 
                                key={index} 
                                className="w-1.5 bg-gradient-to-t from-white/40 to-white/80 rounded-t-sm" 
                                style={{ 
                                  height: `${height}%`,
                                  animation: `grow 2s ease-out forwards ${index * 0.1}s`
                                }}
                              ></div>
                            ))}
                          </div>
                        </AnimatedElement>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <p className="text-white/80 text-sm mb-1">Equity Funds</p>
                        <p className="text-xl font-bold text-white">₹52,47,000</p>
                        <div className="mt-2 relative h-24">
                          <AnimatedElement animation="fade-in" infinite={true} duration={3000}>
                            <div className="absolute inset-0">
                              <div className="w-full h-full flex items-end">
                                {chartData1.map((item, index) => (
                                  <div key={index} className="flex-1 flex items-end justify-center">
                                    <div 
                                      className="w-4/5 bg-gradient-to-t from-teal-400/40 to-teal-300/70 rounded-t-sm transition-all duration-1000"
                                      style={{ 
                                        height: `${item.value}%`,
                                        animation: `pulse-soft 3s infinite ${index * 0.2}s`
                                      }}
                                    ></div>
                                  </div>
                                ))}
                              </div>
                              <div className="absolute top-0 left-0 w-full h-full">
                                <svg width="100%" height="100%" className="absolute top-0 left-0">
                                  <path
                                    d={`M0,${100 - chartData1[0].value} ${chartData1.map((item, i) => `L${(i / (chartData1.length - 1)) * 100},${100 - item.value}`).join(' ')}`}
                                    fill="none"
                                    stroke="rgba(255,255,255,0.5)"
                                    strokeWidth="2"
                                    className="animate-pulse-soft"
                                  />
                                </svg>
                              </div>
                            </div>
                          </AnimatedElement>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <p className="text-white/80 text-sm mb-1">Debt Funds</p>
                        <p className="text-xl font-bold text-white">₹34,98,000</p>
                        <div className="mt-2 relative h-24">
                          <AnimatedElement animation="fade-in" infinite={true} duration={3000}>
                            <div className="h-full flex items-center justify-center">
                              <div className="w-full h-full relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="absolute w-28 h-28 rounded-full border-4 border-white/10"></div>
                                  <div className="absolute w-20 h-20 rounded-full border-4 border-white/5"></div>
                                  <div className="relative">
                                    <PieChart className="h-10 w-10 text-white/80" />
                                  </div>
                                </div>
                                <svg width="100%" height="100%" viewBox="0 0 100 100" className="rotate-animation">
                                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,255,255,0.2)" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="70" />
                                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="200" className="animate-pulse-soft" />
                                </svg>
                              </div>
                            </div>
                          </AnimatedElement>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-white/80 text-sm">Investment Growth</p>
                        <div className="flex items-center bg-white/10 rounded-full px-2 py-0.5 text-xs text-white/90">
                          <span>Last 12 Months</span>
                        </div>
                      </div>
                      <div className="relative h-32">
                        <AnimatedElement animation="fade-in" infinite={true} duration={4000}>
                          <div className="absolute bottom-0 left-0 w-full h-full flex">
                            <div className="relative w-full h-full">
                              <svg width="100%" height="100%" className="overflow-visible">
                                <defs>
                                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                  </linearGradient>
                                </defs>
                                <path
                                  d={`M0,${100 - chartData3[0].value} ${chartData3.map((item, i) => `L${(i / (chartData3.length - 1)) * 100},${100 - item.value}`).join(' ')} L100,100 L0,100 Z`}
                                  fill="url(#lineGradient)"
                                  opacity="0.2"
                                />
                                <path
                                  d={`M0,${100 - chartData3[0].value} ${chartData3.map((item, i) => `L${(i / (chartData3.length - 1)) * 100},${100 - item.value}`).join(' ')}`}
                                  fill="none"
                                  stroke="rgba(255,255,255,0.8)"
                                  strokeWidth="2"
                                  className="line-animation"
                                />
                                {chartData3.map((item, i) => (
                                  <circle 
                                    key={i}
                                    cx={`${(i / (chartData3.length - 1)) * 100}%`} 
                                    cy={`${100 - item.value}%`} 
                                    r="3"
                                    fill="white"
                                    className="animate-pulse-soft"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                  />
                                ))}
                              </svg>
                              <div className="absolute top-0 right-5 bg-gradient-to-r from-green-500/20 to-green-400/40 px-2 py-1 rounded-md text-white text-xs flex items-center">
                                <Sparkles className="h-3 w-3 mr-1 text-yellow-300" /> Growth +24.7%
                              </div>
                            </div>
                          </div>
                        </AnimatedElement>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="bg-green-500/20 rounded-full p-1.5">
                          <TrendingUp className="h-4 w-4 text-green-300" />
                        </div>
                        <div>
                          <p className="text-xs text-white/60">Current Value</p>
                          <p className="text-sm font-semibold text-white">₹87.45L</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="bg-blue-500/20 rounded-full p-1.5">
                          <Percent className="h-4 w-4 text-blue-300" />
                        </div>
                        <div>
                          <p className="text-xs text-white/60">Loan Eligibility</p>
                          <p className="text-sm font-semibold text-white">₹69.96L</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="bg-yellow-500/20 rounded-full p-1.5">
                          <Star className="h-4 w-4 text-yellow-300" />
                        </div>
                        <div>
                          <p className="text-xs text-white/60">Interest Rate</p>
                          <p className="text-sm font-semibold text-white">8.5% p.a.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <AnimatedElement animation="fade-up" delay={500} className="absolute -bottom-6 -right-6">
                  <div className="bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 rounded-full p-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Portfolio Value</p>
                        <p className="font-semibold text-fluidpe-teal">₹87.45L</p>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement animation="fade-down" delay={800} className="absolute -top-6 -left-6">
                  <div className="bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: '1.5s' }}>
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
                </AnimatedElement>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">
              How It Works
            </h2>
          </AnimatedElement>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
