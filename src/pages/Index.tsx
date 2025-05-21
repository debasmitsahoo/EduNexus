import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import USP from '@/components/USP';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Footer from '@/components/Footer';
import AppUiImg from '@/components/Images/app ui.jpeg';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <USP />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <About />
        {/* App Section - now after About (Our Vision) */}
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-deep-yellow/10 relative overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            {/* Left: App UI Image */}
            <div className="flex-1 flex justify-center items-center">
              <img 
                src={AppUiImg} 
                alt="App UI Preview" 
                className="w-full transition-transform duration-300 ease-in-out hover:scale-105 drop-shadow-xl rounded-xl max-w-2xl"
              />
            </div>
            {/* Right: Content */}
            <div className="flex-1 flex flex-col justify-center items-start z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
                Revolutionize the way your school operates with <span className="text-deep-yellow">Feel Education</span> – the ultimate School Management System in your pocket.
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Empower administrators, teachers, students, and parents with a smart, secure, and seamless experience. From tracking attendance and managing assignments to sending announcements and viewing exam results — everything is just a tap away.
              </p>
              <ul className="mb-6 space-y-3">
                <li className="flex items-center text-navy-blue font-medium text-lg"><span className="mr-3 text-deep-yellow text-2xl">—</span>Streamline school operations</li>
                <li className="flex items-center text-navy-blue font-medium text-lg"><span className="mr-3 text-deep-yellow text-2xl">—</span>Stay connected from anywhere</li>
                <li className="flex items-center text-navy-blue font-medium text-lg"><span className="mr-3 text-deep-yellow text-2xl">—</span>Access secure, real-time data</li>
              </ul>
              <p className="text-md text-gray-600 mb-8">
                Don't miss out on transforming your school experience. Download the Feel Education app today and lead the future of smart schooling!
              </p>
              <button
                className="px-8 py-3 bg-navy-blue text-white font-semibold rounded-lg shadow hover:bg-deep-yellow hover:text-navy-blue transition-colors duration-200 text-lg"
                onClick={() => window.open('/request-demo', '_self')}
              >
                Try the Demo App
              </button>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-deep-yellow/20 rounded-full filter blur-2xl z-0"></div>
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-navy-blue/10 rounded-full filter blur-2xl z-0"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
