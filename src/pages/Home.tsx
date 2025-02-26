import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Database, Globe, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with Expert Consulting
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Innovative solutions in BPO/KPO, Data Analytics, and Web Development
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">BPO/KPO Solutions</h3>
              <p className="text-gray-600 mb-4">
                Streamline your operations with our comprehensive business process outsourcing services.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Database className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-4">
                Transform your data into actionable insights with our advanced analytics solutions.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Globe className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Create powerful digital experiences with our custom web development services.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Rexerra</h2>
            <p className="text-xl text-gray-600">Partner with us for unmatched expertise and results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Seasoned professionals with deep industry knowledge'
              },
              {
                title: 'Proven Track Record',
                description: 'Successfully delivered projects across various sectors'
              },
              {
                title: 'Innovative Solutions',
                description: 'Cutting-edge approaches to complex challenges'
              },
              {
                title: 'Dedicated Support',
                description: '24/7 support and maintenance services'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechCorp',
                content: 'Rexerra transformed our data analytics capabilities, leading to a 40% increase in operational efficiency.'
              },
              {
                name: 'Michael Chen',
                role: 'CTO, InnovateCo',
                content: 'The web development team at Rexerra delivered beyond our expectations. Their expertise and professionalism are unmatched.'
              },
              {
                name: 'Emily Brown',
                role: 'Operations Director, GlobalTech',
                content: 'Their BPO solutions helped us streamline our processes and reduce costs by 30%. Highly recommended!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how we can help you achieve your goals.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;