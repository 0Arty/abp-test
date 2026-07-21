import { useParams } from 'react-router-dom'
import { CarDetails } from '@/widgets/CarDetails'
import { CarPageLayout } from './sections/CarPageLayout'

export const CarPage = () => {
   const { vehicleId } = useParams()

   if (!vehicleId) {
      return <div>Invalid vehicle ID</div>
   }

   return (
      <CarPageLayout>
         <CarDetails vehicleId={vehicleId} />
      </CarPageLayout>
   )
}
