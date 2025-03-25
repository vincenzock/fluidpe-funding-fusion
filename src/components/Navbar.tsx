
import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b2c2913e-4df7-4ebe-a56f-5c70a0a31d50.png" 
              alt="Fluidpe" 
              className="h-10 md:h-12" 
            />
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLinks />
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-fluidpe-teal hover:bg-fluidpe-medium-teal text-white">
              Apply Now
            </Button>
          </div>
          
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-fluidpe-teal" />
            ) : (
              <Menu className="h-6 w-6 text-fluidpe-teal" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="bg-white shadow-lg p-4">
            <nav className="flex flex-col space-y-4 mb-4">
              <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
            </nav>
            <div className="flex flex-col space-y-2">
              <Button className="bg-fluidpe-teal hover:bg-fluidpe-medium-teal text-white w-full">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false, onClick = () => {} }) => {
  const location = useLocation();
  const linkClasses = mobile
    ? "text-fluidpe-teal hover:text-fluidpe-medium-teal font-medium text-lg py-2"
    : "text-fluidpe-teal hover:text-fluidpe-medium-teal font-medium transition-colors duration-200";
  
  const isHomePage = location.pathname === '/';
  
  // Create section links that work properly from any page
  const getSectionLink = (section) => {
    if (isHomePage) {
      // If we're on the home page, just use anchor links
      return `#${section}`;
    } else {
      // If we're on another page, navigate to home page + section
      return `/#${section}`;
    }
  };
    
  return (
    <>
      <Link to="/" className={`${linkClasses} flex items-center gap-1`} onClick={onClick}>
        <Home className="h-4 w-4" />
        Home
      </Link>
      <Link to={getSectionLink('features')} className={linkClasses} onClick={onClick}>Features</Link>
      <Link to={getSectionLink('how-it-works')} className={linkClasses} onClick={onClick}>How It Works</Link>
      <Link to={getSectionLink('benefits')} className={linkClasses} onClick={onClick}>Benefits</Link>
      <Link to={getSectionLink('testimonials')} className={linkClasses} onClick={onClick}>Testimonials</Link>
      <Link to={getSectionLink('faq')} className={linkClasses} onClick={onClick}>FAQ</Link>
      <Link to="/blog" className={linkClasses} onClick={onClick}>Blog</Link>
    </>
  );
};

export default Navbar;
