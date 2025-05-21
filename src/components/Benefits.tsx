import React from 'react';
import { Clock, TrendingUp, Users, Shield, BarChart, Zap } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-deep-yellow" />,
      title: "Time Efficiency",
      description: "Reduce administrative workload by up to 60% with automated processes and streamlined workflows."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-deep-yellow" />,
      title: "Improved Performance",
      description: "Enhance academic outcomes through data-driven insights and better resource allocation."
    },
    {
      icon: <Users className="h-8 w-8 text-deep-yellow" />,
      title: "Better Communication",
      description: "Foster stronger relationships between staff, students, and parents with integrated communication tools."
    },
    {
      icon: <Shield className="h-8 w-8 text-deep-yellow" />,
      title: "Enhanced Security",
      description: "Protect sensitive data with enterprise-grade security and role-based access control."
    },
    {
      icon: <BarChart className="h-8 w-8 text-deep-yellow" />,
      title: "Data-Driven Decisions",
      description: "Make informed decisions with comprehensive analytics and real-time reporting."
    },
    {
      icon: <Zap className="h-8 w-8 text-deep-yellow" />,
      title: "Scalable Solution",
      description: "Grow your institution with confidence using our scalable and flexible platform."
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Why Choose Feel Education?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the advantages of our comprehensive education management platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-navy-blue mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 