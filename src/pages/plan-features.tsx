import React from 'react';
import { ArrowLeft, CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PlanFeatures = () => {
  const plans = {
    free: {
      name: "Free Plan",
      price: "₹0",
      period: "month",
      description: "Perfect for small institutions just getting started with digital management.",
      features: {
        "Academic Management": [
          "Basic student database",
          "Class and section management",
          "Simple attendance tracking",
          "Basic timetable creation"
        ],
        "Student Profiles": [
          "Basic student information",
          "Contact details",
          "Academic history",
          "Document storage (limited)"
        ],
        "Basic Reporting": [
          "Attendance reports",
          "Basic academic reports",
          "Simple analytics dashboard"
        ],
        "Support": [
          "Email support",
          "Basic documentation",
          "Community forum access"
        ],
        "Limitations": [
          "Up to 100 students",
          "Basic features only",
          "Standard support response time"
        ]
      }
    },
    standard: {
      name: "Standard Plan",
      price: "₹4,999",
      period: "month",
      description: "Ideal for growing institutions that need advanced features and automation.",
      features: {
        "Everything in Free": [
          "All Free plan features included",
          "Enhanced performance",
          "Priority feature access"
        ],
        "Fee Automation": [
          "Automated fee collection",
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
    },
    enterprise: {
      name: "Enterprise Plan",
      price: "₹14,999",
      period: "month",
      description: "Complete solution for large institutions requiring maximum flexibility and customization.",
      features: {
        "Everything in Standard": [
          "All Standard plan features included",
          "Enhanced performance",
          "Priority feature access"
        ],
        "Custom Integrations": [
          "Custom API development",
          "Third-party integrations",
          "Custom workflow automation",
          "Data migration support"
        ],
        "White-labeling": [
          "Custom branding",
          "Domain customization",
          "Custom email templates",
          "Branded mobile apps"
        ],
        "API Access": [
          "Full API access",
          "Custom API endpoints",
          "API documentation",
          "Developer support"
        ],
        "Dedicated Support": [
          "24/7 priority support",
          "Dedicated account manager",
          "Custom training programs",
          "On-site support (optional)"
        ],
        "Advanced Features": [
          "Unlimited students",
          "Advanced security features",
          "Custom feature development",
          "Regular updates",
          "Multi-branch support"
        ]
      }
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

          <div className="max-w-6xl mx-auto">
            {Object.entries(plans).map(([key, plan]) => (
              <div key={key} className="mb-16">
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-3xl font-bold text-navy-blue mb-2">{plan.name}</h2>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-navy-blue">{plan.price}</div>
                      <div className="text-gray-500">/{plan.period}</div>
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
              </div>
            ))}

            <div className="text-center mt-12">
              <p className="text-gray-500 mb-4">
                Ready to get started? Contact our sales team for a personalized demo.
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

export default PlanFeatures; 