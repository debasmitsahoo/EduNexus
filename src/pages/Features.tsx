import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Features = () => {
  const features = [
    {
      title: "Academic Management",
      description: "Streamline curriculum planning, class scheduling, and academic progress tracking."
    },
    {
      title: "Student Information System",
      description: "Comprehensive student profiles, attendance tracking, and performance analytics."
    },
    {
      title: "Fee Management",
      description: "Automated fee collection, payment tracking, and financial reporting."
    },
    {
      title: "Communication Hub",
      description: "Integrated messaging system for seamless communication between staff, students, and parents."
    },
    {
      title: "Resource Management",
      description: "Efficient management of school resources, inventory, and asset tracking."
    },
    {
      title: "Reporting & Analytics",
      description: "Advanced analytics and customizable reports for data-driven decision making."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">Features</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-semibold text-navy-blue mb-3">{feature.title}</h2>
                  <p className="text-gray-600">{feature.description}</p>
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

export default Features; 