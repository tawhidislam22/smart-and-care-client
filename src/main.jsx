import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx'
import AuthProvider from './Context/AuthContext/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
      <ToastContainer />
    </AuthProvider>


  </StrictMode>,
)
