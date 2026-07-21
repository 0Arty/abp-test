import styles from './CarReviews.module.scss'

interface IProps {
   reviews: any
}

export const CarReviews = ({ reviews }: IProps) => {
   return <div className={styles.root} />
}
