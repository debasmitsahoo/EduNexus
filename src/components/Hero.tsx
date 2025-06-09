import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue leading-tight mb-4">
              <span className="block">Welcome to</span>
              <span className="block">Edu<span className="text-deep-yellow">Nexus</span></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Your trusted partner in educational management solutions. We provide comprehensive ERP systems to streamline your institution's operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="primary-btn text-lg" asChild>
                <a href="/login">
                  Login
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-deep-yellow/20 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-navy-blue/10 rounded-full filter blur-xl"></div>
              <div className="relative z-10 animate-float">
                <img 
                  src="/hero-illustration.svg"
                  alt="Education Technology Illustration"
                  className="w-full max-w-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
