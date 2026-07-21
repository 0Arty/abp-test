import { useMemo } from 'react'
import type { Review } from '@/entities/review'

export const useGetReview = (carId?: number) => {
   const reviewList: Review[] = useMemo(() => {
      if (!carId) return []
      const key = `reviews-${carId}`

      try {
         const data = localStorage.getItem(key)
         return data ? JSON.parse(data) : []
      } catch {
         return []
      }
   }, [carId])

   return { reviewList }
}
