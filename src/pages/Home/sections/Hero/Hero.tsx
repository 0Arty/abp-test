// assets
import styles from './Hero.module.scss'

export const Hero = () => {
   return (
      <div className={styles.root}>
         <div className={styles.title}>
            <h1>CAR SHOWROOM</h1>
            <p>Choose your dream right now.</p>
         </div>

         <div className={styles['image--container']}>
            <img src="homepage/hero-image-descktop.png" alt="" className="" />
         </div>
      </div>
   )
}
