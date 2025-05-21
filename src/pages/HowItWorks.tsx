import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UserPlus, Settings, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="h-12 w-12 text-deep-yellow" />,
      title: "Create Account",
      description: "Sign up and configure your institution's profile with basic details and requirements.",
      details: [
        "Quick registration process",
        "Basic institution information",
        "Initial requirements assessment",
        "Account verification"
      ]
    },
    {
      icon: <Settings className="h-12 w-12 text-deep-yellow" />,
      title: "Configure Modules",
      description: "Select and customize the modules that best fit your institution's specific needs.",
      details: [
        "Module selection",
        "Customization options",
        "Integration setup",
        "Staff training"
      ]
    },
    {
      icon: <Rocket className="h-12 w-12 text-deep-yellow" />,
      title: "Go Live",
      description: "Launch your customized platform and start transforming how you manage your institution.",
      details: [
        "Final testing",
        "Data migration",
        "System launch",
        "Ongoing support"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">How It Works</h1>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-navy-blue mb-3">{step.title}</h2>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-deep-yellow rounded-full mr-2"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks; 