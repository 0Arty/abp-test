import React from 'react'
import styles from './TextArea.module.scss'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
   label?: string
   error?: string
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, className, ...props }) => {
   return (
      <div className={styles.container}>
         {label && <label className={styles.label}>{label}</label>}

         <textarea className={`${styles.textArea} ${className || ''}`} {...props} />

         {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
   )
}
