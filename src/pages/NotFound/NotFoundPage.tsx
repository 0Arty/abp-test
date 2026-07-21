import styles from './NotFoundPage.module.scss'
import { NotFound } from '@shared/ui/NotFound'

export const NotFoundPage = () => {
   return (
      <div className={styles.page}>
         <NotFound />
      </div>
   )
}
