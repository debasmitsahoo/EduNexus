
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  institution: string;
  location: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Feel Education has completely transformed how we manage our administrative tasks. The autopay feature alone has increased our on-time fee collection by 87%.",
      author: "Dr. Rajesh Kumar",
      position: "Principal",
      institution: "ABC Academy",
      location: "Bhubaneswar"
    },
    {
      id: 2,
      content: "The academic management module has made curriculum planning and progress tracking so much easier. Our teachers can now focus more on teaching rather than paperwork.",
      author: "Prof. Meera Patel",
      position: "Vice Principal",
      institution: "Sunrise School",
      location: "Delhi"
    },
    {
      id: 3,
      content: "We've been using Feel Education for over a year now, and it's been a game-changer for our institution. The support team is also incredibly responsive.",
      author: "Arjun Sharma",
      position: "Administrative Director",
      institution: "Knowledge Academy",
      location: "Mumbai"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-navy-blue text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Trusted by educational institutions across the country.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-deep-yellow/30" />
            
            <div key={testimonials[currentIndex].id} className="mt-8 animate-fade-in">
              <p className="text-xl italic mb-6">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-deep-yellow">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-gray-300">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].institution}, {testimonials[currentIndex].location}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-gray-500 text-gray-300 hover:bg-deep-yellow hover:text-navy-blue"
                    onClick={prevTestimonial}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-gray-500 text-gray-300 hover:bg-deep-yellow hover:text-navy-blue"
                    onClick={nextTestimonial}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "w-8 bg-deep-yellow" : "w-2 bg-gray-400"
                }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
