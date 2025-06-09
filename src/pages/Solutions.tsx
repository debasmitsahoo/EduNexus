import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Users, BookOpen, Calendar, FileText, BarChart } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <GraduationCap className="h-12 w-12 text-deep-yellow" />,
      title: "Student Management",
      description: "Comprehensive student information management, attendance tracking, and academic performance monitoring.",
      features: [
        "Student profile management",
        "Attendance tracking",
        "Academic performance monitoring",
        "Behavior tracking",
        "Document management"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-deep-yellow" />,
      title: "Staff Management",
      description: "Efficient staff management with attendance, payroll, and performance tracking capabilities.",
      features: [
        "Staff profile management",
        "Attendance tracking",
        "Payroll management",
        "Performance evaluation",
        "Leave management"
      ]
    },
    {
      icon: <BookOpen className="h-12 w-12 text-deep-yellow" />,
      title: "Academic Management",
      description: "Streamlined curriculum management, class scheduling, and examination handling.",
      features: [
        "Curriculum planning",
        "Class scheduling",
        "Examination management",
        "Grade management",
        "Report card generation"
      ]
    },
    {
      icon: <Calendar className="h-12 w-12 text-deep-yellow" />,
      title: "Fee Management",
      description: "Comprehensive fee management system for educational institutions with flexible payment options.",
      features: [
        "Fee collection",
        "Payment tracking",
        "Receipt generation",
        "Financial reporting",
        "Multiple payment methods"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-deep-yellow" />,
      title: "Document Management",
      description: "Centralized document management system for all institutional records and communications.",
      features: [
        "Digital document storage",
        "Document version control",
        "Secure access control",
        "Document sharing",
        "Automated backups"
      ]
    },
    {
      icon: <BarChart className="h-12 w-12 text-deep-yellow" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and reporting tools for data-driven decision making.",
      features: [
        "Performance analytics",
        "Financial reports",
        "Attendance reports",
        "Custom report generation",
        "Data visualization"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-navy-blue mb-4">Our Solutions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational management solutions designed to streamline your institution's operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-navy-blue mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-deep-yellow mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://edunexus.com/login" 
              className="inline-block bg-deep-yellow text-white px-8 py-3 rounded-lg font-semibold hover:bg-deep-yellow/90 transition-colors"
            >
              Access Our Solutions
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions; 