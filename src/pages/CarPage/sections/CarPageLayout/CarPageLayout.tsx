import type { ReactNode } from 'react'
import styles from './CarPageLayout.module.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from '@app/routers/config/routes'

import ArrowSvg from '@shared/assets/icons/arrow-left.svg?react'

interface IProps {
   children: ReactNode
}

export const CarPageLayout = ({ children }: IProps) => {
   return (
      <div className={styles.root}>
         <div className={styles.title}>
            <Link to={ROUTES.HOME} className={styles.back}>
               <ArrowSvg />
               <div className={styles.text}>Back</div>
            </Link>
         </div>
         {children}
      </div>
   )
}
