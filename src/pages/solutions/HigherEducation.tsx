import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Users, BookOpen, Calendar, FileText, MessageSquare } from 'lucide-react';

const HigherEducation = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-deep-yellow" />,
      title: "Academic Excellence",
      description: "Advanced tools for course management, research tracking, and academic program administration."
    },
    {
      icon: <Users className="h-8 w-8 text-deep-yellow" />,
      title: "Student Lifecycle",
      description: "End-to-end student management from admission to graduation, including alumni relations."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-deep-yellow" />,
      title: "Research Management",
      description: "Comprehensive tools for managing research projects, publications, and grant applications."
    },
    {
      icon: <Calendar className="h-8 w-8 text-deep-yellow" />,
      title: "Campus Management",
      description: "Efficient management of campus facilities, events, and resource allocation."
    },
    {
      icon: <FileText className="h-8 w-8 text-deep-yellow" />,
      title: "Document Control",
      description: "Secure management of academic records, research papers, and administrative documents."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-deep-yellow" />,
      title: "Collaboration Hub",
      description: "Integrated platform for faculty, students, and researchers to collaborate effectively."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">Higher Education Solution</h1>
            
            <div className="prose prose-lg mb-12">
              <p className="text-gray-600">
                Our comprehensive higher education management solution is designed to meet the complex needs of universities, colleges, and research institutions. From academic administration to research management, we provide the tools you need to excel in the modern educational landscape.
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
              <h2 className="text-2xl font-semibold text-navy-blue mb-4">Why Choose Our Higher Education Solution?</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Designed specifically for higher education institutions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Supports complex academic and research workflows
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Scalable for institutions of any size
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Advanced analytics and reporting capabilities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Dedicated support for higher education needs
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

export default HigherEducation; 