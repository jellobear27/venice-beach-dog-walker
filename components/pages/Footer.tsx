import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Venice Beach Dog Walker</h3>
            <p className="text-gray-400">
              Professional dog walking services in Venice Beach, providing personalized care for your furry friends.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <span>venicebeachdogwalker@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Service Area</h3>
            <div className="flex items-center text-gray-400">
              <MapPinIcon className="h-5 w-5 mr-2" />
              <span>Venice Beach, Los Angeles, CA</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Venice Beach Dog Walker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 