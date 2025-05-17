'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

export default function Hero() {
  const headingRef = useRef(null);
  const taglineRef = useRef(null);
  const descriptionRef = useRef(null);
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
    const description = new SplitText(descriptionRef.current, { type: "chars,words" });

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

    // Animate description
    tl.from(description.chars, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.02,
      ease: "power2.out"
    }, "-=0.2");

    // Cleanup
    return () => {
      heading.revert();
      tagline.revert();
      description.revert();
    };
  }, [isLoaded]);

  return (
    <section className="relative w-full">
      {/* Background Image Container - Extended height */}
      <div className="absolute inset-0 z-0 h-[200vh]">
        <Image
          src="/denverdogs.jpeg"
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

      {/* Content - Fixed to viewport */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className={`text-5xl tracking-tight font-black text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)] transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <span ref={headingRef} className="block">Happy Denver Dogs</span>
            <span ref={taglineRef} className="block text-[#FF6B35] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">With Janell</span>
          </h1>
          <div className={`mt-6 sm:mt-8 mx-auto max-w-4xl bg-black/10 backdrop-blur-sm rounded-xl p-6 shadow-xl transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <p ref={descriptionRef} className="text-xl text-white font-bold sm:text-2xl md:text-3xl leading-tight">
              Personalized care with Janell — a Denver local who treats every dog like family. From park trips and mountain hikes to cuddles and adventures, Janell ensures your pup's happiness every step of the way.
            </p>
          </div>
          <div className={`flex justify-center transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
    </section>
  );
} 