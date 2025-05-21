import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wrench, Users, BookOpen, Calendar, FileText, MessageSquare } from 'lucide-react';

const VocationalInstitutes = () => {
  const features = [
    {
      icon: <Wrench className="h-8 w-8 text-deep-yellow" />,
      title: "Skill Development",
      description: "Comprehensive tools for managing vocational training programs and skill assessments."
    },
    {
      icon: <Users className="h-8 w-8 text-deep-yellow" />,
      title: "Student Management",
      description: "End-to-end student lifecycle management from enrollment to certification."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-deep-yellow" />,
      title: "Course Management",
      description: "Flexible curriculum planning and implementation for various vocational courses."
    },
    {
      icon: <Calendar className="h-8 w-8 text-deep-yellow" />,
      title: "Schedule Management",
      description: "Efficient organization of practical sessions, workshops, and assessments."
    },
    {
      icon: <FileText className="h-8 w-8 text-deep-yellow" />,
      title: "Certification Tracking",
      description: "Streamlined process for managing certifications and industry-recognized credentials."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-deep-yellow" />,
      title: "Industry Connect",
      description: "Platform for connecting students with industry partners and job opportunities."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">Vocational Institutes Solution</h1>
            
            <div className="prose prose-lg mb-12">
              <p className="text-gray-600">
                Our vocational training management platform is designed to help institutes deliver high-quality skill development programs. From practical training to certification management, we provide the tools you need to prepare students for successful careers.
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
              <h2 className="text-2xl font-semibold text-navy-blue mb-4">Why Choose Our Vocational Institutes Solution?</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Designed specifically for vocational training
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Comprehensive skill assessment tools
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Industry-aligned certification management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Practical training session management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Dedicated support for vocational institutes
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

export default VocationalInstitutes; 