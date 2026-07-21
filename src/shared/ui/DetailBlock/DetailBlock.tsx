import type { ReactNode } from 'react'
import styles from './DetailBlock.module.scss'

interface IProps {
   title: string
   children: ReactNode | ReactNode[]
}

export const DetailBlock = ({ title, children }: IProps) => {
   return (
      <div className={styles.root}>
         <h2 className={styles.title}>{title}</h2>

         <div className={styles.content}>{children}</div>
      </div>
   )
}
