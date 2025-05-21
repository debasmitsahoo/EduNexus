import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Users, BookOpen, Calendar, FileText, MessageSquare } from 'lucide-react';

const CoachingCenters = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-deep-yellow" />,
      title: "Goal Setting",
      description: "Structured approach to setting and tracking student goals and progress."
    },
    {
      icon: <Users className="h-8 w-8 text-deep-yellow" />,
      title: "Student Management",
      description: "Comprehensive tools for managing student enrollment, attendance, and progress."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-deep-yellow" />,
      title: "Course Planning",
      description: "Flexible course scheduling and curriculum management for various subjects."
    },
    {
      icon: <Calendar className="h-8 w-8 text-deep-yellow" />,
      title: "Batch Management",
      description: "Efficient organization of student batches and class schedules."
    },
    {
      icon: <FileText className="h-8 w-8 text-deep-yellow" />,
      title: "Performance Tracking",
      description: "Detailed analytics and reporting for student performance and progress."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-deep-yellow" />,
      title: "Parent Communication",
      description: "Integrated platform for parent-teacher communication and progress updates."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">Coaching Centers Solution</h1>
            
            <div className="prose prose-lg mb-12">
              <p className="text-gray-600">
                Our coaching center management platform is designed to streamline operations and enhance student success. From batch management to performance tracking, we provide the tools you need to run an efficient and effective coaching center.
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
              <h2 className="text-2xl font-semibold text-navy-blue mb-4">Why Choose Our Coaching Centers Solution?</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Designed specifically for coaching centers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Flexible batch and schedule management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Comprehensive performance tracking
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Easy parent communication
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Dedicated support for coaching centers
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

export default CoachingCenters; 