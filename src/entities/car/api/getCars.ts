import { type CarsResponseDto } from '../model/types/car-api'
import { mapCar } from '../model/lib/map-car'

export const getCars = async () => {
   const url = 'https://dummyjson.com/products/category/vehicle'
   const res = await fetch(url)

   if (!res.ok) throw new Error('Error')

   const data: CarsResponseDto = await res.json()

   return data.products.map(mapCar)
}
