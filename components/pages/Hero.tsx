'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative">
          <Image
            src="/denverdogs.jpeg"
            alt="Happy Denver Dogs"
            width={500}
            height={500}
            className="rounded-lg shadow-xl"
            priority
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sunset-orange/20 via-sunset-pink/15 to-sunset-purple/20 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#FF6B35] sm:text-5xl">
            <span className="block">Happy Denver Dogs</span>
            <span className="block text-5xl sm:text-6xl">Dog Walking</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            One-on-one care with Janell—your Denver local who treats your dog like family. Park play, hikes, cuddles—you name it, your pup&apos;s got my full attention.
          </p>
          <div className="mt-5 sm:mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="#booking"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#2DD4BF] hover:to-[#0EA5E9] transition-all duration-300 md:py-4 md:text-lg md:px-10 shadow-lg"
              >
                Schedule a Meet & Greet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 