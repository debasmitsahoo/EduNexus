import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    // Replace with your actual PDF URL
    const pdfUrl = '/features-brochure.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Feel-Education-Features.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue leading-tight mb-4">
              <span className="block">Automate. Manage.</span>
              <span className="block">Transform <span className="text-deep-yellow">Your Institution.</span></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Feel Education is a smart ERP designed to simplify academic and administrative operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="primary-btn text-lg" asChild>
                <a href="/request-demo">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white text-lg"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Explore Features
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-deep-yellow/20 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-navy-blue/10 rounded-full filter blur-xl"></div>
              <div className="relative z-10 animate-float">
                <img 
                  src="/HeroImg.png"
                  alt="Dashboard Preview"
                  className="rounded-lg w-full max-w-xl"
                />
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md shadow-xl rounded-xl px-6 py-4 flex flex-col items-start max-w-xs border border-gray-200 animate-fade-in-up">
                  <span className="text-navy-blue font-bold text-lg mb-1">Feel Education App</span>
                  <span className="text-gray-700 text-sm">Smart, secure, and seamless school management—anytime, anywhere.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
