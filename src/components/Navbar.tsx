import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BarChart2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BarChart2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Rexerra</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</Link>
              <Link to="/portfolio" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Portfolio</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Blog</Link>
              <Link to="/contact" className="block px-3 py-2 bg-blue-600 text-white rounded-md">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;