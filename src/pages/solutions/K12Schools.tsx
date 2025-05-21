import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Users, BookOpen, Calendar, FileText, MessageSquare } from 'lucide-react';

const K12Schools = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-deep-yellow" />,
      title: "Academic Management",
      description: "Comprehensive tools for curriculum planning, lesson scheduling, and academic progress tracking."
    },
    {
      icon: <Users className="h-8 w-8 text-deep-yellow" />,
      title: "Student Management",
      description: "Complete student information system with attendance tracking, performance analytics, and behavior management."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-deep-yellow" />,
      title: "Learning Management",
      description: "Digital learning resources, assignment management, and online assessment tools."
    },
    {
      icon: <Calendar className="h-8 w-8 text-deep-yellow" />,
      title: "Schedule Management",
      description: "Efficient class scheduling, exam planning, and event management system."
    },
    {
      icon: <FileText className="h-8 w-8 text-deep-yellow" />,
      title: "Document Management",
      description: "Secure storage and management of student records, certificates, and administrative documents."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-deep-yellow" />,
      title: "Communication Hub",
      description: "Integrated communication platform for teachers, students, and parents."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">K-12 Schools Solution</h1>
            
            <div className="prose prose-lg mb-12">
              <p className="text-gray-600">
                Our comprehensive K-12 school management solution is designed to streamline operations and enhance the learning experience for schools of all sizes. From kindergarten to high school, we provide the tools you need to manage your institution effectively.
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
              <h2 className="text-2xl font-semibold text-navy-blue mb-4">Why Choose Our K-12 Solution?</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Tailored specifically for K-12 educational institutions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Easy to use for teachers, administrators, and parents
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Scalable to grow with your institution
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Comprehensive reporting and analytics
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Dedicated support and training
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

export default K12Schools; 