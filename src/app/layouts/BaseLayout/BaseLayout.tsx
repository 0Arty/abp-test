import { Footer } from '@widgets/Footer/Footer'
import { Outlet } from 'react-router-dom'

export const BaseLayout = () => {
   return (
      <>
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   )
}
