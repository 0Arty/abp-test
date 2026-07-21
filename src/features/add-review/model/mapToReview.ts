import { type Review } from '@/entities/review'
import { type ReviewFormData } from './schema'

export const mapToReview = (data: ReviewFormData): Review => {
   return {
      rating: data.rating,
      comment: data.text,
      date: new Date().toISOString(),
      reviewerName: data.name,
      reviewerEmail: data.email,
   }
}
