import { useState, useMemo } from 'react'
import type { Car } from '@entities/car'

export const useCarSearch = (cars: Car[] | undefined) => {
   const [search, setSearch] = useState('')

   const filteredCars = useMemo(() => {
      if (!cars) return []

      return cars.filter(car => car.title.toLowerCase().includes(search.toLowerCase()))
   }, [cars, search])

   return {
      search,
      setSearch,
      filteredCars,
   }
}
