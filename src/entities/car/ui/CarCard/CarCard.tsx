import type { Car } from '@/entities/car/model/types/car'
import styles from './CarCard.module.scss'
import { ROUTES } from '@app/routers/config/routes'
import { Link } from 'react-router-dom'
import ArrowRight from '@icons/arrow-right.svg?react'

interface IProps {
   data: Car
}

export const CarCard = ({ data }: IProps) => {
   const detailsPath = `${ROUTES.CarDetails}/${data.id}`

   return (
      <Link to={detailsPath} className={styles.root}>
         <div className={styles.imgContainer}>
            <img src={data.image} alt={data.brand} />
         </div>

         <div className={styles.details}>
            <div className={styles.carModel}>
               <h3>{data.title}</h3>
               <h4>{data.brand}</h4>
            </div>

            <p>{data.description}</p>
         </div>

         <div className={styles.fakeBtn}>
            More
            <ArrowRight />
         </div>
      </Link>
   )
}
