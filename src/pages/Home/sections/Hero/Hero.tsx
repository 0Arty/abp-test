// assets
import styles from './Hero.module.scss'
import HeroImage from '@images/hero-image-descktop.png'

export const Hero = () => {
   return (
      <div className={styles.root}>
         <div className={styles.title}>
            <h1>CAR SHOWROOM</h1>
            <p>Choose your dream right now.</p>
         </div>

         <div className={styles['image--container']}>
            <img src={HeroImage} alt={'Porche'} className="" />
         </div>
      </div>
   )
}
