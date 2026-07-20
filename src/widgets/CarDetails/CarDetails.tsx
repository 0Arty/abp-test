import styles from './CarDetails.module.scss'
import { useOneCar } from '@/entities/car'

interface IProps {
   vehicleId: string
}

export const CarDetails = ({ vehicleId }: IProps) => {
   const { data, isLoading, error } = useOneCar(vehicleId)

   if (isLoading) return <div>Loading...</div>
   if (error) return <div>Error loading cars</div>
   if (!data) return <div>No cars found</div>

   return (
      <div className={styles.root}>
         <h1>{data.title}</h1>

         <div className={styles.imageContainer}>
            <img src={data.image} alt={`${data.brand} - ${data.title}`} />
         </div>
      </div>
   )
}
