import React, { useState, useEffect } from 'react';
import { LineChart as LineChartIcon, PieChart as PieChartIcon, BarChart as BarChartIcon, Wallet, Clock, Shield, Award, TrendingUp, Percent, CreditCard, Briefcase, ArrowRight, CheckCircle, Check, Upload, FileText, Send, Star, TrendingDown, AlertTriangle, Lightbulb, Zap, Lock, FileCheck, Settings, Users, RefreshCw } from 'lucide-react';
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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
  const [hoverEffect, setHoverEffect] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const testimonials = [{
    quote: "I needed funds for my daughter's education but didn't want to sell my long-term mutual fund investments. Fluidpe offered me a loan at 9% interest rate compared to the 16% that my bank was offering for a personal loan. The process was completely digital and I received the funds within 24 hours!",
    author: "Rahul Mehta",
    designation: "IT Professional, Bengaluru",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  }, {
    quote: "As a business owner, I often need short-term capital but selling my mutual funds would have resulted in tax implications. Fluidpe's loan against my mutual fund portfolio was the perfect solution - quick, affordable, and I still own my investments.",
    author: "Priya Sharma",
    designation: "Entrepreneur, Mumbai",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  }, {
    quote: "The seamless digital process at Fluidpe is impressive. I completed everything from application to disbursement without visiting any office. Their interest rates are among the best in the market, and their customer service is exceptional.",
    author: "Vijay Kapoor",
    designation: "Senior Manager, Delhi",
    avatarUrl: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 4
  }, {
    quote: "I was skeptical about pledging my mutual funds at first, but Fluidpe's transparent terms and professional approach put me at ease. The best part is that I still benefit from the growth in my mutual fund portfolio while having access to funds when I needed them.",
    author: "Anita Desai",
    designation: "Doctor, Chennai",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  }, {
    quote: "The flexibility of repayment options with Fluidpe is what stood out for me. I could structure my loan in a way that aligned with my cash flow, making it much easier to manage compared to traditional loans.",
    author: "Suresh Kumar",
    designation: "Freelance Consultant, Hyderabad",
    avatarUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5
  }, {
    quote: "Taking a loan against my mutual funds through Fluidpe was a game-changer for my financial planning. Not only did I get a much lower interest rate, but I also didn't miss out on market gains during the loan period.",
    author: "Maya Patel",
    designation: "Finance Manager, Pune",
    avatarUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 5
  }];
  const blogPosts = [{
    id: 1,
    title: "How Mutual Fund Loans Are Transforming India's Financial Landscape",
    excerpt: "Discover how loans against mutual funds are providing a new level of financial flexibility to Indian investors and how it compares to traditional lending options.",
    date: "June 15, 2023",
    author: "Rahul Sharma",
    category: "Investment",
    imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }, {
    id: 2,
    title: "Understanding the Tax Implications of Loans Against Mutual Funds",
    excerpt: "Learn about the tax advantages and considerations when taking a loan against your mutual fund investments compared to selling your funds outright.",
    date: "July 3, 2023",
    author: "Priya Patel",
    category: "Taxation",
    imageUrl: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }, {
    id: 3,
    title: "Best Mutual Funds to Pledge for Loans in 2023",
    excerpt: "An analysis of which mutual fund categories offer the best loan-to-value ratios and why some funds are more suitable as collateral than others.",
    date: "July 28, 2023",
    author: "Vikram Singh",
    category: "Strategy",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }, {
    id: 4,
    title: "Navigating Market Volatility: Using Mutual Fund Loans as a Safety Net",
    excerpt: "How to use loans against mutual funds as a strategic tool during market downturns instead of selling investments at unfavorable prices.",
    date: "August 15, 2023",
    author: "Anjali Kumar",
    category: "Market Analysis",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }, {
    id: 5,
    title: "Emergency Funding: Why Mutual Fund Loans Beat Personal Loans",
    excerpt: "Comparing the benefits of taking a loan against mutual funds versus applying for a personal loan during financial emergencies.",
    date: "September 2, 2023",
    author: "Arjun Mehta",
    category: "Personal Finance",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }, {
    id: 6,
    title: "The Digital Revolution in Mutual Fund Financing",
    excerpt: "How fintech innovation is making loans against mutual funds more accessible, faster, and more user-friendly for the average investor.",
    date: "September 21, 2023",
    author: "Neha Gupta",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }, {
    id: 7,
    title: "Building a Diversified Mutual Fund Portfolio for Optimum Loan Value",
    excerpt: "Strategic advice on how to structure your mutual fund investments to maximize both returns and potential loan value.",
    date: "October 10, 2023",
    author: "Sanjay Verma",
    category: "Portfolio Management",
    imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }, {
    id: 8,
    title: "Mutual Fund Loans for Business Expansion: A Case Study",
    excerpt: "Real-world examples of how entrepreneurs have used loans against mutual funds to fund business growth without diluting equity.",
    date: "November 5, 2023",
    author: "Kiran Shah",
    category: "Entrepreneurship",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }, {
    id: 9,
    title: "The Future of Mutual Fund Financing in India",
    excerpt: "Experts predict how regulatory changes and market evolution will shape the landscape of loans against mutual funds in the coming years.",
    date: "November 29, 2023",
    author: "Ravi Kapoor",
    category: "Market Trends",
    imageUrl: "https://images.unsplash.com/photo-1596470612101-8486a192678c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }, {
    id: 10,
    title: "Common Mistakes to Avoid When Taking a Loan Against Mutual Funds",
    excerpt: "Learn from the errors of others with this comprehensive guide to pitfalls and how to navigate the mutual fund loan process successfully.",
    date: "December 12, 2023",
    author: "Deepa Reddy",
    category: "Risk Management",
    imageUrl: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
  }];
  const faqItems = [{
    question: "What is Fluidpe?",
    answer: "Fluidpe is a digital financial platform that enables investors to unlock the power of their mutual fund investments by providing instant loans against mutual funds portfolio. We offer a streamlined, 100% digital experience with no need to sell your investments, ensuring you continue to benefit from market growth while accessing liquidity."
  }, {
    question: "How does a loan against mutual funds work?",
    answer: "When you take a loan against mutual funds, you pledge your mutual fund units as collateral. Your units are marked with a lien in favor of Fluidpe, but you retain ownership. You can borrow up to 80% of the value of your eligible mutual funds. Interest rates start from just 8.5% per annum. You continue to enjoy all benefits from your mutual funds, including any appreciation or dividends."
  }, {
    question: "What are the benefits of taking a loan against mutual funds with Fluidpe?",
    answer: "Benefits include: Lower interest rates (starting at 8.5%) compared to personal loans and credit cards, no need to sell your investments, retain all benefits including market appreciation and dividends, 100% digital process with quick approval and disbursement, flexible repayment options, and no prepayment penalties."
  }, {
    question: "What mutual funds can I pledge for a loan?",
    answer: "You can pledge equity funds, debt funds, balanced/hybrid funds, and ETFs for a loan with Fluidpe. The exact list of eligible funds may vary based on current market conditions and our risk assessment policies. Debt funds and large-cap equity funds generally have higher loan-to-value ratios compared to mid or small-cap funds."
  }, {
    question: "How long does it take to get a loan disbursed?",
    answer: "With Fluidpe's fully digital process, you can get your loan disbursed within 24 hours of completing the application and documentation requirements. The process involves online verification of your mutual fund holdings, digital signing of loan agreements, and direct disbursement to your bank account."
  }, {
    question: "Is there a minimum or maximum loan amount?",
    answer: "Yes, at Fluidpe, the minimum loan amount is ₹1 lakh and the maximum can go up to ₹5 crores, depending on the value and type of mutual funds in your portfolio."
  }, {
    question: "What happens if the value of my pledged mutual funds falls?",
    answer: "If the value of your pledged mutual funds falls below a certain threshold (typically 120-130% of the loan amount), you'll receive a margin call asking you to either pledge additional funds or partially repay the loan to maintain the required margin. Our team will guide you through the process if this occurs."
  }, {
    question: "Can I continue to earn returns on pledged mutual funds?",
    answer: "Yes, even when your mutual funds are pledged, you continue to receive all dividends, interest, and other benefits from your pledged mutual funds. The funds remain in your name, and only a lien is marked in favor of Fluidpe. Market appreciation in your fund value is also to your benefit."
  }, {
    question: "What are the repayment options available?",
    answer: "Fluidpe offers multiple repayment options including interest-only payments with bullet repayment of principal at the end of tenure, equated monthly installments (EMI), and flexible repayment schedules based on your cash flow. You can also prepay the loan anytime without any penalties."
  }, {
    question: "What documents are required to apply for a loan against mutual funds?",
    answer: "You'll need basic KYC documents (PAN card, Aadhaar card, address proof), bank account details for disbursement, and details of the mutual funds you wish to pledge. The entire documentation process is digital, and you can upload all required documents through our secure platform."
  }];
  return <div className="overflow-x-hidden font-sans">
      <Navbar />
      
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 bg-hero-pattern relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute right-[-10%] top-[10%] w-72 h-72 rounded-full bg-fluidpe-light-teal blur-3xl opacity-60 animate-float"></div>
          <div className="absolute left-[-5%] bottom-[5%] w-80 h-80 rounded-full bg-fluidpe-light-gold blur-3xl opacity-40 animate-float" style={{
          animationDelay: '2s'
        }}></div>
          
          <div className={`absolute left-[20%] top-[25%] w-32 h-32 rounded-full bg-blue-200/20 blur-xl opacity-30 transition-all duration-1000 ${hoverEffect ? 'scale-150' : 'scale-100'}`}></div>
          <div className={`absolute right-[25%] bottom-[20%] w-40 h-40 rounded-full bg-green-200/20 blur-xl opacity-30 transition-all duration-1000 delay-300 ${hoverEffect ? 'scale-125 translate-x-10' : 'scale-100'}`}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 transition-all duration-700" onMouseEnter={() => setHoverEffect(true)} onMouseLeave={() => setHoverEffect(false)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <AnimatedElement>
                <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-fluidpe-light-teal to-fluidpe-medium-teal/30 text-fluidpe-teal text-sm font-medium mb-4 hover:shadow-lg hover:from-fluidpe-teal/20 hover:to-fluidpe-medium-teal/50 transition-all duration-300">
                  <span className="inline-flex items-center">
                    <Zap className="h-3.5 w-3.5 mr-1 animate-pulse" />
                    Financial Freedom At Your Fingertips
                  </span>
                </span>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">
                  Unlock the Power of Your Mutual Funds
                </h1>
              </AnimatedElement>
              
              <AnimatedElement delay={400}>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg relative">
                  Get instant loans against your mutual fund investments without selling them. Enjoy competitive interest rates starting at{" "}
                  <span className="relative font-semibold text-fluidpe-teal inline-block group">
                    8.5%
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-fluidpe-teal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </span>{" "}
                  with minimal documentation.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={600}>
                <div className="flex flex-wrap gap-4">
                  <Button className="relative overflow-hidden bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none group" size="lg">
                    <span className="relative z-10 flex items-center">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-fluidpe-medium-teal to-fluidpe-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                  <Button className="bg-white text-fluidpe-teal px-6 py-3 rounded-lg font-medium border border-fluidpe-teal/30 transition-all duration-300 hover:border-fluidpe-teal hover:bg-fluidpe-light-teal shadow-sm hover:shadow-md hover:-translate-y-1 group" size="lg">
                    <span className="flex items-center">
                      Learn More
                      <div className={`ml-2 h-5 w-5 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${hoverEffect ? "bg-fluidpe-teal" : "bg-transparent"}`}>
                        <ArrowRight className={`h-3 w-3 ${hoverEffect ? "text-white" : "text-fluidpe-teal"} transition-all duration-300`} />
                      </div>
                    </span>
                  </Button>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={800}>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center backdrop-blur-sm bg-white/30 rounded-lg p-3 border border-white/50 shadow-sm transition-all duration-300 hover:bg-white/50 hover:shadow-md group cursor-pointer">
                    <p className="text-2xl md:text-3xl font-bold text-fluidpe-teal group-hover:scale-110 transition-transform duration-300">₹2.5Cr+</p>
                    <p className="text-sm text-gray-600 group-hover:text-fluidpe-teal/70 transition-colors duration-300">Loans Disbursed</p>
                  </div>
                  <div className="text-center backdrop-blur-sm bg-white/30 rounded-lg p-3 border border-white/50 shadow-sm transition-all duration-300 hover:bg-white/50 hover:shadow-md group cursor-pointer">
                    <p className="text-2xl md:text-3xl font-bold text-fluidpe-teal group-hover:scale-110 transition-transform duration-300">500+</p>
                    <p className="text-sm text-gray-600 group-hover:text-fluidpe-teal/70 transition-colors duration-300">Happy Customers</p>
                  </div>
                  <div className="text-center backdrop-blur-sm bg-white/30 rounded-lg p-3 border border-white/50 shadow-sm transition-all duration-300 hover:bg-white/50 hover:shadow-md group cursor-pointer">
                    <p className="text-2xl md:text-3xl font-bold text-fluidpe-teal group-hover:scale-110 transition-transform duration-300">8.5%</p>
                    <p className="text-sm text-gray-600 group-hover:text-fluidpe-teal/70 transition-colors duration-300">Interest Rate</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            <AnimatedElement delay={300} className="relative">
              <div className={`relative z-10 transition-all duration-700 transform ${hoverEffect ? "scale-105" : "scale-100"}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <div className="absolute w-full h-full bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal opacity-90 transition-opacity duration-500 group-hover:opacity-75"></div>
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" alt="Trading Dashboard" className="w-full h-auto mix-blend-overlay transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-fluidpe-light-gold transition-colors duration-300">Loan Against Mutual Funds</h3>
                      <p className="mb-4">Unlock liquidity from your portfolio</p>
                      <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 group-hover:bg-white/30 hover:shadow-lg transform group-hover:-translate-y-1">
                        <p className="text-white/90 text-sm mb-1">Loan Amount</p>
                        <p className="text-3xl font-bold">₹25,00,000</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-float transition-all duration-300 hover:shadow-xl hover:bg-fluidpe-light-teal/30" style={{
                animationDelay: '1s'
              }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-full p-2 transition-colors duration-300 group-hover:bg-green-200">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Portfolio Value</p>
                      <p className="font-semibold text-fluidpe-teal">₹1.2 Cr</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-float transition-all duration-300 hover:shadow-xl hover:bg-fluidpe-light-teal/30" style={{
                animationDelay: '1.5s'
              }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-full p-2 transition-colors duration-300 group-hover:bg-blue-200">
                      <Percent className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Interest Rate</p>
                      <p className="font-semibold text-fluidpe-teal">8.5% p.a</p>
                    </div>
                  </div>
                </div>
                
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${animationComplete ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-full p-6 shadow-xl animate-pulse">
                    <Zap className="h-10 w-10 text-fluidpe-teal" />
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
                <img src="https://www.camsonline.com/static/img/logo.png" alt="CAMS" className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </AnimatedElement>
            <AnimatedElement delay={100} animation="fade-up">
              <div className="flex items-center justify-center h-16">
                <img src="https://www.kfintech.com/wp-content/uploads/2020/08/logo-1.png" alt="KFINTECH" className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </AnimatedElement>
            <AnimatedElement delay={200} animation="fade-up">
              <div className="flex items-center justify-center h-16">
                <img src="https://nsdl.co.in/images/NSDL-logo.svg" alt="NSDL" className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-fluidpe-light-teal/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-[10%] top-[20%] w-[600px] h-[600px] rounded-full bg-fluidpe-light-teal/20 blur-3xl opacity-60 animate-float"></div>
          <div className="absolute -left-[5%] bottom-[10%] w-[500px] h-[500px] rounded-full bg-fluidpe-light-gold/20 blur-3xl opacity-50" style={{
          animationDelay: '1.5s'
        }}></div>
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
            <FeatureCard icon={Wallet} title="Competitive Interest Rates" description="Enjoy interest rates starting from just 8.5% p.a., significantly lower than personal loans and credit cards." delay={0} />
            
            <FeatureCard icon={Clock} title="Quick Disbursals" description="Get funds in your account within 24 hours after approval, with minimal documentation requirements." delay={100} animation="fade-down" />
            
            <FeatureCard icon={LineChartIcon} title="Retain Market Upside" description="Continue to benefit from potential market appreciation while accessing funds for your immediate needs." delay={200} animation="fade-up" />
            
            <FeatureCard icon={Shield} title="Flexible Repayment Options" description="Choose from multiple repayment plans that suit your cash flow, with no prepayment penalties." delay={300} animation="fade-right" />
            
            <FeatureCard icon={Award} title="Higher Loan Amounts" description="Access up to 80% of your mutual fund portfolio value, with loan amounts ranging from ₹1 Lakh to ₹5 Crores." delay={400} animation="fade-up" />
            
            <FeatureCard icon={Briefcase} title="Wide Range of Acceptable Funds" description="Pledge various mutual fund schemes including equity, debt, and hybrid funds to secure your loan with maximum flexibility." delay={500} animation="fade-left" />
          </div>
          
          <AnimatedElement animation="fade-up" delay={600} className="mt-16 text-center">
            <div className="inline-block bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-fluidpe-light-teal/30">
              <div className="flex items-center justify-center gap-2 text
