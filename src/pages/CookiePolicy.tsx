import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">1. What Are Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and enable certain features to function properly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">2. Types of Cookies We Use</h2>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-navy-blue mb-2">Essential Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-navy-blue mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-navy-blue mb-2">Functionality Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    Remember your preferences and settings to enhance your experience.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">3. How We Use Cookies</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Keep you signed in</li>
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic</li>
                  <li>Improve our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">4. Managing Cookies</h2>
                <p className="text-gray-600 mb-4">
                  You can control and manage cookies in your browser settings. However, please note that disabling certain cookies may affect the functionality of our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">5. Updates to This Policy</h2>
                <p className="text-gray-600 mb-4">
                  We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-navy-blue mb-4">6. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy; 