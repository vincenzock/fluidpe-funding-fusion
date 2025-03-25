
import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Clock, Percent, Star, AlertTriangle, CheckCircle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface LoanCalculatorProps {
  onLoanAmountChange?: (amount: number) => void;
  onLoanDurationChange?: (duration: number) => void;
  onInterestRateChange?: (rate: number) => void;
}

const LoanCalculator = ({ 
  onLoanAmountChange, 
  onLoanDurationChange, 
  onInterestRateChange 
}: LoanCalculatorProps) => {
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
  
  useEffect(() => {
    if (onLoanAmountChange) onLoanAmountChange(loanAmount);
    if (onLoanDurationChange) onLoanDurationChange(loanDuration);
    if (onInterestRateChange) onInterestRateChange(interestRate);
  }, [loanAmount, loanDuration, interestRate, onLoanAmountChange, onLoanDurationChange, onInterestRateChange]);

  const calculateTotalInterest = () => {
    const totalPayment = calculateEMI() * loanDuration;
    const totalInterest = totalPayment - loanAmount;
    return Math.round(totalInterest);
  };
  
  const emi = calculateEMI();
  const totalInterest = calculateTotalInterest();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-fluidpe-teal p-4 text-white">
        <h3 className="text-xl font-semibold flex items-center">
          <Calculator className="w-5 h-5 mr-2" /> Loan Calculator
        </h3>
        <p className="text-sm text-white/80">Adjust the sliders to see your potential savings</p>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-white to-fluidpe-light-teal/10">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between mb-1">
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
            <div className="flex justify-between mb-1">
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
            <div className="flex justify-between mb-1">
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
        
        <div className="mt-6 bg-fluidpe-light-teal/20 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-fluidpe-teal" /> 
              <h4 className="text-lg font-semibold text-fluidpe-teal">Your Loan Summary</h4>
            </div>
            <div className="bg-fluidpe-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
              Best Rate!
            </div>
          </div>
          
          <div className="space-y-3 mt-4">
            <div className="flex justify-between items-center pb-3 border-b border-fluidpe-light-teal/30">
              <span className="text-gray-700 font-medium">Monthly EMI</span>
              <span className="text-2xl font-bold text-fluidpe-teal">
                ₹{emi.toLocaleString()}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-fluidpe-light-teal/30">
              <span className="text-gray-700">Loan Amount</span>
              <span className="font-medium text-fluidpe-teal">₹{loanAmount.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-fluidpe-light-teal/30">
              <span className="text-gray-700">Interest Rate</span>
              <div className="flex items-center">
                <span className="font-medium text-fluidpe-teal">{interestRate}% p.a.</span>
                <div className="ml-2 bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
                  Lowest!
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-fluidpe-light-teal/30">
              <span className="text-gray-700">Tenure</span>
              <span className="font-medium text-fluidpe-teal">{loanDuration} months</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-fluidpe-light-teal/30">
              <span className="text-gray-700">Total Interest</span>
              <span className="font-medium text-green-600">₹{totalInterest.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="mt-3 py-3 border-t border-fluidpe-light-teal/30">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                <span className="text-sm text-fluidpe-medium-teal">No hidden charges</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                <span className="text-sm text-fluidpe-medium-teal">No prepayment penalty</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              <span className="text-sm text-fluidpe-medium-teal">Quick approval</span>
            </div>
          </div>
          
          <div className="text-center mt-3 text-xs text-fluidpe-teal">
            <Star className="inline w-3 h-3 mr-1 text-yellow-500" /> 
            Total Interest: <span className="font-semibold">₹{totalInterest.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
