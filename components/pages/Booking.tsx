'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  preferredTime: yup.string().required('Preferred time is required'),
});

type FormData = yup.InferType<typeof schema>;

export default function Booking() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log('Submitting form data:', data);
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('Response data:', result);

      if (!response.ok) {
        const errorMessage = result.error || 'Failed to send email';
        console.error('Error response:', { status: response.status, error: errorMessage, details: result.details });
        throw new Error(errorMessage);
      }

      alert('Thank you for your booking request! We will contact you shortly.');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      alert(`There was an error submitting your booking: ${errorMessage}`);
    }
  };

  return (
    <div id="booking" className="bg-gradient-to-br from-sunset-orange/5 via-sunset-pink/5 to-sunset-purple/5 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Book a Consultation Call
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Schedule a call to discuss your dog&apos;s needs and our services.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-6 p-8 rounded-lg shadow-xl relative overflow-hidden backdrop-blur-sm
              before:absolute before:inset-0 before:-z-10 before:content-[''] 
              before:bg-gradient-to-r before:from-[#FF6B35] before:via-[#FF4D6D] before:to-[#845EC2] 
              before:animate-gradient-flow before:opacity-10"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="mt-1 block w-full rounded-md border-0 bg-white/50 shadow-sm ring-1 ring-inset ring-white/20 
                  focus:ring-2 focus:ring-[#FF6B35] placeholder:text-gray-600 text-gray-800 backdrop-blur-sm
                  transition-all duration-300"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className="mt-1 block w-full rounded-md border-0 bg-white/50 shadow-sm ring-1 ring-inset ring-white/20 
                  focus:ring-2 focus:ring-[#FF6B35] placeholder:text-gray-600 text-gray-800 backdrop-blur-sm
                  transition-all duration-300"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-800">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className="mt-1 block w-full rounded-md border-0 bg-white/50 shadow-sm ring-1 ring-inset ring-white/20 
                  focus:ring-2 focus:ring-[#FF6B35] placeholder:text-gray-600 text-gray-800 backdrop-blur-sm
                  transition-all duration-300"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-bold text-gray-800">
                Preferred Time to Call
              </label>
              <select
                id="preferredTime"
                {...register('preferredTime')}
                className="mt-1 block w-full rounded-md border-0 bg-white/50 shadow-sm ring-1 ring-inset ring-white/20 
                  focus:ring-2 focus:ring-[#FF6B35] placeholder:text-gray-600 text-gray-800 backdrop-blur-sm
                  transition-all duration-300"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 5pm)</option>
                <option value="evening">Evening (5pm - 8pm)</option>
              </select>
              {errors.preferredTime && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.preferredTime.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-base 
                  font-bold text-white bg-gradient-to-r from-[#FF6B35] to-[#FF4D6D] hover:from-[#2DD4BF] hover:to-[#0EA5E9] 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B35] disabled:opacity-50 
                  transition-all duration-300"
              >
                {isSubmitting ? 'Submitting...' : 'Book Consultation'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 