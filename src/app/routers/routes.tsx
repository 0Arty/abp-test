import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { BaseLayout } from '../layouts/BaseLayout'
import { HomePage } from '@/pages/Home'
import { ROUTES } from '@shared/config/routes'

export const router = createBrowserRouter([
   {
      element: <BaseLayout />,
      children: [
         {
            path: ROUTES.home,
            element: <HomePage />,
         },
      ],
   },
])

export const AppRouter = () => {
   return <RouterProvider router={router} />
}
