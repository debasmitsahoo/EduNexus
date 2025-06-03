import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, BookOpen, Calendar, MessageSquare, FileText, Award } from 'lucide-react';

const StudentApp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Student App
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your complete learning companion in your pocket
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-deep-yellow text-navy-blue hover:bg-yellow-600 px-8 py-6 text-lg">
                Download for Android
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="bg-deep-yellow text-navy-blue hover:bg-yellow-600 px-8 py-6 text-lg">
                Download for iOS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Smartphone className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
              <p className="text-gray-600">
                Intuitive interface optimized for mobile devices
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BookOpen className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Course Materials</h3>
              <p className="text-gray-600">
                Access study materials and assignments anytime
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schedule Management</h3>
              <p className="text-gray-600">
                Track classes, exams, and important dates
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <MessageSquare className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Communication Hub</h3>
              <p className="text-gray-600">
                Connect with teachers and classmates
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FileText className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Library</h3>
              <p className="text-gray-600">
                Access e-books and study resources
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor academic performance and achievements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Students Love Our App</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Always Connected</h3>
                <p className="text-gray-600">
                  Stay updated with your academic life 24/7
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
                <p className="text-gray-600">
                  All your learning resources in one place
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                <p className="text-gray-600">
                  Engage with content through interactive features
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Offline Access</h3>
                <p className="text-gray-600">
                  Download materials for offline study
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Learning Experience?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download our Student App today and take control of your education
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-deep-yellow text-navy-blue hover:bg-yellow-600 px-8 py-6 text-lg">
              Get it on Google Play
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="bg-deep-yellow text-navy-blue hover:bg-yellow-600 px-8 py-6 text-lg">
              Download on App Store
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentApp; 