import React from 'react';
import { Users, Database, Globe, BarChart, Code, FileText, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive Solutions for Modern Business Challenges
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {/* BPO/KPO Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Users className="h-16 w-16 text-blue-600 mb-6" />
                <h2 className="text-3xl font-bold mb-4">BPO/KPO Solutions</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Optimize your business processes with our comprehensive outsourcing solutions. We handle everything from customer service to complex knowledge-based operations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Quality Assurance & Monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span>24/7 Customer Support</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Back Office Operations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-4">
                  <li className="text-gray-600">• Multilingual Support Teams</li>
                  <li className="text-gray-600">• Custom Process Design</li>
                  <li className="text-gray-600">• Performance Analytics</li>
                  <li className="text-gray-600">• Scalable Solutions</li>
                  <li className="text-gray-600">• Quality Management</li>
                </ul>
              </div>
            </div>

            {/* Data Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Database className="h-16 w-16 text-blue-600 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Data Analytics</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Transform your raw data into actionable insights. Our analytics solutions help you make data-driven decisions and identify growth opportunities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <BarChart className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Predictive Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Data Security & Compliance</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Custom Reports & Dashboards</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-4">
                  <li className="text-gray-600">• Business Intelligence</li>
                  <li className="text-gray-600">• Machine Learning Models</li>
                  <li className="text-gray-600">• Real-time Analytics</li>
                  <li className="text-gray-600">• Data Visualization</li>
                  <li className="text-gray-600">• Trend Analysis</li>
                </ul>
              </div>
            </div>

            {/* Web Development */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Globe className="h-16 w-16 text-blue-600 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Web Development</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Create powerful digital experiences with our expert web development services. We build scalable, secure, and user-friendly web applications.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Code className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Custom Web Applications</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Security & Performance</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Responsive Design</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-4">
                  <li className="text-gray-600">• Modern Technologies</li>
                  <li className="text-gray-600">• SEO Optimization</li>
                  <li className="text-gray-600">• Mobile-First Approach</li>
                  <li className="text-gray-600">• API Integration</li>
                  <li className="text-gray-600">• Performance Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can help transform your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;