import { CarSlider } from '@shared/ui/CarSlider'
import styles from './CarDetails.module.scss'
import { useOneCar } from '@/entities/car'

import { ErrorMesage } from '@shared/ui/ErrorMesage'
import { NotFound } from '@shared/ui/NotFound'
import { useEffect } from 'react'
import { DetailBlock } from '@shared/ui/DetailBlock'
import { CarReviews } from '@/widgets/CarReviews'
import { AddReviewForm } from '@features/add-review/ui/AddReviewForm'

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

            <DetailBlock title={'Description'}>
               <p>{data.description}</p>
            </DetailBlock>

            <DetailBlock title={'dimensions'}>
               <table>
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
               </table>
            </DetailBlock>

            <DetailBlock title={'Rating'}>
               <p>{data.rating}</p>
            </DetailBlock>

            <DetailBlock title={'Price'}>
               <h3>{data.price}</h3>
            </DetailBlock>

            <CarReviews apiReviews={data.reviews} carId={data.id} />

            <AddReviewForm carId={data.id} />
         </div>
      </div>
   )
}
