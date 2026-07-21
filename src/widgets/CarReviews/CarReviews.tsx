import type { Review } from '@/entities/review'
import styles from './CarReviews.module.scss'
import { ReviewCard } from '@/entities/review/ui/ReviewCard'
import { useGetReview } from '@features/add-review/model/useGetReview'

interface IProps {
   apiReviews: Review[]
   carId: number
}

export const CarReviews = ({ apiReviews, carId }: IProps) => {
   const { reviewList: localReviews } = useGetReview(carId)
   const mergedReviews = [...apiReviews, ...localReviews]
   const latestThree = mergedReviews.slice(-3).reverse()
   return (
      <div className={styles.root}>
         {latestThree.map(review => (
            <ReviewCard data={review} key={`Review-${carId}-${review.reviewerName}`} />
         ))}
      </div>
   )
}
