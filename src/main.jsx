import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=''>
      <AuthProvider>
        <RouterProvider router={router}> </RouterProvider>
      </AuthProvider>
    </div>
  </StrictMode>,
)
