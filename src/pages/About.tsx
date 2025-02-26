import React from 'react';
import { Award, Users, Target, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Rexerra</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Driving Business Excellence Through Innovation and Expertise
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To empower businesses with cutting-edge solutions that drive growth, efficiency, and innovation. We are committed to delivering exceptional value through our expertise in BPO/KPO, Data Analytics, and Web Development.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the global leader in business consulting, recognized for our innovative solutions, exceptional service, and commitment to client success. We aim to shape the future of business through technology and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for the highest quality in everything we do</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">Working together to achieve exceptional results</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Embracing new ideas and creative solutions</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">Maintaining the highest ethical standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts behind Rexerra's success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'David Anderson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256',
                description: '15+ years of consulting experience'
              },
              {
                name: 'Jennifer Chen',
                role: 'Head of Analytics',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256',
                description: 'Data science expert & researcher'
              },
              {
                name: 'Mark Roberts',
                role: 'Technical Director',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256',
                description: 'Technology innovator & strategist'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;