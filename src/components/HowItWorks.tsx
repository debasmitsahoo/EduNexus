import React from 'react';
import { CircleArrowDown } from 'lucide-react';

const StepCard = ({ number, title, description }: { number: number; title: string; description: string }) => {
  return (
    <div className="relative">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 relative z-10 h-full border-t-4 border-deep-yellow">
        <div className="bg-navy-blue text-deep-yellow text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
          {number}
        </div>
        <h3 className="text-xl font-bold text-navy-blue mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      {number < 3 && (
        <div className="hidden md:block absolute top-1/2 left-full z-0 transform -translate-y-1/2 -translate-x-4">
          <CircleArrowDown className="h-8 w-8 text-deep-yellow transform rotate-270" />
        </div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: 'Create Account',
      description: 'Sign up and configure your institution\'s profile with basic details and requirements.'
    },
    {
      title: 'Configure Modules',
      description: 'Select and customize the modules that best fit your institution\'s specific needs.'
    },
    {
      title: 'Go Live',
      description: 'Launch your customized platform and start transforming how you manage your institution.'
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with EduNexus is simple and straightforward with our three-step process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              number={index + 1} 
              title={step.title} 
              description={step.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
