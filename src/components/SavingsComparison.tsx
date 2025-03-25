
import React, { useState } from 'react';
import { AlertTriangle, CreditCard, TrendingUp, CheckCircle, Info, ArrowRight, BarChart } from 'lucide-react';
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
  
  const savingsPercentVsPersonal = Math.round((savingsVsPersonal / personalLoanInterest) * 100);
  const savingsPercentVsCredit = Math.round((savingsVsCredit / creditCardInterest) * 100);
  
  const handleRowHover = (rowId: string | null) => {
    setActiveRow(rowId);
  };
  
  return (
    <AnimatedElement animation="fade-up" duration={800} className="h-full">
      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        <div className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal p-5 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-semibold flex items-center">
              <BarChart className="w-5 h-5 mr-2" /> Savings Comparison
            </h3>
            <p className="text-sm text-white/90">See how much you save with Fluidpe compared to other options</p>
          </div>
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute left-10 bottom-0 w-16 h-16 bg-white/5 rounded-full transform translate-y-1/2"></div>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-white to-fluidpe-light-teal/5">
          <div className="bg-white rounded-lg shadow-sm border border-fluidpe-light-teal/20 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-fluidpe-light-teal/10">
                    <th className="text-left py-3 px-4 font-semibold text-fluidpe-teal">Loan Type</th>
                    <th className="text-center py-3 px-4 font-semibold text-fluidpe-teal">Interest Rate</th>
                    <th className="text-center py-3 px-4 font-semibold text-fluidpe-teal">Total Interest</th>
                    <th className="text-center py-3 px-4 font-semibold text-fluidpe-teal">Your Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    className={`transition-all duration-300 cursor-pointer hover:bg-fluidpe-light-teal/10 ${activeRow === 'fluidpe' ? 'bg-fluidpe-light-teal/20' : ''}`}
                    onMouseEnter={() => handleRowHover('fluidpe')}
                    onMouseLeave={() => handleRowHover(null)}
                  >
                    <td className="py-4 px-4 text-left border-b border-fluidpe-light-teal/10">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal w-10 h-10 rounded-full flex items-center justify-center shadow-md shine-effect">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Fluidpe Loan</p>
                          <p className="text-xs text-gray-500">Against Mutual Funds</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center border-b border-fluidpe-light-teal/10">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-100 cursor-help shine-effect">
                            <span className="font-medium text-green-700">{interestRate}%</span>
                            <Info className="w-3 h-3 ml-1 text-green-700" />
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 shadow-lg p-4 border border-fluidpe-light-teal/20 hover-card-content">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-fluidpe-teal">Fluidpe's Best Rate</h4>
                            <p className="text-sm">This competitive rate is available for loans against your mutual fund investments.</p>
                            <div className="text-xs text-gray-500 flex items-center mt-2">
                              <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                              No impact on your investment growth
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </td>
                    <td className="py-4 px-4 text-center border-b border-fluidpe-light-teal/10 font-medium text-fluidpe-teal shine-effect">
                      ₹{fluidpeInterest.toLocaleString('en-IN')}
                    </td>
                    <td className="py-4 px-4 text-center border-b border-fluidpe-light-teal/10">
                      <span className="inline-flex items-center justify-center gap-1 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-xs font-medium shine-effect">
                        <CheckCircle className="w-3 h-3" /> Best Option
                      </span>
                    </td>
                  </tr>
                  
                  <tr 
                    className={`transition-all duration-300 cursor-pointer hover:bg-yellow-50 ${activeRow === 'personal' ? 'bg-yellow-50' : ''}`}
                    onMouseEnter={() => handleRowHover('personal')}
                    onMouseLeave={() => handleRowHover(null)}
                  >
                    <td className="py-4 px-4 text-left border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center shadow-md shine-effect">
                          <CreditCard className="w-5 h-5 text-yellow-700" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Personal Loan</p>
                          <p className="text-xs text-gray-500">From Banks</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-100">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-yellow-100 cursor-help shine-effect">
                            <span className="font-medium text-yellow-700">14%</span>
                            <Info className="w-3 h-3 ml-1 text-yellow-700" />
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 shadow-lg p-4 border border-yellow-100 hover-card-content">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-yellow-700">Standard Personal Loan Rate</h4>
                            <p className="text-sm">Personal loans typically charge higher interest rates due to their unsecured nature.</p>
                            <div className="text-xs text-gray-500 flex items-center mt-2">
                              <AlertTriangle className="w-3 h-3 mr-1 text-yellow-700" />
                              Extensive documentation required
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-100 font-medium text-gray-700 shine-effect">
                      ₹{personalLoanInterest.toLocaleString('en-IN')}
                    </td>
                    <td className="py-4 px-4 text-center border-b border-gray-100">
                      <div className="flex flex-col items-center">
                        <span className="inline-flex items-center text-green-600 text-sm font-medium shine-effect gap-1">
                          <CheckCircle className="w-3 h-3" /> Save ₹{savingsVsPersonal.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-green-700">{savingsPercentVsPersonal}% less interest</span>
                      </div>
                    </td>
                  </tr>
                  
                  <tr 
                    className={`transition-all duration-300 cursor-pointer hover:bg-red-50 ${activeRow === 'credit' ? 'bg-red-50' : ''}`}
                    onMouseEnter={() => handleRowHover('credit')}
                    onMouseLeave={() => handleRowHover(null)}
                  >
                    <td className="py-4 px-4 text-left">
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center shadow-md shine-effect">
                          <CreditCard className="w-5 h-5 text-red-700" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Credit Card</p>
                          <p className="text-xs text-gray-500">EMI or Direct</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-red-100 cursor-help shine-effect">
                            <span className="font-medium text-red-700">36%</span>
                            <Info className="w-3 h-3 ml-1 text-red-700" />
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 shadow-lg p-4 border border-red-100 hover-card-content">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-red-600">High Credit Card APR</h4>
                            <p className="text-sm">Credit cards typically charge very high annual percentage rates when you carry a balance.</p>
                            <div className="text-xs text-gray-500 flex items-center mt-2">
                              <AlertTriangle className="w-3 h-3 mr-1 text-red-600" />
                              Additional charges and fees may apply
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </td>
                    <td className="py-4 px-4 text-center font-medium text-gray-700 shine-effect">
                      ₹{creditCardInterest.toLocaleString('en-IN')}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="inline-flex items-center text-green-600 text-sm font-medium shine-effect gap-1">
                          <CheckCircle className="w-3 h-3" /> Save ₹{savingsVsCredit.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-green-700">{savingsPercentVsCredit}% less interest</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <Collapsible 
            open={!isCollapsed} 
            onOpenChange={(isOpen) => setIsCollapsed(!isOpen)}
            className="mt-4"
          >
            <CollapsibleTrigger className="w-full flex items-center justify-between bg-gradient-to-r from-fluidpe-light-teal/20 to-fluidpe-light-teal/10 rounded-lg p-4 hover:bg-fluidpe-light-teal/30 transition-colors cursor-pointer shadow-sm hover:shadow-md">
              <h4 className="text-lg font-semibold text-fluidpe-teal flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" /> Your Potential Savings
              </h4>
              <ArrowRight className={`h-4 w-4 text-fluidpe-teal transition-transform duration-300 ${isCollapsed ? 'rotate-90' : 'rotate-270'}`} />
            </CollapsibleTrigger>
            
            <CollapsibleContent className="space-y-4 animate-accordion-down mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-white to-fluidpe-light-teal/10 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-fluidpe-light-teal/20">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-2 shine-effect">
                      <CheckCircle className="text-green-600 w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-fluidpe-teal mb-2">VS Personal Loans</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center border-b border-fluidpe-light-teal/10 pb-2">
                          <span className="text-gray-600">Total Savings</span>
                          <span className="font-bold text-green-600 shine-effect">₹{savingsVsPersonal.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-fluidpe-light-teal/10 pb-2">
                          <span className="text-gray-600">Percentage Saved</span>
                          <span className="font-bold text-green-600 shine-effect">{savingsPercentVsPersonal}%</span>
                        </div>
                        <div className="flex justify-between items-center pt-1">
                          <span className="text-gray-600">Monthly Savings</span>
                          <span className="font-bold text-green-600 shine-effect">
                            ₹{Math.round(savingsVsPersonal / loanDuration).toLocaleString('en-IN')}/mo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white to-fluidpe-light-teal/10 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-fluidpe-light-teal/20">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-2 shine-effect">
                      <CheckCircle className="text-green-600 w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-fluidpe-teal mb-2">VS Credit Cards</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center border-b border-fluidpe-light-teal/10 pb-2">
                          <span className="text-gray-600">Total Savings</span>
                          <span className="font-bold text-green-600 shine-effect">₹{savingsVsCredit.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-fluidpe-light-teal/10 pb-2">
                          <span className="text-gray-600">Percentage Saved</span>
                          <span className="font-bold text-green-600 shine-effect">{savingsPercentVsCredit}%</span>
                        </div>
                        <div className="flex justify-between items-center pt-1">
                          <span className="text-gray-600">Monthly Savings</span>
                          <span className="font-bold text-green-600 shine-effect">
                            ₹{Math.round(savingsVsCredit / loanDuration).toLocaleString('en-IN')}/mo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal rounded-lg p-4 text-white shadow-md">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2 shine-effect">
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Smart Financial Choice</h5>
                    <p className="text-sm text-white/90">
                      With Fluidpe, you save significantly on interest costs while your investments continue to grow. It's the intelligent way to access funds without liquidating your assets.
                    </p>
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
