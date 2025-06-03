import React from 'react';
import { CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const USP = () => {
  return (
    <section id="usps" className="section-padding bg-gradient-to-br from-navy-blue/5 via-white to-deep-yellow/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-4">
              <span className="bg-deep-yellow/20 text-navy-blue font-semibold px-4 py-1 rounded-full text-sm">
                AUTO COLLECTION
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
              Smart Auto Collection System
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Automate your collection process with our intelligent auto collection system. Reduce manual work and ensure timely payments with automated reminders and tracking.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Automated payment scheduling',
                'Smart payment reminders',
                'Multiple collection methods',
                'Real-time collection tracking'
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
              <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/20 via-deep-yellow/20 to-navy-blue/20 blur-2xl rounded-full"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" 
                  alt="Fee Management System" 
                  className="rounded-lg shadow-sm w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-navy-blue to-deep-yellow p-2 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-navy-blue font-semibold">Manage Fees</div>
                      <div className="text-gray-600 text-sm">Efficient tracking</div>
                    </div>
                  </div>
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
