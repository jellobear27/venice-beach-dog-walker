'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dogwalker.jpeg"
          alt="Venice Beach Dog Walker"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sunset-orange/20 via-sunset-pink/15 to-sunset-purple/20 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-black text-white sm:text-5xl md:text-6xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
            <span className="block">Venice Beach Dog Walker</span>
            <span className="block text-[#518eba] font-black">& Other Services</span>
          </h1>
          <div className="mt-3 sm:mt-5 mx-auto max-w-xl bg-black/10 backdrop-blur-sm rounded-xl p-4 shadow-xl">
            <p className="text-base text-white font-bold sm:text-lg md:text-xl">
              Real love, real walks, real connection.
              One-on-one care with Janell—the Venice Beach local who treats your dog like family. Beach days, park play, hikes, cuddles—you name it, your pup&apos;s got my full attention.
            </p>
          </div>
          <div className="mt-5 sm:mt-8 flex justify-center">
            <div className="rounded-md shadow-lg transform hover:scale-105 transition-all duration-300">
              <a
                href="#booking"
                className="w-full flex items-center justify-center px-8 py-4 border-2 border-white/30 text-lg font-bold rounded-md text-white bg-gradient-to-r from-[#FF6B35]/90 to-[#FF8C42]/90 hover:from-[#2DD4BF]/90 hover:to-[#0EA5E9]/90 transition-all duration-300 md:py-5 md:text-xl md:px-12 shadow-lg backdrop-blur-sm"
              >
                Schedule a Meet & Greet
              </a>
            </div>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Let&apos;s make your dog&apos;s day special with our professional walking services.
          </p>
        </div>
      </div>
    </div>
  );
} 