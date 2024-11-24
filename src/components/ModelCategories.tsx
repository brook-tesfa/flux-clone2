import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const categories = [
  {
    name: 'LISTINGS',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a',
  },
  {
    name: 'BRAND ASSETS',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1',
  },
  {
    name: 'PRODUCT SHOTS',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90',
  },
  {
    name: 'CLOTHING',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475',
  },
  {
    name: 'PORTRAITS',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
  },
  {
    name: 'LIFESTYLE',
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659',
  },
];

const brands = [
  {
    name: 'Nike',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  },
  {
    name: 'Adidas',
    logo: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f',
  },
  {
    name: 'Apple',
    logo: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b',
  },
  {
    name: 'Samsung',
    logo: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c',
  },
];

const ModelCategories = () => {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuthStore();

  const handleTrainModel = async () => {
    if (!user) {
      try {
        await signInWithGoogle();
      } catch (error) {
        console.error('Authentication failed:', error);
        return;
      }
    }
    navigate('/train');
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Train the highest quality AI image models for{' '}
              <span className="text-pink-500">Every Purpose</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              The #1 way to train custom AI image models for product photography,
              clothing, fashion, and brand assets.
            </p>
            
            <button
              onClick={handleTrainModel}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors mb-8"
            >
              Train My Model
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-gray-400">
                Trusted by <span className="text-white font-semibold">1,000+</span> professionals
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <span className="absolute bottom-4 left-4 text-sm font-medium">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-12">
            Trusted by <span className="text-pink-500">top brands</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelCategories;