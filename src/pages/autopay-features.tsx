import React from 'react';
import { CircleCheck, ArrowLeft, CreditCard, Bell, Calendar, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AutopayFeatures = () => {
  const features = [
    {
      icon: CreditCard,
      title: 'Automated Payment Processing',
      description: 'Set up recurring payments and automatic fee collection with support for multiple payment methods including credit cards, UPI, and net banking.'
    },
    {
      icon: Bell,
      title: 'Smart Payment Reminders',
      description: 'Automated notifications for upcoming and overdue payments with customizable reminder schedules and templates.'
    },
    {
      icon: Calendar,
      title: 'Flexible Payment Scheduling',
      description: 'Create custom payment schedules based on your institution\'s fee structure with support for multiple installments and payment dates.'
    },
    {
      icon: BarChart,
      title: 'Comprehensive Analytics',
      description: 'Track payment trends, generate reports, and gain insights into your institution\'s financial performance.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            className="mb-8 text-navy-blue hover:text-deep-yellow"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-deep-yellow/20 text-navy-blue font-semibold px-4 py-1 rounded-full text-sm">
                EXCLUSIVE FEATURE
              </span>
              <h1 className="text-4xl font-bold text-navy-blue mt-4 mb-6">
                Built-In Autopay Setup for School Fees
              </h1>
              <p className="text-lg text-gray-600">
                Transform your fee collection process with our intelligent autopay system. Reduce administrative overhead, 
                improve collection rates, and provide a seamless payment experience for parents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <feature.icon className="h-8 w-8 text-deep-yellow" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-blue mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-navy-blue mb-6">Key Benefits</h2>
              <div className="space-y-4">
                {[
                  '98% on-time payment rate',
                  'Reduced administrative workload',
                  'Improved parent satisfaction',
                  'Real-time payment tracking',
                  'Automated receipt generation',
                  'Secure payment processing'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CircleCheck className="h-6 w-6 text-deep-yellow mr-2 mt-0.5" />
                    <span className="text-navy-blue">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button className="primary-btn text-lg" asChild>
                <a href="/request-demo">Request a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AutopayFeatures; 