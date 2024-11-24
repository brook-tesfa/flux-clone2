import React, { useState } from 'react';
import { ImageUpload } from '../components/ImageUpload';
import { motion } from 'framer-motion';
import { User, Package, Palette, Dog, Box, Type, Pizza } from 'lucide-react';

const subjectTypes = [
  { id: 'man', icon: User, label: 'Man' },
  { id: 'woman', icon: User, label: 'Woman' },
  { id: 'product', icon: Package, label: 'Product' },
  { id: 'style', icon: Palette, label: 'Style' },
  { id: 'object', icon: Box, label: 'Object' },
  { id: 'font', icon: Type, label: 'Font' },
  { id: 'pet', icon: Dog, label: 'Pet' },
  { id: 'food', icon: Pizza, label: 'Food' },
];

export const ModelTraining = () => {
  const [modelName, setModelName] = useState('');
  const [selectedType, setSelectedType] = useState('');

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="py-6">
          <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-4 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-purple-300 font-medium">Training models is only available on upgraded plans</p>
                <p className="text-sm text-purple-300/70">Upgrade to a paid plan to train your own models (starting at $16/mo)</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Unlock Training
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-6">Train Model</h2>
              <p className="text-gray-400 mb-8">Choose a name, type, and upload at least 4 photos to get started.</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={modelName}
                    onChange={(e) => setModelName(e.target.value)}
                    placeholder="e.g. Natalie Headshots"
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject Type</label>
                  <div className="grid grid-cols-4 gap-2">
                    {subjectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`p-4 rounded-lg border flex flex-col items-center gap-2 transition-colors
                          ${selectedType === type.id 
                            ? 'bg-purple-600/20 border-purple-500' 
                            : 'border-gray-700 hover:border-gray-600'}`}
                      >
                        <type.icon className="w-6 h-6" />
                        <span className="text-sm">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <ImageUpload />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-6">Tutorial</h2>
              <div className="space-y-6">
                <div className="flex gap-2">
                  {['Person', 'Product', 'Style', 'Pet'].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded-lg text-sm font-medium
                        ${tab === 'Person' 
                          ? 'bg-purple-600' 
                          : 'hover:bg-gray-700'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">How to get results:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-gray-700 rounded-lg"></div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h4 className="font-medium">Input model name and type</h4>
                  </div>
                  <p className="text-sm text-gray-400 ml-7">
                    Name your model any name you want, and select the type of subject (Person, Man, Woman)
                  </p>

                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h4 className="font-medium">Choose good pictures</h4>
                  </div>
                  <p className="text-sm text-gray-400 ml-7">
                    5-10 high-quality samples, front facing, square aspect ratio, 1 person in frame, variety
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};