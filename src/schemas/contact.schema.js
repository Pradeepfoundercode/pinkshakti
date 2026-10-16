import * as z from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(60, { message: 'Name must not exceed 60 characters' }),
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
  subject: z
    .string()
    .trim()
    .min(1, { message: 'Please select a subject' }),
  message: z
    .string()
    .trim()
    .min(5, { message: 'Message must be at least 5 characters' })
    .max(600, { message: 'Message cannot exceed 600 characters' }),
})
