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
              <p className="text-lg text-gray-600 mb-6">
                At Venice Beach Dog Walking, we&apos;re passionate about providing exceptional care for your furry friends. Our team of experienced and certified dog walkers is dedicated to ensuring your pet&apos;s safety, happiness, and well-being during every walk.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that your dog is more than just a pet - they&apos;re a beloved member of your family. That&apos;s why we go above and beyond to create a personalized experience for each dog in our care.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether it&apos;s a leisurely stroll along the beach or an energetic run through the park, we tailor each walk to your dog&apos;s unique needs and preferences. Our commitment to excellence has made us the trusted choice for dog owners throughout Venice Beach.
              </p>
              <p className="text-lg text-gray-600">
                Join our growing family of satisfied clients and give your dog the exercise and attention they deserve. We&apos;re here to make every walk an adventure your dog will love!
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