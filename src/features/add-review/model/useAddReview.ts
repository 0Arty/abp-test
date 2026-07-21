import { type Review } from '@/entities/review'

export const useAddReview = (carId: number) => {
   const addReview = (review: Review) => {
      const key = `reviews-${carId}`

      const existing = JSON.parse(localStorage.getItem(key) || '[]')

      localStorage.setItem(key, JSON.stringify([...existing, review]))
   }

   return { addReview }
}
