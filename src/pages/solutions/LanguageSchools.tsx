import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Languages, Users, BookOpen, Calendar, FileText, MessageSquare } from 'lucide-react';

const LanguageSchools = () => {
  const features = [
    {
      icon: <Languages className="h-8 w-8 text-deep-yellow" />,
      title: "Language Proficiency",
      description: "Comprehensive tools for assessing and tracking language learning progress."
    },
    {
      icon: <Users className="h-8 w-8 text-deep-yellow" />,
      title: "Student Management",
      description: "End-to-end student lifecycle management from enrollment to certification."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-deep-yellow" />,
      title: "Course Planning",
      description: "Flexible curriculum planning for various language proficiency levels."
    },
    {
      icon: <Calendar className="h-8 w-8 text-deep-yellow" />,
      title: "Class Scheduling",
      description: "Efficient organization of language classes, practice sessions, and assessments."
    },
    {
      icon: <FileText className="h-8 w-8 text-deep-yellow" />,
      title: "Progress Tracking",
      description: "Detailed analytics and reporting for student language proficiency."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-deep-yellow" />,
      title: "Interactive Learning",
      description: "Engaging tools for language practice and cultural immersion."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-navy-blue mb-8">Language Schools Solution</h1>
            
            <div className="prose prose-lg mb-12">
              <p className="text-gray-600">
                Our language school management platform is designed to help institutions deliver effective language education. From proficiency assessment to cultural immersion, we provide the tools you need to create an engaging language learning environment.
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
              <h2 className="text-2xl font-semibold text-navy-blue mb-4">Why Choose Our Language Schools Solution?</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Designed specifically for language education
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Comprehensive proficiency assessment tools
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Interactive learning features
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Cultural immersion support
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-yellow rounded-full mt-2 mr-2"></span>
                  Dedicated support for language schools
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

export default LanguageSchools; 