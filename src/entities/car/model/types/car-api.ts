export interface CarDto {
   id: number
   title: string
   description: string
   price: number
   rating: number
   brand: string

   discountPercentage: number

   stock: number
   dimensions: {
      width: number
      height: number
      depth: number
   }
   warrantyInformation: string
   shippingInformation: string
   availabilityStatus: string

   reviews: Array<{
      rating: number
      comment: string
      date: string
      reviewerName: string
      reviewerEmail: string
   }>

   images: Array<string>
   thumbnail: string
}

export interface CarsResponseDto {
   products: CarDto[]
   total: number
   skip: number
   limit: number
}
