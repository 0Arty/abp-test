import { CarSearchSection } from '@widgets/CarSearchSection'
import styles from './OurCars.module.scss'

export const OurCars = () => {
   return (
      <div className={styles.root}>
         <h2>Our cards</h2>

         <CarSearchSection />
      </div>
   )
}
