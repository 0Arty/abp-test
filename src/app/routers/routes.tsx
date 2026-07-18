import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { BaseLayout } from '../layouts/BaseLayout'
import { HomePage } from '@/pages/Home'
import { ROUTES } from '@shared/config/routes'
import { CarPage } from '@pages/CarPage'
import { NotFound } from '@pages/NotFound'

const router = createBrowserRouter([
   {
      element: <BaseLayout />,
      path: '/',
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: ROUTES.CarDetails,
            element: <CarPage />,
         },
         {
            path: '*',
            element: <NotFound></NotFound>,
         },
      ],
   },
])

export const AppRouter = () => {
   return <RouterProvider router={router} />
}
