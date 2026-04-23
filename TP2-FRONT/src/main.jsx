import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LandingPage from './Pages/Landing';
import './index.css'
import HomePage from './Pages/Home';

const router = createBrowserRouter([
  {path: '/', element: <LandingPage/>},
  {path: '/home', element: <HomePage/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
