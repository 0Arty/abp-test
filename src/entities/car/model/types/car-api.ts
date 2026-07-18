export interface CarDto {
   id: number
   title: string
   description: string
   price: number
   rating: number
   thumbnail: string
   brand: string
}

export interface CarsResponseDto {
   products: CarDto[]
   total: number
   skip: number
   limit: number
}
