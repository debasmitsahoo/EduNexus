import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { GraduationCap, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300", 
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center text-navy-blue">
          <GraduationCap className="h-8 w-8 text-deep-yellow mr-2" />
          <span className="font-bold text-xl md:text-2xl">Feel Education</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-navy-blue hover:text-deep-yellow transition-colors">Features</a>
          <a href="#benefits" className="text-navy-blue hover:text-deep-yellow transition-colors">Benefits</a>
          <a href="#how-it-works" className="text-navy-blue hover:text-deep-yellow transition-colors">How It Works</a>
          <a href="#testimonials" className="text-navy-blue hover:text-deep-yellow transition-colors">Testimonials</a>
          <a href="#pricing" className="text-navy-blue hover:text-deep-yellow transition-colors">Pricing</a>
          <Button className="primary-btn ml-2" asChild>
            <a href="/request-demo">Request Demo</a>
          </Button>
          <Button variant="outline" className="border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white ml-2" asChild>
            <a href="/login">Login</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-navy-blue" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-navy-blue hover:text-deep-yellow py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className="text-navy-blue hover:text-deep-yellow py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#how-it-works" 
              className="text-navy-blue hover:text-deep-yellow py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-navy-blue hover:text-deep-yellow py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-navy-blue hover:text-deep-yellow py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <Button className="primary-btn w-full" asChild>
              <a href="/request-demo">Request Demo</a>
            </Button>
            <Button variant="outline" className="border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white w-full" asChild>
              <a href="/login">Login</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
