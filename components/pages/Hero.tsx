'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

export default function Hero() {
  const headingRef = useRef(null);
  const taglineRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a minimum delay to ensure content is loaded
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // Register SplitText plugin
    gsap.registerPlugin(SplitText);

    // Split and animate the heading
    const heading = new SplitText(headingRef.current, { type: "chars,words" });
    const tagline = new SplitText(taglineRef.current, { type: "chars,words" });

    // Create the animation timeline
    const tl = gsap.timeline({
      delay: 0.5 // Additional 0.5s delay after content is loaded
    });

    // Animate heading
    tl.from(heading.chars, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.05,
      ease: "back.out(1.7)"
    });

    // Animate tagline
    tl.from(tagline.chars, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.03,
      ease: "power2.out"
    }, "-=0.4");

    // Cleanup
    return () => {
      heading.revert();
      tagline.revert();
    };
  }, [isLoaded]);

  return (
    <section className="relative w-full">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 h-screen">
        <Image
          src="/newdenverdogs.jpeg"
          alt="Dog Walker in Denver"
          fill
          priority
          className="object-cover object-center"
          quality={100}
          onLoad={() => setIsLoaded(true)}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sunset-orange/20 via-sunset-pink/15 to-sunset-purple/20 mix-blend-overlay" />
      </div>

      {/* Scrolling Banner */}
      <div className="relative z-10 w-full bg-black/70 backdrop-blur-sm py-4 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block text-white text-xl font-medium px-4">
            Personalized care with Janell — a Denver local who treats every dog like family. From park trips and mountain hikes to cuddles and adventures, Janell ensures your pup's happiness every step of the way.
          </span>
          <span className="inline-block text-white text-xl font-medium px-4">
            Personalized care with Janell — a Denver local who treats every dog like family. From park trips and mountain hikes to cuddles and adventures, Janell ensures your pup's happiness every step of the way.
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col">
        {/* Heading Section - Top Center */}
        <div className="pt-8 flex justify-center">
          <h1 className={`text-4xl tracking-tight font-black text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)] transition-opacity duration-500 text-center ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <span ref={headingRef} className="inline">Happy Denver Dogs</span>
            <span ref={taglineRef} className="inline text-[#FF6B35] font-black ml-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">with Janell</span>
          </h1>
        </div>

        {/* Button Section - Bottom */}
        <div className={`mt-auto pb-16 -mb-12 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center">
            <div className="rounded-md shadow relative z-20 bg-white/10 backdrop-blur-sm px-4 py-2">
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

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: inline-block;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 