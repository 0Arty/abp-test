import styles from './CarsList.module.scss'
import { CarCard } from '@/entities/car/ui/CarCard'
import { useCars } from '@/entities/car'
import type { Car } from '@/entities/car/model/types/car'

export const CarsList = () => {
   const { data, isLoading, error } = useCars()

   if (isLoading) return <div>Loading...</div>
   if (error) return <div>Error loading cars</div>
   if (!data?.length) return <div>No cars found</div>

   return (
      <div className={styles.root}>
         {data.map((car: Car) => (
            <CarCard data={car} key={car.id} />
         ))}
      </div>
   )
}
