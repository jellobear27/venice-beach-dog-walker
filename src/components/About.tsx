'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-sunset-orange/5 via-sunset-pink/5 to-sunset-purple/5 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="text-center">
            <h2 className="text-3xl font-black text-[#FF6B35] sm:text-4xl">
              About <span className="text-[#2DD4BF]">Venice Beach Dog Walker</span>
            </h2>
            <div className="mt-3 mx-auto max-w-3xl bg-[#2DD4BF]/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#2DD4BF]/20">
              <p className="text-lg text-[#FF6B35] font-medium">

Hello There! I'm Janell, I offer you the chance to choose me to be your furry family member's new adventure buddy! With over 5+ years of dedicated dog care experience across Las Vegas and New Jersey, I've built a reputation of trust and reliability that I'm excited to bring to Venice Beach.

As a newcomer to this beautiful coastal community, I approach each walk with fresh eyes and enthusiasm. I'm eagerly exploring all the neighborhood paths, beach routes, and dog-friendly spots that will keep your pup's tail wagging. Each outing becomes a new adventure for both of us as we discover Venice Beach together!

What sets me apart is my commitment to building genuine bonds with each dog in my care. I don't just hold the leash—I become a trusted companion who takes the time to understand your dog's unique signals, quirks, and joys. My clients in Las Vegas and New Jersey have consistently trusted me with their beloved pets, and I'm ready to earn that same trust from the Venice Beach community.

When you're away, rest assured your furry family member isn't just being walked—they're making a new best friend who treats them like family and provides the exceptional attention and care they truly deserve.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/pugpic.jpeg"
                alt="Venice Beach Dog Walker"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 