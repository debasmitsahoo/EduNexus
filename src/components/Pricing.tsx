import React, { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const PricingCard = ({ 
  tier, 
  price, 
  yearlyPrice, 
  isYearly, 
  features, 
  recommended = false 
}: { 
  tier: string; 
  price: number; 
  yearlyPrice: number; 
  isYearly: boolean; 
  features: string[]; 
  recommended?: boolean 
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl ${
        recommended ? 'border-2 border-deep-yellow relative' : ''
      }`}
    >
      {recommended && (
        <div className="bg-deep-yellow text-navy-blue font-semibold py-1 px-3 text-sm text-center">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-navy-blue mb-2">{tier}</h3>
        <div className="mb-6">
          {isYearly ? (
            <>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-navy-blue">₹{yearlyPrice}</span>
                <span className="text-gray-500 ml-1">/year</span>
              </div>
              <div className="mt-1">
                <p className="text-deep-yellow text-sm">Save 20% with annual billing</p>
                <p className="text-sm text-gray-500 mt-1">₹{Math.round(yearlyPrice/12)}/month</p>
              </div>
            </>
          ) : (
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-navy-blue">₹{price}</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
          )}
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CircleCheck className="h-5 w-5 text-deep-yellow mr-2 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${
            recommended 
              ? "bg-deep-yellow text-navy-blue hover:bg-yellow-600" 
              : "bg-navy-blue text-white hover:bg-navy-blue/90"
          }`}
          asChild
        >
          <a href={`/plans/${tier.toLowerCase()}`}>Get Started</a>
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      tier: "Free",
      price: 0,
      yearlyPrice: 0,
      features: [
        "Academic Management",
        "Student Profiles",
        "Basic Reporting",
        "Email Support",
        "Up to 200 students"
      ]
    },
    {
      tier: "Standard",
      price: 15999,
      yearlyPrice: 153588,
      features: [
        "Everything in Free",
        "Fee Automation with Autopay",
        "Teacher & Staff Dashboard",
        "Advanced Reporting",
        "Priority Support",
        "Up to 500 students"
      ],
      recommended: true
    },
    {
      tier: "Enterprise",
      price: 27999,
      yearlyPrice: 268788,
      features: [
        "Everything in Standard",
        "Custom Integrations",
        "White-labeling",
        "API Access",
        "Dedicated Account Manager",
        "Unlimited students"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that best fits your institution's needs and scale as you grow.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-${isYearly ? 'gray-500' : 'navy-blue font-medium'}`}>Monthly</span>
            <div className="flex items-center">
              <Switch 
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-deep-yellow"
              />
            </div>
            <span className={`text-${isYearly ? 'navy-blue font-medium' : 'gray-500'}`}>
              Yearly <span className="text-deep-yellow font-medium">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              tier={plan.tier} 
              price={plan.price} 
              yearlyPrice={plan.yearlyPrice} 
              isYearly={isYearly} 
              features={plan.features}
              recommended={plan.recommended}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Need a custom plan for your specific requirements?
          </p>
          <Button className="secondary-btn" asChild>
            <a href="/contact-sales">Contact Sales</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
