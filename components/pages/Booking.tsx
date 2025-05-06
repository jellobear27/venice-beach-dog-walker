'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                {...register('name')}
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="tel"
                id="phone"
                {...register('phone')}
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time to Call</Label>
              <select
                id="preferredTime"
                {...register('preferredTime')}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background 
                  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
                  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 5pm)</option>
                <option value="evening">Evening (5pm - 8pm)</option>
              </select>
              {errors.preferredTime && (
                <p className="text-sm text-red-600">{errors.preferredTime.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
                  text-white bg-[#FF6B35] hover:bg-[#FF4D6D] focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-[#FF6B35] disabled:opacity-50"
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