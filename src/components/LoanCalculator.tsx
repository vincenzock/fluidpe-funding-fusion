
import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Clock, Percent, Star, CheckCircle, CreditCard, Info } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

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
  const [customAmount, setCustomAmount] = useState('500000');
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  
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
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    const numValue = parseInt(value || '0');
    if (numValue >= 100000 && numValue <= 5000000) {
      setLoanAmount(numValue);
    }
  };

  const handleSliderChange = (values: number[]) => {
    setLoanAmount(values[0]);
    setCustomAmount(values[0].toString());
  };
  
  const emi = calculateEMI();
  const totalInterest = calculateTotalInterest();
  const totalPayment = emi * loanDuration;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-xl"
    >
      <div className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal p-5 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-semibold flex items-center">
            <Calculator className="w-5 h-5 mr-2" /> Loan Calculator
          </h3>
          <p className="text-sm text-white/90">Adjust the sliders to see your potential savings</p>
        </div>
        <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute left-10 bottom-0 w-16 h-16 bg-white/5 rounded-full transform translate-y-1/2"></div>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-white to-fluidpe-light-teal/10">
        <div className="space-y-6">
          <motion.div 
            className="space-y-3 relative"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-1">
              <Label className="text-sm font-medium text-gray-700 flex items-center cursor-pointer hover:text-fluidpe-teal transition-colors">
                <TrendingUp className="w-4 h-4 mr-1 text-fluidpe-teal" /> Loan Amount
              </Label>
              <div className="slider-value shine-effect">
                <Input
                  type="text"
                  value={`₹${parseInt(customAmount).toLocaleString('en-IN')}`}
                  onChange={handleAmountChange}
                  className="w-28 text-right font-medium text-fluidpe-teal border-0 bg-transparent p-0 h-auto focus-visible:ring-0"
                />
              </div>
            </div>
            <div className="relative calculator-slider group">
              <Slider 
                min={100000} 
                max={5000000} 
                step={10000} 
                value={[loanAmount]} 
                onValueChange={handleSliderChange} 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredElement('amount')}
                onMouseLeave={() => setHoveredElement(null)}
              />
              {hoveredElement === 'amount' && (
                <div className="slider-tooltip">
                  {`₹${loanAmount.toLocaleString('en-IN')}`}
                </div>
              )}
            </div>
            <div className="slider-range-labels">
              <span>₹1L</span>
              <span>₹25L</span>
              <span>₹50L</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-3 relative"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-1">
              <Label className="text-sm font-medium text-gray-700 flex items-center cursor-pointer hover:text-fluidpe-teal transition-colors">
                <Clock className="w-4 h-4 mr-1 text-fluidpe-teal" /> Duration (Months)
              </Label>
              <span className="slider-value">
                {loanDuration} months
              </span>
            </div>
            <div className="relative calculator-slider group">
              <Slider 
                min={6} 
                max={60} 
                step={6} 
                value={[loanDuration]} 
                onValueChange={(value) => setLoanDuration(value[0])} 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredElement('duration')}
                onMouseLeave={() => setHoveredElement(null)}
              />
              {hoveredElement === 'duration' && (
                <div className="slider-tooltip">
                  {`${loanDuration} months (${(loanDuration/12).toFixed(1)} years)`}
                </div>
              )}
            </div>
            <div className="slider-range-labels">
              <span>6 months</span>
              <span>30 months</span>
              <span>60 months</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-3 relative"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-1">
              <Label className="text-sm font-medium text-gray-700 flex items-center cursor-pointer hover:text-fluidpe-teal transition-colors">
                <Percent className="w-4 h-4 mr-1 text-fluidpe-teal" /> Interest Rate
              </Label>
              <div className="flex items-center slider-value">
                <span className="text-sm font-medium text-fluidpe-teal">{interestRate}%</span>
                <div className="ml-2 bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded-full flex items-center">
                  <CheckCircle className="w-3 h-3 mr-0.5" /> Best
                </div>
              </div>
            </div>
            <div className="relative calculator-slider group">
              <Slider 
                min={8.5} 
                max={14} 
                step={0.5} 
                value={[interestRate]} 
                onValueChange={(value) => setInterestRate(value[0])} 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredElement('interest')}
                onMouseLeave={() => setHoveredElement(null)}
              />
              {hoveredElement === 'interest' && (
                <div className="slider-tooltip">
                  {`${interestRate}% interest rate (${interestRate < 10 ? 'Excellent' : interestRate < 12 ? 'Good' : 'Average'})`}
                </div>
              )}
            </div>
            <div className="slider-range-labels">
              <span className="text-green-600">8.5%</span>
              <span className="text-yellow-600">11%</span>
              <span className="text-red-500">14%</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 bg-gradient-to-br from-fluidpe-light-teal/30 to-fluidpe-light-teal/5 rounded-lg p-5 hover:shadow-md transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-fluidpe-teal" /> 
              <h4 className="text-lg font-semibold text-fluidpe-teal">Your Loan Summary</h4>
            </div>
            <div className="bg-gradient-to-r from-fluidpe-teal to-fluidpe-medium-teal text-white text-xs font-semibold px-3 py-1 rounded-full shine-effect animate-pulse">
              <CheckCircle className="w-3 h-3 inline-block mr-1" /> Best Rate
            </div>
          </div>
          
          <div className="mt-5 grid grid-cols-2 gap-4">
            <motion.div 
              className="col-span-2 bg-white rounded-lg shadow-sm p-4 border border-fluidpe-light-teal/30 shine-effect"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 77, 77, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Monthly EMI</span>
                <span className="text-2xl font-bold text-fluidpe-teal gradient-text-animate">
                  ₹{emi.toLocaleString('en-IN')}
                </span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-3 border border-fluidpe-light-teal/30 group"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 77, 77, 0.08)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 group-hover:text-fluidpe-teal transition-colors duration-200">Principal</span>
                <span className="text-lg font-semibold text-fluidpe-teal">
                  ₹{loanAmount.toLocaleString('en-IN')}
                </span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-3 border border-fluidpe-light-teal/30 group"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 77, 77, 0.08)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 group-hover:text-green-600 transition-colors duration-200">Total Interest</span>
                <span className="text-lg font-semibold text-green-600">
                  ₹{totalInterest.toLocaleString('en-IN')}
                </span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-3 border border-fluidpe-light-teal/30 group"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 77, 77, 0.08)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 group-hover:text-fluidpe-teal transition-colors duration-200">Interest Rate</span>
                <span className="text-lg font-semibold text-fluidpe-teal flex items-center">
                  {interestRate}% <span className="ml-1 text-xs text-green-600">(p.a.)</span>
                </span>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-3 border border-fluidpe-light-teal/30 group"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 77, 77, 0.08)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 group-hover:text-fluidpe-teal transition-colors duration-200">Total Payment</span>
                <span className="text-lg font-semibold text-fluidpe-teal">
                  ₹{totalPayment.toLocaleString('en-IN')}
                </span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-5 flex flex-wrap items-center justify-around gap-2 bg-white rounded-lg p-3 border border-fluidpe-light-teal/20"
            whileHover={{ boxShadow: "0 5px 15px rgba(0, 77, 77, 0.05)" }}
          >
            <motion.div 
              className="flex items-center pulse-highlight p-2 rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 77, 77, 0.05)" }}
            >
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              <span className="text-sm text-fluidpe-medium-teal">No hidden charges</span>
            </motion.div>
            <motion.div 
              className="flex items-center pulse-highlight p-2 rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 77, 77, 0.05)" }}
            >
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              <span className="text-sm text-fluidpe-medium-teal">No prepayment penalty</span>
            </motion.div>
            <motion.div 
              className="flex items-center pulse-highlight p-2 rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 77, 77, 0.05)" }}
            >
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
              <span className="text-sm text-fluidpe-medium-teal">Quick approval</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoanCalculator;
