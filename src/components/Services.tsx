'use client';

import { 
  ClockIcon, 
  CalendarIcon, 
  MapIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Daily Visit (30 min)',
    description: 'Perfect for a quick walk, potty break, and fresh water. Ideal for energetic dogs who need a midday break.',
    icon: ClockIcon,
  },
  {
    name: 'Daily Visit (60 min)',
    description: 'Extended walk and playtime for dogs who need more exercise and attention during the day.',
    icon: CalendarIcon,
  },
  {
    name: 'Half Day Care',
    description: 'Four hours of dedicated care including walks, playtime, and companionship for your furry friend.',
    icon: MapIcon,
  },
  {
    name: 'Overnight Care',
    description: 'Overnight supervision and care in your home, ensuring your dog is comfortable in their familiar environment.',
    icon: HeartIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-sunset-orange/10 via-sunset-pink/10 to-sunset-purple/10 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Services & Rates
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Flexible care options tailored to your dog&apos;s needs. Each service includes updates, photos, and personalized attention.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`relative p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden
                  ${index === 0 ? 'animate-gradient-1' : ''}
                  ${index === 1 ? 'animate-gradient-2' : ''}
                  ${index === 2 ? 'animate-gradient-3' : ''}
                  ${index === 3 ? 'animate-gradient-4' : ''}
                  backdrop-blur-sm border border-white/20 before:absolute before:inset-0 before:-z-10 before:content-[""]
                  before:bg-gradient-to-r before:animate-gradient-flow`}
                style={{
                  '--gradient-start': index === 0 ? '#FF6B35' : index === 1 ? '#FF4D6D' : index === 2 ? '#845EC2' : '#FFD93D',
                  '--gradient-mid': index === 0 ? '#FF4D6D' : index === 1 ? '#845EC2' : index === 2 ? '#FFD93D' : '#FF8C42',
                  '--gradient-end': index === 0 ? '#FF8C42' : index === 1 ? '#FF6B35' : index === 2 ? '#FF4D6D' : '#845EC2'
                } as React.CSSProperties}
              >
                <div className="flex flex-col items-center relative z-10">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-md text-white
                    bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)]`}>
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900 text-center">{service.name}</h3>
                  <p className="mt-2 text-base text-gray-700 text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-gradient-to-r from-[#FF6B35] to-[#FF4D6D] hover:from-[#FF4D6D] hover:to-[#845EC2] transition-all duration-300 md:py-4 md:text-lg md:px-10 shadow-lg"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
} 