import { CarDetails } from '@/widgets/CarDetails'
import { CarPageLayout } from '@pages/CarPage/sections/CarPageLayout'
import { useParams } from 'react-router-dom'

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
