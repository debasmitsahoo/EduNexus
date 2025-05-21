import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, Target, Users, BarChart, Award, Clock } from 'lucide-react';

const CorporateTraining = () => {
  const features = [
    {
      icon: <Briefcase className="h-8 w-8 text-deep-yellow" />,
      title: "Professional Development",
      description: "Comprehensive training programs designed to enhance employee skills and career growth."
    },
    {
      icon: <Target className="h-8 w-8 text-deep-yellow" />,
      title: "Skill Assessment",
      description: "Advanced tools to evaluate employee competencies and identify training needs."
    },
    {
      icon: <Users className="h-8 w-8 text-deep-yellow" />,
      title: "Team Learning",
      description: "Collaborative learning environments that foster team growth and knowledge sharing."
    },
    {
      icon: <BarChart className="h-8 w-8 text-deep-yellow" />,
      title: "Performance Tracking",
      description: "Detailed analytics to measure training effectiveness and employee progress."
    },
    {
      icon: <Award className="h-8 w-8 text-deep-yellow" />,
      title: "Certification Management",
      description: "Streamlined process for managing professional certifications and compliance training."
    },
    {
      icon: <Clock className="h-8 w-8 text-deep-yellow" />,
      title: "Flexible Learning",
      description: "On-demand and scheduled training options to accommodate busy professionals."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">Corporate Training Solution</h1>
            
            <div className="prose prose-lg mb-12">
              <p className="text-gray-600">
                Our corporate training platform empowers organizations to develop their workforce effectively. From onboarding to advanced professional development, we provide the tools and resources needed to build a skilled and competitive team.
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
              <h2 className="text-2xl font-semibold text-navy-blue mb-4">Why Choose Our Corporate Training Solution?</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Customizable training programs for any industry
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Integrated learning management system
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Comprehensive reporting and analytics
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Mobile-friendly learning experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Dedicated support for corporate training needs
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

export default CorporateTraining; 