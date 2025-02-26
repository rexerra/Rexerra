import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Business Process Outsourcing',
      excerpt: 'Explore how AI and automation are transforming the BPO industry and what it means for businesses.',
      author: 'David Anderson',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      category: 'BPO'
    },
    {
      id: 2,
      title: 'Leveraging Data Analytics for Business Growth',
      excerpt: 'Learn how data analytics can help identify opportunities and drive strategic decision-making.',
      author: 'Jennifer Chen',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      category: 'Analytics'
    },
    {
      id: 3,
      title: 'Web Development Trends in 2024',
      excerpt: 'Stay ahead of the curve with the latest web development technologies and best practices.',
      author: 'Mark Roberts',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
      category: 'Development'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Insights and Updates from Our Experts
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Featured post"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <span className="text-blue-600 font-semibold">Featured Post</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                Digital Transformation: A Comprehensive Guide
              </h2>
              <p className="text-gray-600 mb-6">
                Discover how digital transformation is reshaping industries and learn the key strategies for successful implementation. This comprehensive guide covers everything from planning to execution.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">John Smith</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">March 20, 2024</span>
                </div>
              </div>
              <Link
                to="/blog/digital-transformation-guide"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Read More
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600 text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600 text-sm">{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest insights and industry news
          </p>
          <form className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-r-md font-semibold hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;