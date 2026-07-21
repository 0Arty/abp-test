import type { Review } from '@/entities/review'
import { useEffect, useState } from 'react'

export const useReviews = (carId: number) => {
   const key = `reviews-${carId}`

   const [reviews, setReviews] = useState<Review[]>([])

   useEffect(() => {
      const stored = JSON.parse(localStorage.getItem(key) || '[]')
      setReviews(stored)
   }, [key])

   const addReview = (review: Review) => {
      const updated = [...reviews, review]

      localStorage.setItem(key, JSON.stringify(updated))
      setReviews(updated)
   }

   return { reviews, addReview }
}
