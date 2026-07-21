import styles from './ReviewCard.module.scss'
import type { Review } from '../../model/types/review'
import UserAvatarIcon from '@icons/person.svg?react'
import { Rating } from '@shared/ui/Rating'

interface IProps {
   data: Review
}

export const ReviewCard = ({ data }: IProps) => {
   return (
      <div className={styles.root}>
         <div className={styles.head}>
            <div className={styles.user}>
               <div className={styles.userIcon}>
                  <UserAvatarIcon />
               </div>
               <h3>{data.reviewerName}</h3>
            </div>
            <Rating rating={data.rating} />
         </div>

         <div className={styles['review--container']}>
            <p>{data.comment}</p>
         </div>
      </div>
   )
}
