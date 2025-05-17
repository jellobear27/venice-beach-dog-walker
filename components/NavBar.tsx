'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-[#FF6B35]">
              Happy Denver Dogs
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/'
                  ? 'text-[#FF6B35]'
                  : 'text-gray-600 hover:text-[#FF6B35]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/contest"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/contest'
                  ? 'text-[#FF6B35]'
                  : 'text-gray-600 hover:text-[#FF6B35]'
              }`}
            >
              Contest
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
