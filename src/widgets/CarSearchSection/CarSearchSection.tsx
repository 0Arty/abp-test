import styles from './CarSearchSection.module.scss'

import { useCarSearch, CarSearch } from '@features/car-search'
import { useCars } from '@/entities/car'

import { CarsList } from '@/widgets/CarsList'
import { ErrorMesage } from '@shared/ui/ErrorMesage'
import { NotFound } from '@shared/ui/NotFound'

export const CarSearchSection = () => {
   const { data, isLoading, error } = useCars()

   const { search, setSearch, filteredCars } = useCarSearch(data)
   const isEmpty = filteredCars.length === 0

   if (isLoading) return <div>Loading...</div>
   if (error) return <ErrorMesage>{'Error loading cars'}</ErrorMesage>

   return (
      <div className={styles.root}>
         <CarSearch value={search} onChange={setSearch} isEmpty={isEmpty} />

         {!!filteredCars?.length && <CarsList list={filteredCars} />}
      </div>
   )
}
