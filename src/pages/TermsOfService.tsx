import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using EduNexus's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">2. Use of Services</h2>
                <p className="text-gray-600 mb-4">
                  Our services are designed for educational institutions and their authorized users. You agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Provide accurate information</li>
                  <li>Maintain the security of your account</li>
                  <li>Use the services in compliance with applicable laws</li>
                  <li>Not misuse or abuse the services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">3. Subscription and Payments</h2>
                <p className="text-gray-600 mb-4">
                  Subscription terms and payment conditions:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Subscriptions are billed in advance</li>
                  <li>Payments are non-refundable</li>
                  <li>Prices may be updated with notice</li>
                  <li>Automatic renewal unless cancelled</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">4. Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  All content, features, and functionality of our services are owned by EduNexus and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  EduNexus shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">6. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  For any questions regarding these Terms of Service, please contact us at:
                </p>
                <p className="text-gray-600">
                  Email: legal@feeleducation.com<br />
                  Phone: +91 1234-567-890
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService; 