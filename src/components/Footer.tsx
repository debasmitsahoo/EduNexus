import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
  ];

  const solutions = [
    { name: "K12 Schools", href: "/solutions/k12-schools" },
    { name: "Higher Education", href: "/solutions/higher-education" },
    { name: "Coaching Centers", href: "/solutions/coaching-centers" },
    { name: "Language Schools", href: "/solutions/language-schools" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <footer className="bg-navy-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-deep-yellow mr-2" />
              <span className="font-bold text-xl">EduNexus</span>
            </div>
            <p className="text-gray-300">
              Transforming education through innovative technology solutions for institutions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-deep-yellow">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-deep-yellow">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-deep-yellow">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-deep-yellow">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com/debasmitsahoo/EduNexus" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-deep-yellow">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-deep-yellow transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/fee-management" className="text-gray-300 hover:text-deep-yellow transition-colors">
                  Fee Management
                </Link>
              </li>
              <li>
                <Link to="/solutions/admin-dashboard" className="text-gray-300 hover:text-deep-yellow transition-colors">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/solutions/student-app" className="text-gray-300 hover:text-deep-yellow transition-colors">
                  Student App
                </Link>
              </li>
              <li>
                <Link to="/solutions/staff-app" className="text-gray-300 hover:text-deep-yellow transition-colors">
                  Staff App
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-deep-yellow mt-1" />
                <span className="text-gray-300">
                  Bhubaneswar, Odisha<br />
                  India - 751006
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-deep-yellow" />
                <a href="mailto:debasmitfordev@gmail.com" className="text-gray-300 hover:text-deep-yellow">
                  support@edunexus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} EduNexus. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-deep-yellow text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm mb-2">
              Built with ❤️ by Group 2
            </p>
            <p className="text-gray-400 text-xs">
              Disclaimer: This project is the sole creation of Group 2 and does not have any connection with any entity named EduNexus. The name "EduNexus" was generated using ChatGPT and is used for demonstration purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
