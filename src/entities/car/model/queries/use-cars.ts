import { useQuery } from '@tanstack/react-query'
import { getCars } from '../../api/getCars'
import type { Car } from '@/entities/car/model/types/car'

export const useCars = () => {
   return useQuery<Car[]>({
      queryKey: ['cars'],
      queryFn: getCars,
   })
}
