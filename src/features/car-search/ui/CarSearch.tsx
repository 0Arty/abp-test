import styles from './CarSearch.module.scss'

interface Props {
   value: string
   onChange: (value: string) => void
   isEmpty?: boolean
}

export const CarSearch = ({ value, onChange, isEmpty }: Props) => {
   return (
      <div className={styles.label}>
         <input
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="Search cars..."
            className={styles.input}
         />

         {isEmpty && value && <div className={styles.error}>No cars found for &quot;{value}&quot;</div>}
      </div>
   )
}
