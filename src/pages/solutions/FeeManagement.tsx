import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Shield, Clock, BarChart } from 'lucide-react';

const FeeManagement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fee Management
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Streamline your fee collection process with our comprehensive payment system
            </p>
            <Button className="bg-deep-yellow text-navy-blue hover:bg-yellow-600 px-8 py-6 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CreditCard className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multiple Payment Options</h3>
              <p className="text-gray-600">
                Support for UPI, cards, net banking, and other popular payment methods
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-600">
                Bank-grade security with encrypted payment processing
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Payment Reminders</h3>
              <p className="text-gray-600">
                Smart notifications for upcoming and overdue payments
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BarChart className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">
                Track payment status and generate detailed reports
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reduced Administrative Work</h3>
                <p className="text-gray-600">
                  Streamline payment collection and reconciliation, saving time and reducing errors
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Cash Flow</h3>
                <p className="text-gray-600">
                  Faster payment processing and better visibility into payment status
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Parent Experience</h3>
                <p className="text-gray-600">
                  Convenient payment options and transparent fee structure
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Reporting</h3>
                <p className="text-gray-600">
                  Detailed insights into payment patterns and collection efficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Fee Management?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing number of educational institutions using our Fee Management system
          </p>
          <Button className="bg-deep-yellow text-navy-blue hover:bg-yellow-600 px-8 py-6 text-lg">
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FeeManagement; 