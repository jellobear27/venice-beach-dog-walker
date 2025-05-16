import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Happy Denver Dogs</h3>
            <p className="text-gray-300">
              Professional dog walking services in Denver Tech Center, providing personalized care for your furry friends.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              <span>happydenverdogs@gmail.com</span>
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Location</h3>
            <p className="text-gray-300">
              <span>Denver Tech Center, Denver, CO</span>
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Happy Denver Dogs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 