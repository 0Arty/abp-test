import styles from './CarReviews.module.scss'

import type { Review } from '@entities/review'
import { ReviewCard } from '@entities/review/ui/ReviewCard'

import { useReviews } from '@features/add-review'

interface IProps {
   apiReviews: Review[]
   carId: number
}

export const CarReviews = ({ apiReviews, carId }: IProps) => {
   const { reviews: localReviews } = useReviews(carId)
   const mergedReviews = [...apiReviews, ...localReviews]
   const latestThree = mergedReviews.slice(-3).reverse()
   return (
      <div className={styles.root}>
         <h2>Reviews</h2>

         <div className={styles.list}>
            {latestThree.map(review => (
               <ReviewCard data={review} key={`Review-${carId}-${review.reviewerName}`} />
            ))}
         </div>
      </div>
   )
}
