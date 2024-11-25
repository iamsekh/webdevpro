import React from 'react';
import { Code2, Smartphone, ShoppingBag, Palette, Shield, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Code2 className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Custom Web Development</h3>
              <p className="text-gray-600 mb-4">
                Bespoke websites and web applications built with cutting-edge technologies.
                We create scalable solutions that grow with your business.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• Full-stack development</li>
                <li>• API integration</li>
                <li>• Database design</li>
                <li>• Performance optimization</li>
              </ul>
              <Link to="/contact" className="text-indigo-600 font-medium hover:text-indigo-700">
                Get Started →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <ShoppingBag className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h3>
              <p className="text-gray-600 mb-4">
                Complete online store solutions with secure payment processing
                and inventory management systems.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• Shopping cart development</li>
                <li>• Payment gateway integration</li>
                <li>• Inventory management</li>
                <li>• Order processing systems</li>
              </ul>
              <Link to="/contact" className="text-indigo-600 font-medium hover:text-indigo-700">
                Get Started →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Smartphone className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Mobile-First Development</h3>
              <p className="text-gray-600 mb-4">
                Responsive websites that provide an optimal viewing experience
                across all devices and screen sizes.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• Responsive design</li>
                <li>• Cross-browser compatibility</li>
                <li>• Mobile optimization</li>
                <li>• Progressive Web Apps</li>
              </ul>
              <Link to="/contact" className="text-indigo-600 font-medium hover:text-indigo-700">
                Get Started →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Palette className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">
                User-centered design that creates intuitive and engaging digital experiences.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>• User Interface Design</li>
                <li>• User Experience Design</li>
                <li>• Wireframing & Prototyping</li>
                <li>• User Testing</li>
              </ul>
              <Link to="/contact" className="text-indigo-600 font-medium hover:text-indigo-700">
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <Link to="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;