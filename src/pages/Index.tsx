
import React, { useEffect } from 'react';
import { 
  LineChart, PieChart, BarChart, Wallet, Clock, Shield, Award, 
  TrendingUp, Percent, CreditCard, Briefcase, ArrowRight
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

const Index = () => {
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
                <span className="inline-block py-1 px-3 rounded-full bg-fluidpe-light-teal text-fluidpe-teal text-sm font-medium mb-4">
                  Financial Freedom At Your Fingertips
                </span>
              </AnimatedElement>
              
              <AnimatedElement delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-fluidpe-teal">
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
                  <Button className="btn-primary" size="lg">
                    Apply Now
                  </Button>
                  <Button className="btn-secondary" size="lg">
                    Learn More
                  </Button>
                </div>
              </AnimatedElement>
              
              <AnimatedElement delay={800}>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-fluidpe-teal">₹500Cr+</p>
                    <p className="text-sm text-gray-600">Loans Disbursed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-fluidpe-teal">10,000+</p>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
                  <div className="text-center">
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
              <AnimatedElement key={partner} delay={index * 100}>
                <div className="text-gray-400 font-bold text-xl">{partner}</div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="section-title text-center">Why Choose Fluidpe</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="section-subtitle text-center">
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
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-fluidpe-light-gray relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-[-10%] bottom-[-5%] w-96 h-96 rounded-full bg-fluidpe-light-teal blur-3xl opacity-60"></div>
          <div className="absolute left-[-5%] top-[10%] w-80 h-80 rounded-full bg-fluidpe-light-gold blur-3xl opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement>
            <h2 className="section-title text-center">How It Works</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="section-subtitle text-center">
              Our simple 4-step process gets you quick access to funds without selling your investments
            </p>
          </AnimatedElement>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ProcessStep 
              number={1}
              title="Apply Online"
              description="Fill out our simple online application form with your personal and investment details. It takes less than 5 minutes."
              delay={0}
            />
            
            <ProcessStep 
              number={2}
              title="Pledge Securities"
              description="Select the securities you wish to pledge as collateral. We accept a wide range of stocks, mutual funds, and bonds."
              delay={200}
            />
            
            <ProcessStep 
              number={3}
              title="Verification & Approval"
              description="Our team verifies your details and securities. Once approved, you'll receive your loan offer with customized terms."
              delay={400}
            />
            
            <ProcessStep 
              number={4}
              title="Receive Funds"
              description="Accept the offer, complete the digital documentation, and receive funds directly in your bank account within 24 hours."
              delay={600}
            />
          </div>
          
          <AnimatedElement delay={800} className="mt-12 text-center">
            <Button className="btn-primary">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedElement>
        </div>
      </section>
      
      {/* Benefits Comparison Section */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <h2 className="section-title text-center">Benefits of Loans Against Securities</h2>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="section-subtitle text-center">
              See how loans against securities compare to other financing options
            </p>
          </AnimatedElement>
          
          <div className="mt-12 overflow-x-auto">
            <AnimatedElement delay={400}>
              <table className="w-full min-w-[768px] border-collapse">
                <thead>
                  <tr className="bg-fluidpe-teal text-white">
                    <th className="p-4 text-left">Features</th>
                    <th className="p-4 text-center">Loans Against Securities</th>
                    <th className="p-4 text-center">Personal Loans</th>
                    <th className="p-4 text-center">Credit Cards</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Interest Rates</td>
                    <td className="p-4 text-center bg-green-50">8.99% - 12%</td>
                    <td className="p-4 text-center">12% - 24%</td>
                    <td className="p-4 text-center">24% - 42%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Processing Time</td>
                    <td className="p-4 text-center bg-green-50">24 - 48 hours</td>
                    <td className="p-4 text-center">3 - 7 days</td>
                    <td className="p-4 text-center">Instant (pre-approved)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Loan Amount</td>
                    <td className="p-4 text-center bg-green-50">Up to 80% of securities value</td>
                    <td className="p-4 text-center">Based on income</td>
                    <td className="p-4 text-center">Pre-determined credit limit</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Documentation</td>
                    <td className="p-4 text-center bg-green-50">Minimal</td>
                    <td className="p-4 text-center">Extensive</td>
                    <td className="p-4 text-center">Moderate</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Tenure</td>
                    <td className="p-4 text-center bg-green-50">Flexible (1 month to 5 years)</td>
                    <td className="p-4 text-center">Fixed (1-5 years)</td>
                    <td className="p-4 text-center">Rolling credit</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Prepayment Charges</td>
                    <td className="p-4 text-center bg-green-50">No charges</td>
                    <td className="p-4 text-center">2-5% of outstanding amount</td>
                    <td className="p-4 text-center">Not applicable</td>
                  </tr>
                </tbody>
              </table>
            </AnimatedElement>
          </div>
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
