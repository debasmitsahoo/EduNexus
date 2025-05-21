import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="container mx-auto">
        {/* CTA Section */}
        <div className="py-16 px-6 md:px-12 border-b border-white/10">
          <div className="bg-deep-yellow rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-2">Ready to transform your institution?</h2>
              <p className="text-navy-blue/80">
                Join hundreds of schools already using Feel Education.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-navy-blue text-white hover:bg-navy-blue/90" asChild>
                <a href="/request-demo">
                  Book a Demo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white">
                Start for Free
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Footer */}
        <div className="py-12 px-6 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-deep-yellow mr-2" />
              <span className="font-bold text-xl">Feel Education</span>
            </div>
            <p className="text-gray-300 mb-6">
              Smart ERP platform for schools and educational institutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-deep-yellow mr-2 mt-0.5" />
                <span>contact@feeleducation.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-deep-yellow mr-2 mt-0.5" />
                <span>+91 1234-567-890</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-deep-yellow mr-2 mt-0.5" />
                <span>Bhubaneswar, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="text-gray-300 hover:text-deep-yellow transition-colors">Features</a>
              </li>
              <li>
                <a href="/#benefits" className="text-gray-300 hover:text-deep-yellow transition-colors">Benefits</a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-gray-300 hover:text-deep-yellow transition-colors">How It Works</a>
              </li>
              <li>
                <a href="/#pricing" className="text-gray-300 hover:text-deep-yellow transition-colors">Pricing</a>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-deep-yellow transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-deep-yellow transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="/solutions/k12-schools" className="text-gray-300 hover:text-deep-yellow transition-colors">K-12 Schools</a>
              </li>
              <li>
                <a href="/solutions/higher-education" className="text-gray-300 hover:text-deep-yellow transition-colors">Higher Education</a>
              </li>
              <li>
                <a href="/solutions/coaching-centers" className="text-gray-300 hover:text-deep-yellow transition-colors">Coaching Centers</a>
              </li>
              <li>
                <a href="/solutions/vocational-institutes" className="text-gray-300 hover:text-deep-yellow transition-colors">Vocational Institutes</a>
              </li>
              <li>
                <a href="/solutions/language-schools" className="text-gray-300 hover:text-deep-yellow transition-colors">Language Schools</a>
              </li>
              <li>
                <a href="/solutions/international-schools" className="text-gray-300 hover:text-deep-yellow transition-colors">International Schools</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="flex">
              <Input 
                type="email" 
                name="email"
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-l-md rounded-r-none focus-visible:ring-deep-yellow"
                required
              />
              <Button type="submit" className="bg-deep-yellow text-navy-blue hover:bg-yellow-600 rounded-l-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 px-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex flex-col items-center md:items-start">
            <div>© {new Date().getFullYear()} Feel Education. All rights reserved.</div>
            <div className="mt-2 text-deep-yellow">Built with ❤️ by Debasmit</div>
          </div>
          <div className="flex mt-4 md:mt-0">
            <a href="/privacy-policy" className="mr-4 hover:text-deep-yellow">Privacy Policy</a>
            <a href="/terms-of-service" className="mr-4 hover:text-deep-yellow">Terms of Service</a>
            <a href="/cookie-policy" className="hover:text-deep-yellow">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
