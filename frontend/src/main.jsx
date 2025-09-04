import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from './Root.jsx';
import HomePage from './components/page/HomePage/HomePage.jsx';
import ErrorPage from './components/page/ErrorPage/ErrorPage.jsx';
import Product from './components/page/Product/Product.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "*",
        element: <ErrorPage />
      },
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/product",
        element: <Product />
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
