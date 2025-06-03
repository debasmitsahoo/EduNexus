import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  school, 
  rating,
  image
}: { 
  quote: string; 
  author: string; 
  role: string; 
  school: string;
  rating: number;
  image: string;
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-deep-yellow">
            <img 
              src={image} 
              alt={author} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-deep-yellow rounded-full p-1">
            <Quote className="h-4 w-4 text-navy-blue" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-navy-blue">{author}</h3>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-deep-yellow font-medium">{school}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-5 w-5",
              i < rating ? "text-deep-yellow fill-deep-yellow" : "text-gray-200"
            )}
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Feel Education has transformed how we manage our school. The fee management system is intuitive and the reporting features are exactly what we needed.",
      author: "Dr. Sarah Johnson",
      role: "Principal",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The student management features are comprehensive and easy to use. It's made our administrative tasks much more efficient.",
      author: "Michael Chen",
      role: "Administrative Director",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "As a teacher, I love how easy it is to track student progress and communicate with parents. The interface is clean and user-friendly.",
      author: "Priya Sharma",
      role: "Senior Teacher",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
      {
        quote: "Feel Education has transformed our fee collection process. The intuitive dashboard and automated reminders have saved us countless hours each month.",
        author: "Rupali Nayak",
        role: "Principal",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
      },
      {
        quote: "As a coordinator, I appreciate how effortlessly we track attendance and generate academic reports now. The cloud-based system keeps everyone—staff, parents, and students—on the same page.",
        author: "Bijay Patnaik",
        role: "Academic Coordinator",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
      },
      {
        quote: "The mobile attendance feature and detailed analytics have been game-changers. Feel Education continuously evolves, and we look forward to future updates based on our feedback.",
        author: "Prashanth Kumar",
        role: "Senior Teacher",
        rating: 5,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
      }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="bg-deep-yellow/20 text-navy-blue font-semibold px-4 py-1 rounded-full text-sm mb-4 inline-block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of educational institutions that trust Feel Education for their management needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex -space-x-2">
              {testimonials.map((_, index) => (
                <div key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={testimonials[index].image} 
                    alt={`User ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              Join <span className="font-semibold text-navy-blue">100+</span> satisfied institutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
