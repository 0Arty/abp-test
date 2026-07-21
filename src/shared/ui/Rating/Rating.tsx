import styles from './Rating.module.scss'
import RatingStarIcon from '@icons/rating-star.svg?react'

interface IProps {
   rating: number
   maxRating?: number
}

export const Rating = ({ rating, maxRating = 5 }: IProps) => {
   return (
      <div className={styles.root}>
         {Array.from({ length: maxRating }, (_, index) => {
            const fill = Math.max(0, Math.min(1, rating - index))

            return (
               <div key={index} className={styles.star}>
                  {/* фон (порожня) */}
                  <RatingStarIcon className={styles.empty} />

                  {/* заповнення */}
                  <div className={styles.fill} style={{ width: `${fill * 100}%` }}>
                     <RatingStarIcon />
                  </div>
               </div>
            )
         })}
      </div>
   )
}
