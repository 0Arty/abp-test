import { CarSlider } from '@shared/ui/CarSlider'
import styles from './CarDetails.module.scss'
import { useOneCar } from '@/entities/car'

import { ErrorMesage } from '@shared/ui/ErrorMesage'
import { NotFound } from '@shared/ui/NotFound'
import { useEffect } from 'react'
import { DetailBlock } from '@shared/ui/DetailBlock'
import { CarReviews } from '@/widgets/CarReviews'
import { AddReviewForm } from '@features/add-review/ui/AddReviewForm'
import { Rating } from '@shared/ui/Rating'

interface IProps {
   vehicleId: string
}

export const CarDetails = ({ vehicleId }: IProps) => {
   const { data, isLoading, error } = useOneCar(vehicleId)

   useEffect(() => {
      console.log(data)
   }, [data])

   if (isLoading) return <div>Loading...</div>
   if (error) return <ErrorMesage>{'Error loading cars'}</ErrorMesage>
   if (!data) return <NotFound />

   return (
      <div className={styles.root}>
         <div className={styles['sticky--container']}>
            <div className={styles['sticky--content']}>
               <CarSlider slides={data.images} />
            </div>
         </div>

         <div className={styles['details--container']}>
            <div className={styles.title}>
               <h1>{data.title}</h1>
               <h2>{data.brand}</h2>
            </div>

            <div className={styles.detailsList}>
               <DetailBlock title={'Description'}>
                  <p>{data.description}</p>
               </DetailBlock>

               <DetailBlock title={'Dimensions'}>
                  <table>
                     <thead />
                     <tbody>
                        <tr>
                           <td>Width:</td>
                           <td>{data.dimensions.width}</td>
                        </tr>

                        <tr>
                           <td>Height:</td>
                           <td>{data.dimensions.height}</td>
                        </tr>

                        <tr>
                           <td>Depth:</td>
                           <td>{data.dimensions.depth}</td>
                        </tr>
                     </tbody>
                  </table>
               </DetailBlock>

               <DetailBlock title={'Rating'}>
                  <Rating rating={data.rating} />
               </DetailBlock>

               <DetailBlock title={'Price'}>
                  <h3>{data.price}</h3>
               </DetailBlock>
            </div>

            <CarReviews apiReviews={data.reviews} carId={data.id} />
            <AddReviewForm carId={data.id} />
         </div>
      </div>
   )
}
