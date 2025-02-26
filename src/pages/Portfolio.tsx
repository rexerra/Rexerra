import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Global E-commerce Analytics Platform',
      category: 'Data Analytics',
      description: 'Developed a comprehensive analytics platform for a global e-commerce company, resulting in a 40% improvement in decision-making efficiency.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      technologies: ['Python', 'Machine Learning', 'AWS', 'Tableau']
    },
    {
      id: 2,
      title: 'Customer Service Automation Solution',
      category: 'BPO/KPO',
      description: 'Implemented an AI-powered customer service system that reduced response times by 60% and improved customer satisfaction scores.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Computing']
    },
    {
      id: 3,
      title: 'Financial Services Web Platform',
      category: 'Web Development',
      description: 'Built a secure, scalable web platform for a leading financial services provider, handling millions of transactions monthly.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Showcasing Our Success Stories and Innovations
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Featured project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured Project
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">Enterprise Data Analytics Platform</h2>
                <p className="text-gray-600 mb-6">
                  A comprehensive data analytics solution that transformed business intelligence for a Fortune 500 company. The platform processes millions of data points daily, providing real-time insights and predictive analytics.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Key Achievements:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Reduced data processing time by 75%</li>
                    <li>Improved decision-making accuracy by 40%</li>
                    <li>Saved $2M in operational costs annually</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Big Data', 'Machine Learning', 'Cloud Computing', 'Real-time Analytics'].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  View Case Study
                  <ExternalLink className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;