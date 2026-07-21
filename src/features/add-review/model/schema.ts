import { z } from 'zod'

export const reviewSchema = z.object({
   name: z
      .string()
      .min(2, 'Name too short')
      .regex(/^[A-Za-zА-Яа-яІіЇїЄє\s'-]+$/, 'Only letters allowed'),
   email: z.string().email('Invalid email'),
   rating: z.number().min(1, 'Select rating').max(5),
   text: z.string().min(10, 'Review too short'),
})

export type ReviewFormData = z.infer<typeof reviewSchema>
