import type { CarDto } from '@/entities/car/model/types/car-api'

export interface Car {
   id: number
   title: string
   price: number
   rating: number
   image: string
   brand: string
   description: string
}

export interface CarDetails extends CarDto {}
