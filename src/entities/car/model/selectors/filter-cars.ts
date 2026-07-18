import { type Car } from '../types/car'

export type SortType = 'price-asc' | 'price-desc' | 'rating-asc' | 'rating-desc'

export interface FilterParams {
   sort?: SortType
   search?: string
}

export const filterCars = (cars: Car[], params: FilterParams): Car[] => {
   let result = [...cars]

   // 🔍 search
   if (params.search) {
      result = result.filter(car => car.title.toLowerCase().includes(params.search!.toLowerCase()))
   }

   // 📊 sorting
   if (params.sort) {
      switch (params.sort) {
         case 'price-asc':
            result.sort((a, b) => a.price - b.price)
            break
         case 'price-desc':
            result.sort((a, b) => b.price - a.price)
            break
         case 'rating-asc':
            result.sort((a, b) => a.rating - b.rating)
            break
         case 'rating-desc':
            result.sort((a, b) => b.rating - a.rating)
            break
      }
   }

   return result
}
