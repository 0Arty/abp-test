import styles from './ReviewCard.module.scss'
import type { Review } from '../../model/types/review'

interface IProps {
   data: Review
}

export const ReviewCard = ({ data }: IProps) => {
   return <div className={styles.root}>{data.comment}</div>
}
