import styles from './RatingStars.module.scss'

interface Props {
   value: number
   onChange: (value: number) => void
   error?: string
}

export const RatingStars = ({ value, onChange, error }: Props) => {
   return (
      <div className={styles['rating--container']}>
         <div className={styles.stars} role="radiogroup" aria-label="Rating">
            {[1, 2, 3, 4, 5].map(star => (
               <button
                  key={star}
                  type="button"
                  className={star <= value ? styles.active : styles.star}
                  onClick={() => onChange(star)}
                  role="radio"
                  aria-checked={star <= value}
                  aria-label={`${star} star${star > 1 ? 's' : ''}`}
               >
                  ★
               </button>
            ))}
         </div>
         {error && <span className={styles.error}>{error}</span>}
      </div>
   )
}
