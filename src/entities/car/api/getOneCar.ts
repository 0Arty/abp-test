export const getOneCar = async (carId: string) => {
   const res = await fetch(`https://dummyjson.com/products/${carId}`)

   if (res.status === 404) return null
   if (!res.ok) throw new Error('Network error')

   const response = await res.json()

   if (response.category !== 'vehicle') return null

   try {
      return response
   } catch (e) {
      console.error('mapCar crashed:', e)
      throw e
   }
}
