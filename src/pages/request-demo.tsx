import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RequestDemo = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // You can integrate with your backend or form service
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            className="mb-8 text-navy-blue hover:text-deep-yellow"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-navy-blue mb-4">Request a Demo</h1>
              <p className="text-lg text-gray-600">
                Experience how Feel Education can transform your institution. Schedule a personalized demo with our experts.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Work Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                  Institution Name
                </label>
                <Input
                  id="institution"
                  name="institution"
                  type="text"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="institutionType" className="block text-sm font-medium text-gray-700 mb-2">
                  Institution Type
                </label>
                <select
                  id="institutionType"
                  name="institutionType"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-deep-yellow focus:border-transparent"
                >
                  <option value="">Select Institution Type</option>
                  <option value="k12">K-12 School</option>
                  <option value="higher-education">Higher Education</option>
                  <option value="coaching">Coaching Center</option>
                  <option value="vocational">Vocational Institute</option>
                  <option value="language">Language School</option>
                  <option value="international">International School</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full"
                  placeholder="Tell us about your requirements and what you'd like to see in the demo..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="h-4 w-4 text-deep-yellow focus:ring-deep-yellow border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="/privacy-policy" className="text-deep-yellow hover:text-yellow-600">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button type="submit" className="w-full primary-btn text-lg">
                Schedule Demo
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestDemo; 