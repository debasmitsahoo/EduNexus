import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, Users, BookOpen, Calendar, FileText, MessageSquare } from 'lucide-react';

const InternationalSchools = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-deep-yellow" />,
      title: "Global Curriculum",
      description: "Support for multiple international curricula and educational standards."
    },
    {
      icon: <Users className="h-8 w-8 text-deep-yellow" />,
      title: "Student Management",
      description: "Comprehensive tools for managing international student enrollment and records."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-deep-yellow" />,
      title: "Curriculum Planning",
      description: "Flexible curriculum management for various international education programs."
    },
    {
      icon: <Calendar className="h-8 w-8 text-deep-yellow" />,
      title: "Academic Calendar",
      description: "Multi-timezone calendar management for international school operations."
    },
    {
      icon: <FileText className="h-8 w-8 text-deep-yellow" />,
      title: "Document Management",
      description: "Secure handling of international student records and certifications."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-deep-yellow" />,
      title: "Global Communication",
      description: "Multi-language support for parent-teacher communication."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">International Schools Solution</h1>
            
            <div className="prose prose-lg mb-12">
              <p className="text-gray-600">
                Our international school management platform is designed to meet the unique needs of global education institutions. From multi-curriculum support to international student management, we provide the tools you need to deliver world-class education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">{feature.icon}</div>
                  <h2 className="text-2xl font-semibold text-navy-blue mb-3">{feature.title}</h2>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-navy-blue/5 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-navy-blue mb-4">Why Choose Our International Schools Solution?</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Designed specifically for international education
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Multi-curriculum support
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Global student management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Multi-language support
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Dedicated support for international schools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InternationalSchools; 