
import React from 'react';
import { GraduationCap, Users, BookOpen, FileText } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => {
  return (
    <div className="feature-card text-center group">
      <div className="bg-navy-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-deep-yellow">
        <Icon className="h-8 w-8 text-deep-yellow transition-all duration-300 group-hover:text-navy-blue" />
      </div>
      <h3 className="text-xl font-bold text-navy-blue mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Academic Management',
      description: 'Complete curriculum planning, grading systems, and progress tracking for your students.'
    },
    {
      icon: Users,
      title: 'Student Lifecycle',
      description: 'Track the entire student journey from admission to alumni with detailed profiles and analytics.'
    },
    {
      icon: FileText,
      title: 'Fees Automation with Autopay',
      description: 'Automated billing, reminders, and recurring payment options for hassle-free fee collection.'
    },
    {
      icon: BookOpen,
      title: 'Teacher & Staff Dashboard',
      description: 'Specialized interfaces for faculty to manage classes, assignments, and student performance.'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Core Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of tools designed to transform how educational institutions operate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
