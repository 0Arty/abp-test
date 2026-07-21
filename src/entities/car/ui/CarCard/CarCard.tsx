import styles from './CarCard.module.scss'

// types
import type { Car } from '@/entities/car/model/types/car'

// libs
import { ROUTES } from '@app/routers/config/routes'
import { Link } from 'react-router-dom'

// icons
import ArrowRightIcon from '@icons/arrow-right.svg?react'
import RatingStarIcon from '@icons/rating-star.svg?react'
import { Rating } from '@shared/ui/Rating'

interface IProps {
   data: Car
}

export const CarCard = ({ data }: IProps) => {
   const detailsPath = `${ROUTES.CarDetails}/${data.id}`

   return (
      <div className={styles.root}>
         <div className={styles.carModel}>
            <h3>{data.title}</h3>
            <h4>{data.brand}</h4>
         </div>
         <Link to={detailsPath} className={styles.imgContainer}>
            <img src={data.image} alt={data.brand} />
         </Link>

         <div className={styles.details}>
            <div className={styles['rating-price']}>
               <p className={styles.price}>{data.price}$</p>

               <Rating rating={data.rating} />
            </div>

            <p>{data.description}</p>
         </div>

         <Link to={detailsPath} className={styles.moreInfo}>
            More
            <ArrowRightIcon />
         </Link>
      </div>
   )
}
