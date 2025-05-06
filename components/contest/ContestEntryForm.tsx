'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MAX_DIMENSION = 2000; // Maximum width/height in pixels
const MIN_DIMENSION = 200; // Minimum width/height in pixels

// Define a type for the file
type FileWithPreview = File & {
  preview?: string;
};

const schema = yup.object().shape({
  dogName: yup.string().required('Dog\'s name is required'),
  breed: yup.string().required('Breed is required'),
  funFact: yup.string().required('Fun fact is required'),
  ownerName: yup.string().required('Owner\'s name is required'),
  ownerEmail: yup.string().email('Invalid email').required('Email is required'),
  photo: yup
    .mixed<FileWithPreview>()
    .required('Photo is required')
    .test('fileSize', 'File size is too large (max 10MB)', (value) => {
      if (!value) return true;
      return value.size <= 10 * 1024 * 1024;
    })
    .test('fileType', 'Invalid file type (JPEG, PNG, or GIF only)', (value) => {
      if (!value) return true;
      return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    })
    .test('dimensions', 'Image dimensions must be between 200x200 and 2000x2000 pixels', async (value) => {
      if (!value) return true;
      return new Promise<boolean>((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          const valid = 
            img.width >= MIN_DIMENSION && 
            img.width <= MAX_DIMENSION && 
            img.height >= MIN_DIMENSION && 
            img.height <= MAX_DIMENSION;
          resolve(valid);
        };
        img.onerror = () => resolve(false);
        img.src = URL.createObjectURL(value);
      });
    }),
});

type FormData = yup.InferType<typeof schema>;

export default function ContestEntryForm() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const validateImage = async (file: File): Promise<boolean> => {
    setIsValidating(true);
    setValidationError(null);

    try {
      // Check file type
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        throw new Error('Invalid file type. Please upload a JPEG, PNG, or GIF image.');
      }

      // Check file size
      if (file.size > 10 * 1024 * 1024) {
        throw new Error('File size too large. Maximum size is 10MB.');
      }

      // Check dimensions
      const dimensions = await new Promise<{ width: number; height: number }>((resolve, reject) => {
        const img = new window.Image();
        img.onload = () => resolve({ width: img.width, height: img.height });
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = URL.createObjectURL(file);
      });

      if (
        dimensions.width < MIN_DIMENSION ||
        dimensions.width > MAX_DIMENSION ||
        dimensions.height < MIN_DIMENSION ||
        dimensions.height > MAX_DIMENSION
      ) {
        throw new Error(`Image dimensions must be between ${MIN_DIMENSION}x${MIN_DIMENSION} and ${MAX_DIMENSION}x${MAX_DIMENSION} pixels.`);
      }

      return true;
    } catch (error) {
      setValidationError(error instanceof Error ? error.message : 'Invalid image');
      return false;
    } finally {
      setIsValidating(false);
    }
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isValid = await validateImage(file);
      if (isValid) {
        setValue('photo', file as FileWithPreview);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        e.target.value = ''; // Clear the file input
      }
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append('dogName', data.dogName);
      formData.append('breed', data.breed);
      formData.append('funFact', data.funFact);
      formData.append('ownerName', data.ownerName);
      formData.append('ownerEmail', data.ownerEmail);
      if (data.photo) {
        formData.append('photo', data.photo as File);
      }

      const response = await fetch('/api/upload-contest-image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit entry');
      }

      alert('Thank you for entering your dog! We\'ll review your submission soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your entry. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Dog's Name */}
      <div className="space-y-2">
        <Label htmlFor="dogName">Dog's Name</Label>
        <Input
          type="text"
          id="dogName"
          {...register('dogName')}
        />
        {errors.dogName && (
          <p className="text-sm text-red-600">{errors.dogName.message}</p>
        )}
      </div>

      {/* Breed */}
      <div className="space-y-2">
        <Label htmlFor="breed">Breed</Label>
        <Input
          type="text"
          id="breed"
          {...register('breed')}
        />
        {errors.breed && (
          <p className="text-sm text-red-600">{errors.breed.message}</p>
        )}
      </div>

      {/* Fun Fact */}
      <div className="space-y-2">
        <Label htmlFor="funFact">Fun Fact or Personality Trait</Label>
        <textarea
          id="funFact"
          {...register('funFact')}
          rows={3}
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        {errors.funFact && (
          <p className="text-sm text-red-600">{errors.funFact.message}</p>
        )}
      </div>

      {/* Photo Upload */}
      <div className="space-y-2">
        <Label htmlFor="photo">Dog's Photo</Label>
        <div>
          <Input
            type="file"
            id="photo"
            accept="image/jpeg,image/png,image/gif"
            onChange={handlePhotoChange}
            className="cursor-pointer file:cursor-pointer"
          />
          {isValidating && (
            <p className="mt-1 text-sm text-muted-foreground">Validating image...</p>
          )}
          {validationError && (
            <p className="mt-1 text-sm text-red-600">{validationError}</p>
          )}
          {errors.photo && !validationError && (
            <p className="mt-1 text-sm text-red-600">{errors.photo.message}</p>
          )}
          {previewUrl && (
            <div className="mt-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="h-32 w-32 object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Owner's Name */}
      <div className="space-y-2">
        <Label htmlFor="ownerName">Your Name</Label>
        <Input
          type="text"
          id="ownerName"
          {...register('ownerName')}
        />
        {errors.ownerName && (
          <p className="text-sm text-red-600">{errors.ownerName.message}</p>
        )}
      </div>

      {/* Owner's Email */}
      <div className="space-y-2">
        <Label htmlFor="ownerEmail">Your Email</Label>
        <Input
          type="email"
          id="ownerEmail"
          {...register('ownerEmail')}
        />
        {errors.ownerEmail && (
          <p className="text-sm text-red-600">{errors.ownerEmail.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF6B35] hover:bg-[#FF4D6D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B35] disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Entry'}
        </button>
      </div>
    </form>
  );
} 