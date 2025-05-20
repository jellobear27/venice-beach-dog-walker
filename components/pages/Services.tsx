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
    <section id="services" className="relative bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-400/5 to-blue-900/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#FF6B35] sm:text-5xl">
            <span className="text-5xl sm:text-6xl">Services</span>
            <div className="text-2xl sm:text-3xl text-[#2DD4BF]">Tailored for Your Pup</div>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our services are geared towards meeting your dog's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden bg-white/5 backdrop-blur-sm border border-white/20"
            >
              <div className="flex flex-col items-center relative z-10">
                <div className="text-6xl font-black text-[#FF6B35] mb-6">
                  {index + 1}
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-xl text-white mb-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{service.name}</h3>
                <p className="text-base text-gray-700 text-center mb-4">{service.description}</p>
                {index === 0 && (
                  <div className="relative">
                    <p className="text-2xl font-bold text-[#2DD4BF]">$25</p>
                    <a
                      href="#booking"
                      className="absolute -right-4 -top-2 transform rotate-12 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white px-4 py-2 rounded-md text-sm font-bold shadow-lg hover:from-[#2DD4BF] hover:to-[#0EA5E9] transition-all duration-300"
                    >
                      Book Now
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 