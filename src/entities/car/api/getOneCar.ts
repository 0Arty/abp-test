import { type CarDto } from '../model/types/car-api'
import { mapCar } from '../model/lib/map-car'

export const getOneCar = async (carId: string) => {
   const url = `https://dummyjson.com/products/${carId}`
   const res = await fetch(url)

   if (!res.ok) throw new Error('Error')

   const response = await res.json()

   // Ну взагалі по нормальному API мало б одразу фільтрувати категорії, а так можна написати запит на продукт з іншої категорії, тому тут далі йде прокид помилки, хтось захоче змінити руками url і відправиться запит
   if (response.category !== 'vehicle') throw new Error('Product Not found')

   const data: CarDto = response
   return mapCar(data)
}
