import * as z from 'zod'

export const feedbackSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must not exceed 50 characters' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' }),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^[0-9]{10}$/.test(val), {
      message: 'Please enter a valid 10-digit phone number',
    }),
  rating: z
    .number({ invalid_type_error: 'Please select a rating' })
    .min(1, { message: 'Please select a rating for your experience' })
    .max(5),
  subject: z
    .string()
    .trim()
    .min(1, { message: 'Subject is required' }),
  message: z
    .string()
    .trim()
    .min(5, { message: 'Please provide at least 5 characters of feedback' })
    .max(500, { message: 'Feedback cannot exceed 500 characters' }),
})

export const ratingOptions = [
  { value: 1, label: 'Very Poor' },
  { value: 2, label: 'Poor' },
  { value: 3, label: 'Average' },
  { value: 4, label: 'Good' },
  { value: 5, label: 'Excellent' },
]

export const subjectOptions = []
