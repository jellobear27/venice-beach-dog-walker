'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-sunset-orange/5 via-sunset-pink/5 to-sunset-purple/5 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="text-center">
            <h2 className="text-4xl font-black text-[#FF6B35] sm:text-5xl">
              <span className="text-5xl sm:text-6xl">About</span>
              <div className="text-2xl sm:text-3xl text-[#2DD4BF]">Happy Denver Dogs</div>
            </h2>
            <div className="mt-4 text-lg text-gray-600">
              Hi, I&apos;m Janell—your Denver dog walker. It&apos;s just me, your dog, and a whole lot of good energy. I&apos;ve been walking and caring for dogs since 2020, and I truly love what I do. Dogs seem to love me right back, and that connection is everything.
            </div>
            <div className="mt-3 mx-auto max-w-3xl bg-[#2DD4BF]/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#2DD4BF]/20">
              <p className="text-lg text-gray-600 mb-6">
                This isn&apos;t just a gig to me—it&apos;s a lifestyle. I&apos;ve worked in dog bathing shops, cared for puppies, administered meds, and followed daily routines to make sure every dog feels safe, loved, and seen. I treat them like family because that&apos;s how I see them.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From mellow boardwalk strolls to beach runs or scenic hikes, I tailor every outing to your dog&apos;s personality and needs. Whether your pup is high-energy or just wants to chill and sniff the breeze, I&apos;ve got them.
              </p>
              <p className="text-lg text-gray-600">
                If you&apos;re looking for someone dependable, intuitive, and genuinely in love with dogs—I&apos;m your girl. Let&apos;s get those tails wagging and make every walk an adventure.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/denverdogs.jpeg"
                alt="Happy Denver Dogs"
                width={400}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 