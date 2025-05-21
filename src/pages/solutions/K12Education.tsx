import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { School, BookOpen, Users, Calendar, FileText, MessageSquare } from 'lucide-react';

const K12Education = () => {
  const features = [
    {
      icon: <School className="h-8 w-8 text-deep-yellow" />,
      title: "Classroom Management",
      description: "Comprehensive tools for lesson planning, attendance tracking, and classroom organization."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-deep-yellow" />,
      title: "Curriculum Planning",
      description: "Streamlined curriculum development and implementation across all grade levels."
    },
    {
      icon: <Users className="h-8 w-8 text-deep-yellow" />,
      title: "Student Engagement",
      description: "Interactive learning tools and activities to keep students motivated and involved."
    },
    {
      icon: <Calendar className="h-8 w-8 text-deep-yellow" />,
      title: "School Calendar",
      description: "Integrated calendar system for managing school events, holidays, and academic schedules."
    },
    {
      icon: <FileText className="h-8 w-8 text-deep-yellow" />,
      title: "Progress Tracking",
      description: "Detailed student progress monitoring and report generation for teachers and parents."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-deep-yellow" />,
      title: "Parent Communication",
      description: "Secure platform for parent-teacher communication and student progress updates."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">K-12 Education Solution</h1>
            
            <div className="prose prose-lg mb-12">
              <p className="text-gray-600">
                Our K-12 education platform provides a comprehensive suite of tools designed specifically for primary and secondary education. From classroom management to parent communication, we help schools create an engaging and effective learning environment.
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
              <h2 className="text-2xl font-semibold text-navy-blue mb-4">Why Choose Our K-12 Education Solution?</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Designed specifically for K-12 education needs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Easy-to-use interface for teachers and administrators
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Comprehensive parent communication tools
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Secure and compliant with education standards
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Dedicated support for K-12 institutions
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

export default K12Education; 