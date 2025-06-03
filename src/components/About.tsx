import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">Our Vision</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            At Feel Education, we believe that educational institutions deserve technology that's as forward-thinking as they are. Our mission is to digitize and streamline administrative operations, allowing schools to focus on what really matters – providing quality education.
          </p>
          
          <div className="bg-navy-blue/5 rounded-xl p-8 mb-8">
            <blockquote className="text-lg md:text-xl text-navy-blue italic">
              Welcome to Feel Education. We created this ERP to simplify fee collection, admissions, attendance, and academic reporting in one cloud-based platform. With customizable dashboards and real-time portals, administrators, teachers, parents, and students stay connected effortlessly. We remain dedicated to adding new features—guided by your feedback—to help your institution thrive.
            </blockquote>
            <p className="text-deep-yellow font-semibold mt-4">— Sharat Chandra Sahoo, Founder</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-[calc(50%-12px)]">
              <h3 className="text-xl font-bold text-navy-blue mb-3">Our Values</h3>
              <p className="text-gray-600">
                Innovation, Accessibility, Reliability, and Educational Excellence drive everything we do.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-[calc(50%-12px)]">
              <h3 className="text-xl font-bold text-navy-blue mb-3">Our Impact</h3>
              <p className="text-gray-600">
                Supporting over 500+ institutions and helping manage education for 100,000+ students across the country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
