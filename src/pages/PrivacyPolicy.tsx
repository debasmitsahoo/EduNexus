import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  At EduNexus, we collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Name and contact information</li>
                  <li>School or institution details</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the collected information to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions</li>
                  <li>Send you important updates</li>
                  <li>Improve our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">3. Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">4. Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">5. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-gray-600">
                  Email: privacy@edunexus.com<br />
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

export default PrivacyPolicy; 