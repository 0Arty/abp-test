import { useQuery } from '@tanstack/react-query'
import { getCars } from '../../api/getCars'
import { getOneCar } from '../../api/getOneCar'
import type { CarDetails, Car } from '@entities/car'

export const useCars = () => {
   return useQuery<Car[]>({
      queryKey: ['cars'],
      queryFn: getCars,
   })
}

export const useOneCar = (id: string) => {
   return useQuery<CarDetails | null>({
      queryKey: ['cars', id],
      queryFn: () => getOneCar(id),
      enabled: !!id,
   })
}
