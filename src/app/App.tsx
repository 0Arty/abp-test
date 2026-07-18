import { AppRouter } from '@app/routers'
import { QueryProvider } from '@app/providers'

export const App = () => {
   return (
      <QueryProvider>
         <AppRouter />
      </QueryProvider>
   )
}
