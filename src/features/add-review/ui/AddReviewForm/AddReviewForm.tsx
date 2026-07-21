import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { reviewSchema, type ReviewFormData } from '../../model/schema'
import { Input } from '@/shared/ui/Input'
import { TextArea } from '@/shared/ui/TextArea'
import { RatingStars } from '@/shared/ui/RatingStars'

import styles from './AddReviewForm.module.scss'
import { useAddReview } from '@features/add-review/model/useAddReview'
import { mapToReview } from '@features/add-review/model/mapToReview'
import { useState, type FormEvent } from 'react'

interface Props {
   carId: number
}

export const AddReviewForm = ({ carId }: Props) => {
   const [isSubmited, setIsSubmitted] = useState<boolean>(false)

   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
      reset,
   } = useForm<ReviewFormData>({
      resolver: zodResolver(reviewSchema),
      defaultValues: {
         rating: 0,
      },
   })

   const { addReview } = useAddReview(carId)

   const onSubmit = (data: ReviewFormData) => {
      const review = mapToReview(data)
      addReview(review)
      setIsSubmitted(true)
      reset()
   }

   const inputNameMaskHandler = (e: FormEvent<HTMLInputElement>) => {
      e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-zА-Яа-яІіЇїЄє\s'-]/g, '')
   }

   if (!isSubmited) {
      return (
         <div className={styles.root}>
            <h2>Leave car review</h2>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
               <Input
                  label="Your name"
                  {...register('name')}
                  error={errors.name?.message}
                  onInput={inputNameMaskHandler}
               />

               <Input label="Your email" {...register('email')} error={errors.email?.message} />

               <Controller
                  name="rating"
                  control={control}
                  render={({ field }) => (
                     <RatingStars value={field.value} onChange={field.onChange} error={errors.rating?.message} />
                  )}
               />

               <TextArea label="Your review" {...register('text')} error={errors.text?.message} />

               <button type="submit">Add review</button>
            </form>
         </div>
      )
   }

   if (isSubmited) {
      return (
         <div className={styles.root}>
            <h3>Thanks for view</h3>
         </div>
      )
   }
}
