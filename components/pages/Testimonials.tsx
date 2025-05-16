'use client';

import { StarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: "The best dog walker in Denver! My dog absolutely loves their walks and comes back happy and tired.",
    author: "Sarah M.",
    location: "Denver Tech Center"
  },
  {
    id: 2,
    rating: 5,
    quote: "Professional, reliable, and truly cares about my dog's well-being. I couldn't be happier with the service.",
    author: {
      name: "Michael Chen",
      role: "Dog Parent",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    rating: 5,
    quote: "They know all the best spots in Denver for dog walking. My pup gets so excited when they arrive!",
    author: "Michael R.",
    location: "Cherry Creek"
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-br from-sunset-orange/5 via-sunset-pink/5 to-sunset-purple/5 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-[#FFB800] fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">{testimonial.rating}.0</span>
              </div>
              <blockquote className="text-lg text-gray-900 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center">
                <Image
                  className="h-12 w-12 rounded-full ring-2 ring-sunset-orange"
                  src={testimonial.author.imageUrl}
                  alt={testimonial.author.name}
                  width={48}
                  height={48}
                />
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.author.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 