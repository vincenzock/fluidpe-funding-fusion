
import React from 'react';
import { AlertTriangle, CreditCard, TrendingUp, CheckCircle } from 'lucide-react';

interface SavingsComparisonProps {
  loanAmount: number;
  loanDuration: number;
  interestRate: number;
}

const SavingsComparison = ({ loanAmount, loanDuration, interestRate }: SavingsComparisonProps) => {
  const calculateInterest = (rate: number) => {
    return Math.round(loanAmount * (rate / 100) * (loanDuration / 12));
  };
  
  const fluidpeInterest = calculateInterest(interestRate);
  const personalLoanInterest = calculateInterest(14);
  const creditCardInterest = calculateInterest(36);
  
  const savingsVsPersonal = personalLoanInterest - fluidpeInterest;
  const savingsVsCredit = creditCardInterest - fluidpeInterest;
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
      <div className="bg-fluidpe-teal p-4 text-white">
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
              <tr className="border-b border-gray-100">
                <td className="py-4 text-left">
                  <div className="flex items-center">
                    <div className="bg-fluidpe-light-teal w-8 h-8 rounded-full flex items-center justify-center mr-2">
                      <TrendingUp className="w-4 h-4 text-fluidpe-teal" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Fluidpe Loan</p>
                      <p className="text-xs text-gray-500">Against Mutual Funds</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-center font-medium text-fluidpe-teal">{interestRate}%</td>
                <td className="py-4 text-center font-medium text-fluidpe-teal">₹{fluidpeInterest.toLocaleString()}</td>
                <td className="py-4 text-center">
                  <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3 mr-1" /> Best Option
                  </span>
                </td>
              </tr>
              
              <tr className="border-b border-gray-100">
                <td className="py-4 text-left">
                  <div className="flex items-center">
                    <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                      <CreditCard className="w-4 h-4 text-yellow-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Personal Loan</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-center font-medium text-gray-700">14%</td>
                <td className="py-4 text-center font-medium text-gray-700">₹{personalLoanInterest.toLocaleString()}</td>
                <td className="py-4 text-center">
                  <span className="inline-flex items-center text-red-600 text-sm font-medium">
                    -₹{savingsVsPersonal.toLocaleString()}
                  </span>
                </td>
              </tr>
              
              <tr>
                <td className="py-4 text-left">
                  <div className="flex items-center">
                    <div className="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                      <CreditCard className="w-4 h-4 text-red-700" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Credit Card</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-center font-medium text-gray-700">36%</td>
                <td className="py-4 text-center font-medium text-gray-700">₹{creditCardInterest.toLocaleString()}</td>
                <td className="py-4 text-center">
                  <span className="inline-flex items-center text-red-600 text-sm font-medium">
                    -₹{savingsVsCredit.toLocaleString()}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 bg-fluidpe-light-teal/20 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-fluidpe-teal flex items-center mb-3">
            <TrendingUp className="w-5 h-5 mr-2" /> Highest Savings Potential
          </h4>
          
          <div className="mb-3">
            <p className="font-medium text-gray-700">
              By choosing Fluidpe instead of Credit Card financing:
            </p>
            <div className="mt-2 flex items-center">
              <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
              <div>
                <p className="text-lg font-bold text-green-600">You save ₹{savingsVsCredit.toLocaleString()}</p>
                <p className="text-sm text-gray-600">That's {Math.round((savingsVsCredit/creditCardInterest) * 100)}% in interest savings!</p>
              </div>
            </div>
          </div>
          
          <div className="pt-3 border-t border-fluidpe-light-teal/30">
            <div className="bg-red-50 p-3 rounded-lg border border-red-100 mb-3">
              <div className="flex items-start">
                <AlertTriangle className="text-red-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-red-700">Avoid Credit Card Financing</p>
                  <p className="text-sm text-red-600">You'll pay ₹{savingsVsCredit.toLocaleString()} more in interest with credit cards at 36% rate</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
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
      </div>
    </div>
  );
};

export default SavingsComparison;
