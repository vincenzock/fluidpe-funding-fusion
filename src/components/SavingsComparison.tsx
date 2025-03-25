
import React, { useState } from 'react';
import { AlertTriangle, CreditCard, TrendingUp, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import AnimatedElement from './AnimatedElement';

interface SavingsComparisonProps {
  loanAmount: number;
  loanDuration: number;
  interestRate: number;
}

const SavingsComparison = ({ loanAmount, loanDuration, interestRate }: SavingsComparisonProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeRow, setActiveRow] = useState<string | null>('fluidpe');
  
  const calculateInterest = (rate: number) => {
    return Math.round(loanAmount * (rate / 100) * (loanDuration / 12));
  };
  
  const fluidpeInterest = calculateInterest(interestRate);
  const personalLoanInterest = calculateInterest(14);
  const creditCardInterest = calculateInterest(36);
  
  const savingsVsPersonal = personalLoanInterest - fluidpeInterest;
  const savingsVsCredit = creditCardInterest - fluidpeInterest;
  
  const handleRowHover = (rowId: string | null) => {
    setActiveRow(rowId);
  };
  
  return (
    <AnimatedElement animation="fade-up" duration={800} className="h-full">
      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 interactive-card">
        <div className="bg-fluidpe-teal p-4 text-white shine-effect">
          <h3 className="text-xl font-semibold flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" /> Savings Comparison
          </h3>
          <p className="text-sm text-white/80">See how much you save with Fluidpe compared to other options</p>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-white to-fluidpe-light-teal/10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-medium text-gray-600">Loan Type</th>
                  <th className="text-center py-2 font-medium text-gray-600">Interest Rate</th>
                  <th className="text-center py-2 font-medium text-gray-600">Total Interest</th>
                  <th className="text-center py-2 font-medium text-gray-600">Comparison</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  className={`border-b border-gray-100 transition-all duration-300 cursor-pointer pulse-highlight ${activeRow === 'fluidpe' ? 'bg-fluidpe-light-teal/20' : ''}`}
                  onMouseEnter={() => handleRowHover('fluidpe')}
                  onMouseLeave={() => handleRowHover(null)}
                >
                  <td className="py-4 text-left">
                    <div className="flex items-center shine-effect">
                      <div className="bg-fluidpe-light-teal w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <TrendingUp className="w-4 h-4 text-fluidpe-teal" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Fluidpe Loan</p>
                        <p className="text-xs text-gray-500">Against Mutual Funds</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <HoverCard>
                      <HoverCardTrigger>
                        <span className="font-medium text-fluidpe-teal underline decoration-dotted cursor-help">{interestRate}%</span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Fluidpe's Best Rate</h4>
                          <p className="text-sm">This competitive rate is available for loans against your mutual fund investments.</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </td>
                  <td className="py-4 text-center font-medium text-fluidpe-teal shine-effect">₹{fluidpeInterest.toLocaleString()}</td>
                  <td className="py-4 text-center">
                    <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium shine-effect">
                      <CheckCircle className="w-3 h-3 mr-1" /> Best Option
                    </span>
                  </td>
                </tr>
                
                <tr 
                  className={`border-b border-gray-100 transition-all duration-300 cursor-pointer pulse-highlight ${activeRow === 'personal' ? 'bg-yellow-50' : ''}`}
                  onMouseEnter={() => handleRowHover('personal')}
                  onMouseLeave={() => handleRowHover(null)}
                >
                  <td className="py-4 text-left">
                    <div className="flex items-center shine-effect">
                      <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <CreditCard className="w-4 h-4 text-yellow-700" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Personal Loan</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <HoverCard>
                      <HoverCardTrigger>
                        <span className="font-medium text-gray-700 underline decoration-dotted cursor-help">14%</span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Standard Personal Loan Rate</h4>
                          <p className="text-sm">Personal loans typically charge higher interest rates due to their unsecured nature.</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </td>
                  <td className="py-4 text-center font-medium text-gray-700 shine-effect">₹{personalLoanInterest.toLocaleString()}</td>
                  <td className="py-4 text-center">
                    <span className="inline-flex items-center text-red-600 text-sm font-medium shine-effect">
                      -₹{savingsVsPersonal.toLocaleString()}
                    </span>
                  </td>
                </tr>
                
                <tr 
                  className={`transition-all duration-300 cursor-pointer pulse-highlight ${activeRow === 'credit' ? 'bg-red-50' : ''}`}
                  onMouseEnter={() => handleRowHover('credit')}
                  onMouseLeave={() => handleRowHover(null)}
                >
                  <td className="py-4 text-left">
                    <div className="flex items-center shine-effect">
                      <div className="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <CreditCard className="w-4 h-4 text-red-700" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Credit Card</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <HoverCard>
                      <HoverCardTrigger>
                        <span className="font-medium text-gray-700 underline decoration-dotted cursor-help">36%</span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="font-semibold">High Credit Card APR</h4>
                          <p className="text-sm">Credit cards typically charge very high annual percentage rates when you carry a balance.</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </td>
                  <td className="py-4 text-center font-medium text-gray-700 shine-effect">₹{creditCardInterest.toLocaleString()}</td>
                  <td className="py-4 text-center">
                    <span className="inline-flex items-center text-red-600 text-sm font-medium shine-effect">
                      -₹{savingsVsCredit.toLocaleString()}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <Collapsible 
            open={!isCollapsed} 
            onOpenChange={(isOpen) => setIsCollapsed(!isOpen)}
            className="mt-6"
          >
            <CollapsibleTrigger className="w-full flex items-center justify-between bg-fluidpe-light-teal/20 rounded-lg p-4 mb-3 hover:bg-fluidpe-light-teal/30 transition-colors shine-effect cursor-pointer">
              <h4 className="text-lg font-semibold text-fluidpe-teal flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" /> Highest Savings Potential
              </h4>
              <ArrowRight className={`h-4 w-4 text-fluidpe-teal transition-transform duration-300 ${isCollapsed ? 'rotate-90' : 'rotate-270'}`} />
            </CollapsibleTrigger>
            
            <CollapsibleContent className="space-y-4 animate-accordion-down">
              <div className="bg-gradient-to-br from-white to-fluidpe-light-teal/20 rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md interactive-card">
                <div className="mb-3">
                  <p className="font-medium text-gray-700">
                    By choosing Fluidpe instead of Credit Card financing:
                  </p>
                  <div className="mt-2 flex items-center">
                    <CheckCircle className="text-green-500 w-5 h-5 mr-2 flex-shrink-0" />
                    <div className="shine-effect">
                      <p className="text-lg font-bold text-green-600">You save ₹{savingsVsCredit.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">That's {Math.round((savingsVsCredit/creditCardInterest) * 100)}% in interest savings!</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-3 border-t border-fluidpe-light-teal/30">
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100 mb-3 hover:bg-red-100 transition-colors shine-effect">
                    <div className="flex items-start">
                      <AlertTriangle className="text-red-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-700">Avoid Credit Card Financing</p>
                        <p className="text-sm text-red-600">You'll pay ₹{savingsVsCredit.toLocaleString()} more in interest with credit cards at 36% rate</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 hover:bg-yellow-100 transition-colors shine-effect">
                    <div className="flex items-start">
                      <AlertTriangle className="text-yellow-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-700">Personal Loans Cost More</p>
                        <p className="text-sm text-yellow-600">You'll pay ₹{savingsVsPersonal.toLocaleString()} more in interest with personal loans at 14% rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg border border-green-100 hover:bg-green-100 transition-colors shine-effect">
                <div className="flex items-start">
                  <Info className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-700">Why Fluidpe is Better</p>
                    <p className="text-sm text-green-600">Fluidpe offers the lowest interest rates by using your mutual funds as collateral, while still allowing your investments to grow.</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default SavingsComparison;
