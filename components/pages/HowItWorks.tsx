'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Initial animation on scroll
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      });

      // Continuous floating animation
      gsap.to(card, {
        y: "20px",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.2
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Fill Out the Form",
      description: "Start by completing our simple online form. Tell us about your dog and your walking needs."
    },
    {
      number: "02",
      title: "You Are Being Contacted",
      description: "We'll reach out within 24 hours to discuss your requirements and answer any questions."
    },
    {
      number: "03",
      title: "First Meeting",
      description: "Meet Janell in person for a free consultation to ensure the perfect match for your pup."
    },
    {
      number: "04",
      title: "You Receive Quality Service",
      description: "Enjoy peace of mind knowing your dog is in expert hands with personalized care."
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Sunset Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-orange-400/20 to-blue-900/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple steps to get your dog the care they deserve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={el => cardsRef.current[index] = el}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"
              style={{
                transform: `translateY(${index * 20}px)`,
                marginLeft: `${index * 20}px`
              }}
            >
              <div className="text-6xl font-black text-[#FF6B35] mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 