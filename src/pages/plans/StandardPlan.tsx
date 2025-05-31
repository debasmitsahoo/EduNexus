import React from 'react';
import { ArrowLeft, CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StandardPlan = () => {
  const plan = {
    name: "Standard Plan",
    price: {
      monthly: "₹15,999",
      yearly: "₹153,588",
      monthlyEquivalent: "₹12,799"
    },
    period: "month",
    description: "Ideal for growing institutions that need advanced features and automation.",
    features: {
      "Everything in Free": [
        "All Free plan features included",
        "Enhanced performance",
        "Priority feature access"
      ],
      "Fee Automation": [
        "Manual fee collection system",
        "Multiple payment methods",
        "Payment reminders",
        "Receipt generation",
        "Payment tracking"
      ],
      "Teacher & Staff Dashboard": [
        "Advanced attendance management",
        "Performance tracking",
        "Resource allocation",
        "Communication tools",
        "Document sharing"
      ],
      "Advanced Reporting": [
        "Custom report builder",
        "Financial analytics",
        "Student performance tracking",
        "Attendance analytics",
        "Export to multiple formats"
      ],
      "Priority Support": [
        "24/7 email support",
        "Priority ticket handling",
        "Dedicated support team",
        "Training sessions"
      ],
      "Additional Features": [
        "Up to 500 students",
        "Advanced security features",
        "Regular updates",
        "API access (limited)"
      ]
    }
  };

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
            Back to Pricing
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-navy-blue mb-2">{plan.name}</h2>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex flex-col items-end">
                    <div className="text-4xl font-bold text-navy-blue">{plan.price.monthly}</div>
                    <div className="text-gray-500">/month</div>
                    <div className="mt-2">
                      <div className="text-sm text-gray-500">or {plan.price.yearly}/year</div>
                      <div className="text-sm text-deep-yellow mt-1">Save 20% with annual billing</div>
                      <div className="text-xs text-gray-500 mt-1">(₹{plan.price.monthlyEquivalent}/month)</div>
                    </div>
                  </div>
                </div>
              </div>

              {Object.entries(plan.features).map(([category, features]) => (
                <div key={category} className="mb-8">
                  <h3 className="text-xl font-semibold text-navy-blue mb-4">{category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CircleCheck className="h-5 w-5 text-deep-yellow mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500 mb-4">
                Ready to upgrade to our Standard plan?
              </p>
              <Button className="primary-btn" asChild>
                <a href="/contact-sales">Contact Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StandardPlan; 