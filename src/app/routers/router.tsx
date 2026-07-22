// libs
import { createBrowserRouter } from 'react-router-dom'

// configs
import { ROUTES, ROUTES_ID } from './config/routes'

// components
import { BaseLayout } from '../layouts/BaseLayout'
import { HomePage } from '@/pages/Home'
import { CarPage } from '@pages/CarPage'
import { NotFoundPage } from '@pages/NotFound'

export const appRouter = createBrowserRouter(
   [
      {
         element: <BaseLayout />,
         path: '/',
         children: [
            {
               index: true,
               element: <HomePage />,
            },
            {
               path: `${ROUTES.CarPage}/${ROUTES_ID.Car}`,
               element: <CarPage />,
            },
            {
               path: '*',
               element: <NotFoundPage />,
            },
         ],
      },
   ],
   {
      basename: '/abp-test',
   },
)
