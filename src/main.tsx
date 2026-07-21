import '@styles/main.scss'
import { App } from '@app/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const redirect = sessionStorage.redirect
delete sessionStorage.redirect

if (redirect) {
   window.history.replaceState(null, '', redirect)
}

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <App />
   </StrictMode>,
)
