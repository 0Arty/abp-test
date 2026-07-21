import { useState, useEffect } from 'react'
import styles from './CarSearch.module.scss'

interface Props {
   value: string
   onChange: (value: string) => void
   isEmpty?: boolean
}

export const CarSearch = ({ value, onChange, isEmpty }: Props) => {
   const [localValue, setLocalValue] = useState(value)

   useEffect(() => {
      setLocalValue(value)
   }, [value])

   useEffect(() => {
      const timer = setTimeout(() => {
         if (localValue !== value) {
            onChange(localValue)
         }
      }, 300)

      return () => clearTimeout(timer)
   }, [localValue, onChange, value])

   return (
      <div className={styles.label}>
         <input
            value={localValue}
            onChange={e => setLocalValue(e.target.value)}
            placeholder="Search cars..."
            className={styles.input}
         />

         {isEmpty && value && <div className={styles.error}>No cars found for &quot;{value}&quot;</div>}
      </div>
   )
}
