import React, { useEffect, useState } from 'react';
import { 
  LineChart as LineChartIcon, PieChart as PieChartIcon, BarChart as BarChartIcon, Wallet, Clock, Shield, Award, 
  TrendingUp, Percent, CreditCard, Briefcase, ArrowRight, CheckCircle, Check, Upload, FileText, Send
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

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(500000); // ₹5 Lakh default
  const [loanDuration, setLoanDuration] = useState(24); // 24 months
  const [interestRate, setInterestRate] = useState(8.99); // 8.99% default
  
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

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
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
                  Unlock the Power of Your Securities
                </h1>
              </AnimatedElement>
              
              <AnimatedElement delay={400}>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                  Get instant loans against your investments without selling your securities. Enjoy competitive interest rates with minimal documentation.
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
                    <p className="text-2xl md:text-3xl font-bold text-fluidpe-teal">8.99%</p>
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
                      <h3 className="text-2xl font-bold mb-2">Loan Against Securities</h3>
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
                      <p className="font-semibold text-fluidpe-teal">8.99% p.a</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-10 bg-fluidpe-light-gray">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <p className="text-center text-gray-500 mb-8">Trusted by leading institutions</p>
          </AnimatedElement>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['HDFC Bank', 'ICICI Securities', 'SBI', 'Axis Bank', 'Kotak Securities'].map((partner, index) => (
              <AnimatedElement key={partner} delay={index * 100} animation="fade-up">
                <div className="text-gray-400 font-bold text-xl hover:text-fluidpe-teal transition-colors duration-300">{partner}</div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">Why Choose Fluidpe</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Unlock the full potential of your investments with our innovative loan against securities solutions
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              icon={Wallet}
              title="Competitive Interest Rates"
              description="Enjoy interest rates starting from just 8.99% p.a., significantly lower than personal loans and credit cards."
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
              description="Access up to 80% of your portfolio value, with loan amounts ranging from ₹1 Lakh to ₹5 Crores."
              delay={400}
            />
            
            <FeatureCard 
              icon={Briefcase}
              title="Wide Range of Acceptable Securities"
              description="Pledge various securities including stocks, mutual funds, bonds, and ETFs to secure your loan."
              delay={500}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section - Redesigned based on voltmoney.in */}
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
              Four simple steps to unlock the value of your investments
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
              title="Select Securities"
              description="Choose the stocks, mutual funds, or bonds you wish to pledge as collateral."
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
      
      {/* Benefits Comparison Section - Visual Table instead of Chart */}
      <section id="benefits" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute right-[-5%] top-[10%] w-72 h-72 rounded-full bg-fluidpe-light-teal/30 blur-3xl"></div>
          <div className="absolute left-[-5%] bottom-[10%] w-80 h-80 rounded-full bg-fluidpe-light-gold/30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">
              Calculate Your Savings with Loan Against Securities
            </h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
              See how much you can save compared to traditional financing options
            </p>
          </AnimatedElement>
          
          <div className="mt-12 max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-fluidpe-light-teal/30">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-fluidpe-teal">Loan Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium text-gray-700">Loan Amount</label>
                      <span className="text-sm font-medium text-fluidpe-teal">₹{loanAmount.toLocaleString()}</span>
                    </div>
                    <Slider 
                      min={100000} 
                      max={5000000} 
                      step={100000} 
                      value={[loanAmount]} 
                      onValueChange={(value) => setLoanAmount(value[0])} 
                      className="cursor-pointer"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium text-gray-700">Duration (Months)</label>
                      <span className="text-sm font-medium text-fluidpe-teal">{loanDuration} months</span>
                    </div>
                    <Slider 
                      min={6} 
                      max={60} 
                      step={6} 
                      value={[loanDuration]} 
                      onValueChange={(value) => setLoanDuration(value[0])} 
                      className="cursor-pointer"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium text-gray-700">Interest Rate</label>
                      <span className="text-sm font-medium text-fluidpe-teal">{interestRate}%</span>
                    </div>
                    <Slider 
                      min={8.99} 
                      max={12.99} 
                      step={0.5} 
                      value={[interestRate]} 
                      onValueChange={(value) => setInterestRate(value[0])} 
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-fluidpe-light-teal/30 to-fluidpe-light-gold/30 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-fluidpe-teal">Your Loan Summary</h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-fluidpe-light-teal/30">
                      <span className="text-gray-600">Monthly EMI</span>
                      <span className="text-xl font-bold text-fluidpe-teal">₹{emi.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-2 border-b border-fluidpe-light-teal/30">
                      <span className="text-gray-600">Loan Amount</span>
                      <span className="font-medium">₹{loanAmount.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-2 border-b border-fluidpe-light-teal/30">
                      <span className="text-gray-600">Interest Rate</span>
                      <span className="font-medium">{interestRate}% p.a.</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tenure</span>
                      <span className="font-medium">{loanDuration} months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 border-t border-fluidpe-light-teal/30 pt-8">
              <h3 className="text-xl font-semibold mb-4 text-fluidpe-teal flex items-center">
                <CreditCard className="w-5 h-5 mr-2" /> Savings Comparison
              </h3>
              <p className="text-gray-600 mb-6">
                See how much you save with Fluidpe compared to other financing options
              </p>
              
              <div className="overflow-hidden rounded-xl border border-fluidpe-light-teal/30">
                <Table>
                  <TableHeader className="bg-gradient-to-r from-fluidpe-light-teal/40 to-fluidpe-light-gold/30">
                    <TableRow>
                      <TableHead className="text-fluidpe-teal font-semibold">Loan Type</TableHead>
                      <TableHead className="text-fluidpe-teal font-semibold">Interest Rate</TableHead>
                      <TableHead className="text-fluidpe-teal font-semibold">Total Interest</TableHead>
                      <TableHead className="text-fluidpe-teal font-semibold">Your Savings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-gradient-to-r from-fluidpe-light-teal/10 to-transparent">
                      <TableCell className="font-medium">Fluidpe Loan Against Securities</TableCell>
                      <TableCell>{interestRate}%</TableCell>
                      <TableCell>₹{Math.round(loanAmount * (interestRate/100) * (loanDuration/12)).toLocaleString()}</TableCell>
                      <TableCell className="font-semibold text-fluidpe-teal">-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Personal Loan</TableCell>
                      <TableCell>14%</TableCell>
                      <TableCell>₹{Math.round(loanAmount * (14/100) * (loanDuration/12)).toLocaleString()}</TableCell>
                      <TableCell className="font-semibold text-green-600">₹{savings.personalLoan.toLocaleString()}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Credit Card</TableCell>
                      <TableCell>36%</TableCell>
                      <TableCell>₹{Math.round(loanAmount * (36/100) * (loanDuration/12)).toLocaleString()}</TableCell>
                      <TableCell className="font-semibold text-green-600">₹{savings.creditCard.toLocaleString()}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatedElement delay={200} className="bg-gradient-to-br from-fluidpe-light-teal/20 to-white p-5 rounded-xl border border-fluidpe-light-teal/30">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal rounded-full p-3 mb-3">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-fluidpe-teal">Keep Growing Your Investments</h4>
                    <p className="text-sm text-gray-600">Continue to earn returns on your investments while accessing liquidity</p>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement delay={400} className="bg-gradient-to-br from-fluidpe-light-teal/20 to-white p-5 rounded-xl border border-fluidpe-light-teal/30">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal rounded-full p-3 mb-3">
                      <Percent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-fluidpe-teal">Lower Interest Rates</h4>
                    <p className="text-sm text-gray-600">Enjoy interest rates as low as 8.99%, saving you thousands in interest</p>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement delay={600} className="bg-gradient-to-br from-fluidpe-light-teal/20 to-white p-5 rounded-xl border border-fluidpe-light-teal/30">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-fluidpe-teal to-fluidpe-medium-teal rounded-full p-3 mb-3">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-fluidpe-teal">Quick Approval</h4>
                    <p className="text-sm text-gray-600">Get your loan approved and disbursed in as little as 24 hours</p>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
          
          <AnimatedElement delay={600} className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none group">
              Apply for Loan Against Securities <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </AnimatedElement>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-fluidpe-light-teal relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-[-10%] top-[-5%] w-96 h-96 rounded-full bg-white blur-3xl opacity-60"></div>
          <div className="absolute right-[-5%] bottom-[10%] w-80 h-80 rounded-full bg-fluidpe-light-gold blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement>
            <h2 className="section-title text-center">What Our Customers Say</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="section-subtitle text-center">
              Join thousands of satisfied customers who've experienced the Fluidpe advantage
            </p>
          </AnimatedElement>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Fluidpe provided me with quick funds for my business expansion without having to sell my long-term investments. The process was smooth and transparent."
              author="Rahul Sharma"
              designation="Business Owner, Delhi"
              delay={0}
            />
            
            <TestimonialCard 
              quote="I was surprised by how quickly I received the funds. The interest rate was much lower than other options, and I didn't have to liquidate my portfolio during a market dip."
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
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cta-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fluidpe-teal">
                Ready to Unlock the Value of Your Portfolio?
              </h2>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <p className="text-lg text-gray-600 mb-8">
                Apply now to get a personalized quote and access funds without selling your investments. Our experts are ready to help you every step of the way.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={400}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="btn-primary" size="lg">
                  Apply Now
                </Button>
                <Button className="btn-secondary" size="lg">
                  Talk to an Advisor
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="section-subtitle text-center">
              Find answers to common questions about loans against securities
            </p>
          </AnimatedElement>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <FaqItem 
              question="What securities can I pledge for a loan?"
              answer="You can pledge a wide range of securities including listed stocks, mutual funds, ETFs, bonds, and government securities. The exact list of eligible securities may vary based on current market conditions and our risk assessment policies."
              delay={0}
            />
            
            <FaqItem 
              question="How much loan amount can I get against my securities?"
              answer="You can typically get up to 80% of the value of your pledged securities, depending on the type and quality of securities. Blue-chip stocks and high-rated bonds generally have higher loan-to-value ratios compared to mid or small-cap stocks."
              delay={100}
            />
            
            <FaqItem 
              question="What happens if the value of my pledged securities falls?"
              answer="If the value of your pledged securities falls below a certain threshold (typically 120-130% of the loan amount), you'll receive a margin call asking you to either pledge additional securities or partially repay the loan to maintain the required margin."
              delay={200}
            />
            
            <FaqItem 
              question="Can I continue to earn dividends and interest on pledged securities?"
              answer="Yes, you continue to receive all dividends, interest, and other benefits from your pledged securities. The securities remain in your name, and only a lien is marked in favor of Fluidpe."
              delay={300}
            />
            
            <FaqItem 
              question="What are the repayment options available?"
              answer="We offer multiple repayment options including interest-only payments with bullet repayment of principal, equated monthly installments (EMI), and flexible repayment schedules. You can also prepay the loan anytime without any penalties."
              delay={400}
            />
            
            <FaqItem 
              question="How long does it take to process my loan application?"
              answer="Once you submit your application and pledge your securities, the verification and approval process typically takes 24-48 hours. After approval, funds are disbursed to your bank account within the next business day."
              delay={500}
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;

