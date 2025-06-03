import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap } from 'lucide-react';

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationForm = ({ isOpen, onClose }: RegistrationFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] bg-white rounded-xl shadow-2xl">
        <DialogHeader className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-deep-yellow/10 p-3 rounded-full">
              <GraduationCap className="h-8 w-8 text-deep-yellow" />
            </div>
          </div>
          <DialogTitle className="text-3xl font-bold text-navy-blue text-center">
            Create Your School
          </DialogTitle>
          <p className="text-gray-500 text-center mt-2">
            Fill in the details below to start your journey with Feel Education
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="schoolName" className="text-navy-blue font-medium text-sm">
                School Name *
              </Label>
              <Input
                id="schoolName"
                placeholder="Enter Your School Name"
                required
                className="border-gray-300 focus:border-deep-yellow focus:ring-deep-yellow h-12 rounded-lg transition-all duration-200"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-navy-blue font-medium text-sm">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Your School Email"
                required
                className="border-gray-300 focus:border-deep-yellow focus:ring-deep-yellow h-12 rounded-lg transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-navy-blue font-medium text-sm">
                Mobile *
              </Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="Enter Your School Mobile Number"
                required
                className="border-gray-300 focus:border-deep-yellow focus:ring-deep-yellow h-12 rounded-lg transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-navy-blue font-medium text-sm">
                Address *
              </Label>
              <Input
                id="address"
                placeholder="Enter Your School Address"
                required
                className="border-gray-300 focus:border-deep-yellow focus:ring-deep-yellow h-12 rounded-lg transition-all duration-200"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="tagline" className="text-navy-blue font-medium text-sm">
                Tagline *
              </Label>
              <Input
                id="tagline"
                placeholder="Enter Your School Tagline"
                required
                className="border-gray-300 focus:border-deep-yellow focus:ring-deep-yellow h-12 rounded-lg transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3 pt-6 border-t border-gray-200">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white px-8 h-12 rounded-lg transition-all duration-200"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-deep-yellow text-white hover:bg-deep-yellow/90 px-8 h-12 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Trial
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm; 