import styles from './ErrorMesage.module.scss'

interface IProps {
   children: string
}

export const ErrorMesage = ({ children }: IProps) => {
   return (
      <div className={styles.error}>
         <h3>{children}</h3>

         <p>Try again</p>
      </div>
   )
}
