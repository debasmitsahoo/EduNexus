import React from 'react';
import { CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const USP = () => {
  return (
    <section id="usps" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-4">
              <span className="bg-deep-yellow/20 text-navy-blue font-semibold px-4 py-1 rounded-full text-sm">
                EXCLUSIVE FEATURE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
              Comprehensive Fee Management System
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Streamline your fee collection process with our robust fee management system. Make fee collection and tracking easier than ever before.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Flexible payment scheduling',
                'Automated payment reminders',
                'Multiple payment options',
                'Real-time payment tracking and reporting'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CircleCheck className="h-6 w-6 text-deep-yellow mr-2 mt-0.5" />
                  <span className="text-navy-blue">{item}</span>
                </div>
              ))}
            </div>
            <Button className="primary-btn" asChild>
              <a href="/request-demo">Learn More</a>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-deep-yellow/20 blur-xl rounded-full"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" 
                  alt="Fee Management System" 
                  className="rounded-lg shadow-sm"
                />
                <div className="absolute -bottom-6 -right-6 bg-deep-yellow p-4 rounded-lg shadow-lg">
                  <div className="text-navy-blue text-lg font-bold">Manage Fees</div>
                  <div className="text-navy-blue/80 text-sm">Efficient tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;
