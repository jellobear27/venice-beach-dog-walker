'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const headingRef = useRef<HTMLSpanElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(SplitText, ScrollTrigger);

    // Split and animate the heading
    const heading = new SplitText(headingRef.current, { type: "chars,words" });
    const subheading = new SplitText(subheadingRef.current, { type: "chars,words" });

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Animate heading
    tl.from(heading.chars, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.05,
      ease: "back.out(1.7)"
    });

    // Animate subheading
    tl.from(subheading.chars, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.03,
      ease: "power2.out"
    }, "-=0.4");

    // Cleanup
    return () => {
      heading.revert();
      subheading.revert();
    };
  }, []);

  return (
    <section id="about" className="relative bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-400/5 to-blue-900/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="text-center">
            <h2 className="text-4xl font-black text-[#FF6B35] sm:text-5xl">
              <span ref={headingRef} className="text-5xl sm:text-6xl">About</span>
              <div ref={subheadingRef} className="text-2xl sm:text-3xl text-[#2DD4BF]">Your New Dog Walker</div>
            </h2>
            <div className="mt-8 mx-auto max-w-3xl bg-[#2DD4BF]/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#2DD4BF]/20">
              <p className="text-lg text-gray-600 mb-6">
                Hi, I&apos;m Janell—your go-to dog walker in Denver. It&apos;s just me, your pup, and a whole lot of good energy.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I&apos;ve been walking and caring for dogs since 2020, and I genuinely love what I do. Dogs tend to love me right back—and that bond means everything to me.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This isn&apos;t just a side gig—it&apos;s a way of life. I&apos;ve worked with dogs in Las Vegas, Princeton, Venice Beach, and now I&apos;m bringing that experience to the pups of Denver. From energetic puppies to senior dogs who need a little extra care, I&apos;ve handled it all—meds, routines, cuddles, and all the quirks in between.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether we&apos;re hitting a peaceful trail, exploring the city, or just enjoying some sniff time at the park, I tailor every walk to your dog&apos;s vibe.
              </p>
              <p className="text-lg text-gray-600">
                If you&apos;re looking for someone who&apos;s reliable, intuitive, and seriously loves dogs—I&apos;m your girl. Let&apos;s make every walk a little adventure in the Mile High City.
              </p>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 p-1 bg-gradient-to-r from-[#2DD4BF] to-[#0EA5E9]">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/pugpic.jpeg"
                  alt="Denver Dog Walker"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 