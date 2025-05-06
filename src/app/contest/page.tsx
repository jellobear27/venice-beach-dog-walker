'use client';

import { useState } from 'react';
import ContestEntryForm from '@/components/ContestEntryForm';

export default function ContestPage() {
  const [activeTab, setActiveTab] = useState<'enter' | 'gallery'>('enter');

  return (
    <div className="min-h-screen bg-gradient-to-br from-sunset-orange/5 via-sunset-pink/5 to-sunset-purple/5">
      {/* Hero Section */}
      <div className="bg-[#2DD4BF]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black text-[#FF6B35] sm:text-5xl mb-4">
            Venice Beach Cute Dog Contest
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Show off your pup and win a professional photoshoot with Brian!
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('enter')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'enter'
                ? 'bg-[#FF6B35] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Enter Contest
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'gallery'
                ? 'bg-[#FF6B35] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            View Gallery
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === 'enter' ? (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Enter Your Dog</h2>
              <ContestEntryForm />
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contest Gallery</h2>
              {/* Gallery will go here */}
              <p className="text-gray-500">Gallery coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 