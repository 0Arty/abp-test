export interface Car {
   id: number
   title: string
   description: string
   price: number
   rating: number
   thumbnail: string
   brand: string
}
export type CarsResponse = {
   products: Car[]
   total: number
   skip: number
   limit: number
}
