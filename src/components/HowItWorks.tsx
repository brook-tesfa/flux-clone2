import React from 'react';
import { Upload, Cpu, MessageSquare, Bell } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Images',
    description: 'Start by uploading at least 4 high-quality images to train your model.'
  },
  {
    icon: Cpu,
    title: 'Train Model',
    description: 'Our AI processes your images and creates a custom model in about 20 minutes.'
  },
  {
    icon: MessageSquare,
    title: 'Generate Images',
    description: 'Use text prompts to generate unique images based on your trained model.'
  },
  {
    icon: Bell,
    title: 'Get Notified',
    description: 'Receive email notifications when your model is ready to use.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create your custom AI model in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent transform translate-x-1/2"></div>
              )}
              <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 relative z-10">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;