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
  recommended = false,
  isEnterprise = false
}: { 
  tier: string; 
  price: number; 
  yearlyPrice: number; 
  isYearly: boolean; 
  features: string[]; 
  recommended?: boolean;
  isEnterprise?: boolean;
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
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-navy-blue mb-2">{tier}</h3>
        <div className="mb-6">
          {isEnterprise ? (
            <div className="text-4xl font-bold text-navy-blue">Contact Sales</div>
          ) : isYearly ? (
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
          {isEnterprise ? (
            <a href="/contact-sales">Contact Sales</a>
          ) : (
            <a href={`/plans/${tier.toLowerCase()}`}>Get Started</a>
          )}
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      tier: "Free",
      price: 0,
      yearlyPrice: 0,
      features: [
        "Up to 200 students",
        "Basic student database",
        "Simple attendance tracking",
        "Basic timetable creation",
        "Email support",
        "Community forum access"
      ]
    },
    {
      tier: "Premium",
      price: 999,
      yearlyPrice: 9599,
      features: [
        "Unlimited students",
        "Advanced student database",
        "Comprehensive attendance tracking",
        "Advanced timetable management",
        "Fee management system",
        "Parent communication portal",
        "Performance analytics",
        "Priority support"
      ],
      recommended: true
    },
    {
      tier: "Enterprise",
      price: 0,
      yearlyPrice: 0,
      features: [
        "Custom solutions",
        "Dedicated account manager",
        "Custom integrations",
        "White-labeling options",
        "Advanced security features",
        "Custom feature development",
        "24/7 priority support",
        "On-site training"
      ],
      isEnterprise: true
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your institution's needs
          </p>
          
          <div className="flex items-center justify-center space-x-3 mt-6">
            <span className={`text-sm ${!isYearly ? 'text-navy-blue font-medium' : 'text-gray-500'}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={`text-sm ${isYearly ? 'text-navy-blue font-medium' : 'text-gray-500'}`}>Yearly</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.tier}
              tier={plan.tier}
              price={plan.price}
              yearlyPrice={plan.yearlyPrice}
              isYearly={isYearly}
              features={plan.features}
              recommended={plan.recommended}
              isEnterprise={plan.isEnterprise}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
