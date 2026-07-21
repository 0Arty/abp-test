import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'
import { ROUTES } from '@app/routers/config/routes'

export const NotFound = () => {
   return (
      <div className={styles.root}>
         <div className={styles.title}>
            <h2>404</h2>
            <h3>Page not found</h3>
         </div>

         <Link to={ROUTES.HOME} className={styles.link}>
            Return to homepage
         </Link>
      </div>
   )
}
