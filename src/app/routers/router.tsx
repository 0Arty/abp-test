// libs
import { createBrowserRouter } from 'react-router-dom'

// configs
import { ROUTES } from './config/routes'

// components
import { BaseLayout } from '../layouts/BaseLayout'
import { HomePage } from '@/pages/Home'
import { CarPage } from '@pages/CarPage'
import { NotFound } from '@pages/NotFound'

export const appRouter = createBrowserRouter([
   {
      element: <BaseLayout />,
      path: '/',
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: `${ROUTES.CarDetails}:carId`,
            element: <CarPage />,
         },
         {
            path: '*',
            element: <NotFound />,
         },
      ],
   },
])
