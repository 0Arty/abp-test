import styles from './OurCars.module.scss'
import { CarsList } from '@/widgets/CarsList'

export const OurCars = () => {
   return (
      <div className={styles.root}>
         <h2>Our cards</h2>

         <CarsList />
      </div>
   )
}
