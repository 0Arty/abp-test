import { useQuery } from '@tanstack/react-query'
import { getCars } from '../../api/getCars'
import type { Car } from '@/entities/car/model/types/car'
import { getOneCar } from '@/entities/car/api/getOneCar'

export const useCars = () => {
   return useQuery<Car[]>({
      queryKey: ['cars'],
      queryFn: getCars,
   })
}

export const useOneCar = (id: string) => {
   return useQuery<Car>({
      queryKey: ['cars', id],
      queryFn: () => getOneCar(id),
      enabled: !!id,
   })
}
