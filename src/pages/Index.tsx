import React, { useEffect } from 'react';
import { 
  LineChart as LineChartIcon, PieChart as PieChartIcon, BarChart as BarChartIcon, Wallet, Clock, Shield, Award, 
  TrendingUp, Percent, CreditCard, Briefcase, ArrowRight, CheckCircle, LineChart as LineChartLucide
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import FeatureCard from '@/components/FeatureCard';
import ProcessStep from '@/components/ProcessStep';
import TestimonialCard from '@/components/TestimonialCard';
import FaqItem from '@/components/FaqItem';
import ScrollToTop from '@/components/ScrollToTop';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const Index = () => {
  const growthComparisonData = [
    { year: 'Year 1', securities: 115, personal: 100, credit: 92 },
    { year: 'Year 2', securities: 136, personal: 105, credit: 88 },
    { year: 'Year 3', securities: 162, personal: 110, credit: 85 },
    { year: 'Year 4', securities: 195, personal: 117, credit: 82 },
    { year: 'Year 5', securities: 238, personal: 123, credit: 80 },
  ];

  const returnsData = [
    { name: 'Investment Growth', value: 68 },
    { name: 'Interest Saved', value: 22 },
    { name: 'Tax Benefits', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

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
              icon={LineChart}
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
      
      {/* How It Works Section - Enhanced with modern animations */}
      <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-fluidpe-light-gray via-white to-fluidpe-light-teal/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-[-10%] bottom-[-5%] w-96 h-96 rounded-full bg-fluidpe-light-teal blur-3xl opacity-60"></div>
          <div className="absolute left-[-5%] top-[10%] w-80 h-80 rounded-full bg-fluidpe-light-gold blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">How It Works</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200} animation="fade-up">
            <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto text-center">
              Our simple 4-step process gets you quick access to funds without selling your investments
            </p>
          </AnimatedElement>
          
          <div className="relative mt-20">
            {/* Timeline connector */}
            <div className="absolute top-10 left-1/2 w-1 h-[calc(100%-5rem)] bg-gradient-to-b from-fluidpe-teal via-fluidpe-medium-teal to-fluidpe-light-teal rounded-full transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
                <ProcessStep 
                  number={1}
                  title="Apply Online"
                  description="Fill out our simple online application form with your personal and investment details. It takes less than 5 minutes."
                  delay={0}
                />
                
                <AnimatedElement delay={200} animation="zoom-in" className="hidden md:block">
                  <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-fluidpe-light-teal">
                    <div className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal px-5 py-3">
                      <h3 className="text-white font-semibold">Online Application</h3>
                    </div>
                    <div className="p-5">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-600">Personal Details</label>
                          <div className="h-10 w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-600">Investment Details</label>
                          <div className="h-10 w-full bg-gray-100 rounded-md"></div>
                        </div>
                        <div className="flex justify-end">
                          <div className="h-10 w-32 bg-fluidpe-teal rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative md:translate-y-12">
                <AnimatedElement delay={200} animation="zoom-in" className="hidden md:block order-1 md:order-none">
                  <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-fluidpe-light-teal">
                    <div className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal px-5 py-3">
                      <h3 className="text-white font-semibold">Securities Dashboard</h3>
                    </div>
                    <div className="p-5">
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Stock A</span>
                          <span className="text-fluidpe-teal font-semibold">₹120,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Mutual Fund B</span>
                          <span className="text-fluidpe-teal font-semibold">₹250,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">ETF C</span>
                          <span className="text-fluidpe-teal font-semibold">₹180,000</span>
                        </div>
                        <div className="h-1 bg-gray-200 rounded-full">
                          <div className="h-1 bg-fluidpe-teal rounded-full w-3/4"></div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Select All</span>
                          <span className="text-sm font-bold text-fluidpe-teal">₹550,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
                
                <ProcessStep 
                  number={2}
                  title="Pledge Securities"
                  description="Select the securities you wish to pledge as collateral. We accept a wide range of stocks, mutual funds, and bonds."
                  delay={200}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
                <ProcessStep 
                  number={3}
                  title="Verification & Approval"
                  description="Our team verifies your details and securities. Once approved, you'll receive your loan offer with customized terms."
                  delay={400}
                />
                
                <AnimatedElement delay={400} animation="zoom-in" className="hidden md:block">
                  <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-fluidpe-light-teal">
                    <div className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal px-5 py-3">
                      <h3 className="text-white font-semibold">Verification Process</h3>
                    </div>
                    <div className="p-5">
                      <div className="space-y-5">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500" />
                          <div>
                            <p className="font-medium">KYC Verification</p>
                            <p className="text-sm text-gray-500">Completed</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500" />
                          <div>
                            <p className="font-medium">Securities Validation</p>
                            <p className="text-sm text-gray-500">Completed</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-6 w-6 rounded-full border-2 border-fluidpe-teal border-dashed animate-spin"></div>
                          <div>
                            <p className="font-medium">Loan Terms Preparation</p>
                            <p className="text-sm text-gray-500">In Progress</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative md:translate-y-12">
                <AnimatedElement delay={600} animation="zoom-in" className="hidden md:block order-1 md:order-none">
                  <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-fluidpe-light-teal">
                    <div className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal px-5 py-3">
                      <h3 className="text-white font-semibold">Fund Disbursement</h3>
                    </div>
                    <div className="p-5">
                      <div className="text-center py-4">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                          <CheckCircle className="h-10 w-10 text-green-600" />
                        </div>
                        <h4 className="text-xl font-bold text-fluidpe-teal">₹25,00,000</h4>
                        <p className="text-gray-600 mt-1">Disbursed to your account</p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-sm text-gray-500">Transaction ID: FLPD2023112500001</p>
                          <p className="text-sm text-gray-500">Date: November 25, 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
                
                <ProcessStep 
                  number={4}
                  title="Receive Funds"
                  description="Accept the offer, complete the digital documentation, and receive funds directly in your bank account within 24 hours."
                  delay={600}
                />
              </div>
            </div>
          </div>
          
          <AnimatedElement delay={800} className="mt-16 text-center">
            <Button className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none group">
              Apply Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </AnimatedElement>
        </div>
      </section>
      
      {/* Benefits Comparison Section - Redesigned */}
      <section id="benefits" className="py-16 md:py-28 bg-gradient-to-br from-white via-fluidpe-light-teal/10 to-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-[-5%] top-[10%] w-72 h-72 rounded-full bg-fluidpe-light-teal/30 blur-3xl"></div>
          <div className="absolute left-[-5%] bottom-[10%] w-80 h-80 rounded-full bg-fluidpe-light-gold/30 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal bg-clip-text text-transparent">
              Benefits of Loans Against Securities
            </h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Unlock value from your portfolio while keeping your investments intact
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
            <AnimatedElement delay={300} className="order-2 lg:order-1">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-fluidpe-light-teal/30">
                <h3 className="text-xl font-semibold mb-6 text-fluidpe-teal flex items-center">
                  <LineChartLucide className="w-5 h-5 mr-2" /> Growth Comparison
                </h3>
                <p className="text-gray-600 mb-6">
                  See how keeping your investments and taking a loan against securities 
                  outperforms traditional financing options over time
                </p>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={growthComparisonData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="year" tick={{ fill: '#666' }} />
                      <YAxis tickFormatter={(tick) => `${tick}%`} tick={{ fill: '#666' }} />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, '']} 
                        labelFormatter={(label) => `Growth at ${label}`}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="securities" 
                        name="Loan Against Securities" 
                        stroke="#0fade8" 
                        strokeWidth={3}
                        dot={{ r: 4, strokeWidth: 2 }}
                        activeDot={{ r: 6, strokeWidth: 2 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="personal" 
                        name="Personal Loan" 
                        stroke="#7c65ab" 
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="credit" 
                        name="Credit Card" 
                        stroke="#fb7185" 
                        strokeWidth={2} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-4 bg-fluidpe-light-teal/20 rounded-lg text-sm text-gray-600">
                  <p className="font-medium text-fluidpe-teal mb-2">Key Insight:</p>
                  <p>
                    Taking a loan against securities allows your investments to continue growing, 
                    potentially offsetting the interest cost and generating overall positive returns.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <div className="order-1 lg:order-2 space-y-8">
              <AnimatedElement delay={400} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-fluidpe-light-teal/30">
                <h3 className="text-xl font-semibold mb-6 text-fluidpe-teal flex items-center">
                  <PieChartIcon className="w-5 h-5 mr-2" /> Value Distribution
                </h3>
                <div className="h-64 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={returnsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {returnsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, '']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-4 bg-fluidpe-light-teal/20 rounded-lg text-sm text-gray-600">
                  <p className="font-medium text-fluidpe-teal mb-2">Value Unlocked:</p>
                  <p>
                    With loans against securities, you benefit from continued investment growth, 
                    lower interest rates compared to other loans, and potential tax advantages.
                  </p>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={500}>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-fluidpe-light-teal/30">
                  <h3 className="text-xl font-semibold mb-4 text-fluidpe-teal">Loan Options Comparison</h3>
                  
                  <div className="space-y-4 mt-6">
                    <div className="relative">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Loan Against Securities</span>
                        <span className="text-sm font-medium">8.99% - 12%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-200 rounded-full">
                        <div className="h-2.5 bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Personal Loan</span>
                        <span className="text-sm font-medium">12% - 24%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-200 rounded-full">
                        <div className="h-2.5 bg-gradient-to-r from-fluidpe-medium-teal to-blue-500 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Credit Card</span>
                        <span className="text-sm font-medium">24% - 42%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-200 rounded-full">
                        <div className="h-2.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-3 bg-fluidpe-light-teal/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-fluidpe-teal">24-48 hrs</p>
                      <p className="text-xs text-gray-600">Processing Time</p>
                    </div>
                    <div className="p-3 bg-fluidpe-light-teal/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-fluidpe-teal">80%</p>
                      <p className="text-xs text-gray-600">Of Portfolio Value</p>
                    </div>
                    <div className="p-3 bg-fluidpe-light-teal/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-fluidpe-teal">0%</p>
                      <p className="text-xs text-gray-600">Prepayment Charges</p>
                    </div>
                    <div className="p-3 bg-fluidpe-light-teal/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-fluidpe-teal">Minimal</p>
                      <p className="text-xs text-gray-600">Documentation</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
          
          <AnimatedElement delay={600} className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal text-white px-8 py-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none group text-lg">
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
