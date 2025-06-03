import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Users, Calendar, MessageSquare, FileText, Award } from 'lucide-react';

const StaffApp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Staff App
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Empower your teaching staff with mobile-first tools
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
              <h3 className="text-xl font-semibold mb-2">Mobile Teaching</h3>
              <p className="text-gray-600">
                Conduct classes and manage students on the go
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Student Management</h3>
              <p className="text-gray-600">
                Track attendance and monitor student progress
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schedule Management</h3>
              <p className="text-gray-600">
                View and manage your teaching schedule
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <MessageSquare className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Communication Tools</h3>
              <p className="text-gray-600">
                Connect with students, parents, and staff
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FileText className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resource Sharing</h3>
              <p className="text-gray-600">
                Share and manage teaching materials
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
              <p className="text-gray-600">
                Track and analyze teaching effectiveness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Staff Choose Our App</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Time Efficiency</h3>
                <p className="text-gray-600">
                  Streamline administrative tasks and focus on teaching
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Communication</h3>
                <p className="text-gray-600">
                  Stay connected with students and parents anytime
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Resource Management</h3>
                <p className="text-gray-600">
                  Easy access to teaching materials and resources
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Growth</h3>
                <p className="text-gray-600">
                  Track performance and identify areas for improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Teaching Experience?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download our Staff App today and enhance your teaching capabilities
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

export default StaffApp; 