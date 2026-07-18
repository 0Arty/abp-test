import { type CarDto } from '../types/car-api'
import { type Car } from '../types/car'

export const mapCar = (dto: CarDto): Car => ({
   id: dto.id,
   title: dto.title,
   price: dto.price,
   rating: dto.rating,
   brand: dto.brand,
   image: dto.thumbnail,
   description: dto.description,
})
