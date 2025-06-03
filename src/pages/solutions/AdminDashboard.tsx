import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, LayoutDashboard, Users, BookOpen, Calendar, FileText, Settings } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Admin Dashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive management system for educational institutions
            </p>
            <Button className="bg-deep-yellow text-navy-blue hover:bg-yellow-600 px-8 py-6 text-lg">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <LayoutDashboard className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Centralized Control</h3>
              <p className="text-gray-600">
                Manage all aspects of your institution from a single dashboard
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Student Management</h3>
              <p className="text-gray-600">
                Complete student information and academic tracking
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BookOpen className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Academic Planning</h3>
              <p className="text-gray-600">
                Curriculum management and course scheduling
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Attendance Tracking</h3>
              <p className="text-gray-600">
                Automated attendance system with reporting
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FileText className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Document Management</h3>
              <p className="text-gray-600">
                Secure storage and organization of all institutional documents
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Settings className="h-12 w-12 text-deep-yellow mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customizable Settings</h3>
              <p className="text-gray-600">
                Flexible configuration to match your institution's needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Admin Dashboard?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Streamlined Operations</h3>
                <p className="text-gray-600">
                  Reduce administrative workload with automated processes
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Decisions</h3>
                <p className="text-gray-600">
                  Access comprehensive analytics and insights
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Communication</h3>
                <p className="text-gray-600">
                  Integrated messaging system for staff and students
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-deep-yellow/10 p-3 rounded-full">
                <div className="h-6 w-6 bg-deep-yellow rounded-full flex items-center justify-center text-white font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">
                  Enterprise-grade security with regular backups
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Institution?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of our comprehensive Admin Dashboard
          </p>
          <Button className="bg-deep-yellow text-navy-blue hover:bg-yellow-600 px-8 py-6 text-lg">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard; 