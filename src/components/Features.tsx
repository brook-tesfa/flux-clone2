import React from 'react';
import { Clock, Image, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Quick Training',
    description: 'Train your custom AI model in just 20 minutes with as few as 4 images.'
  },
  {
    icon: Image,
    title: 'Full Ownership',
    description: 'Retain complete rights to all images generated using your custom model.'
  },
  {
    icon: Zap,
    title: 'Easy to Use',
    description: 'User-friendly interface with step-by-step guidance throughout the process.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your images and models are protected with enterprise-grade security.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to create and train your custom AI models
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;