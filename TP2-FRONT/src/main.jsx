import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LandingPage from './Pages/Landing';
import './index.css'
import './Components/components.css'
import HomePage from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import AuthPage from './Pages/Auth';
import { AuthProvider } from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import ProductPage from './Pages/ProductPage';

const router = createBrowserRouter([
  {path: '/', element: <LandingPage/>},
  {path: '/login', element: <AuthPage mode='login'/>},
  {path: '/register', element: <AuthPage mode='register'/>},
  {path: '/home', element: <ProtectedRoute><HomePage/></ProtectedRoute>},
  {path: '/product/:nombre', element: <ProductPage/>},
  {path: '*', element: <ErrorPage/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
