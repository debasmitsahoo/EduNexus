import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import PDFViewerModal from './PDFViewerModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-blue leading-tight mb-4">
              <span className="block">Welcome to</span>
              <span className="block">Feel <span className="text-deep-yellow">Education</span></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Your trusted partner in educational management solutions. We provide comprehensive ERP systems to streamline your institution's operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="primary-btn text-lg" asChild>
                <a href="https://feeleducation.com/login">
                  Access Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white text-lg"
                onClick={() => setIsModalOpen(true)}
              >
                <Download className="mr-2 h-5 w-5" />
                Company Profile
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

      <PDFViewerModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
