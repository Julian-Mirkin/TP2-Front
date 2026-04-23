import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LandingPage from './Pages/Landing';
import './index.css'

const router = createBrowserRouter([
  {path: '/', element: <LandingPage/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
