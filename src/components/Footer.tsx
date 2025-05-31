import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/edunexus', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/edunexus', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/edunexus', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/edunexus', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/edunexus', label: 'YouTube' }
  ];

  return (
    <footer className="bg-navy-blue text-white">
      {/* Key Highlight Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white/5 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Key Highlight</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              This project is the sole creation of Debasmit Sahoo. It is not affiliated with any organization or entity named "EduNexus" - the name was suggested by ChatGPT and is used for demonstration purposes only.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-deep-yellow mr-2" />
              <span className="font-bold text-xl">EduNexus</span>
            </div>
            <p className="text-gray-400">
              Transforming education management through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-deep-yellow transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-deep-yellow transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-deep-yellow transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-deep-yellow transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-deep-yellow transition-colors">Benefits</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-deep-yellow transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-deep-yellow transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-deep-yellow transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="/solutions/k12-schools" className="text-gray-400 hover:text-deep-yellow transition-colors">K-12 Schools</a></li>
              <li><a href="/solutions/higher-education" className="text-gray-400 hover:text-deep-yellow transition-colors">Higher Education</a></li>
              <li><a href="/solutions/coaching-centers" className="text-gray-400 hover:text-deep-yellow transition-colors">Coaching Centers</a></li>
              <li><a href="/solutions/vocational-institutes" className="text-gray-400 hover:text-deep-yellow transition-colors">Vocational Institutes</a></li>
              <li><a href="/solutions/language-schools" className="text-gray-400 hover:text-deep-yellow transition-colors">Language Schools</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-deep-yellow mr-3 mt-1" />
                <span className="text-gray-400">debasmitfordev@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-deep-yellow mr-3 mt-1" />
                <span className="text-gray-400">Bhubaneswar, Odisha, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Debasmit Sahoo. All rights reserved.
            </p>
            <p className="text-deep-yellow text-sm font-medium">
              Built and Crafted with ❤️ by Debasmit Sahoo
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-gray-400 hover:text-deep-yellow transition-colors text-sm">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-deep-yellow transition-colors text-sm">Terms of Service</a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-deep-yellow transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
