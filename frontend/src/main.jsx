import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './index.css'
import Root from './Root.jsx';
import HomePage from './components/page/HomePage/HomePage.jsx';
import ErrorPage from './components/page/ErrorPage/ErrorPage.jsx';
import Product from './components/page/Product/Product.jsx';
import SignIn from './components/page/authPage/SingIn/SignIn.jsx';
import Register from './components/page/authPage/Register/Register.jsx';
import TravelMapPage from './components/page/TravelMapPage/TravelMapPage.jsx';
import CityList from './components/page/TravelMapPage/CitiesSection/CityList.jsx';
import CountryList from './components/page/TravelMapPage/CountriesSection/CountryList.jsx';
import CityDetails from './components/page/TravelMapPage/CitiesSection/CityDetails.jsx';
import NewVisiting from './components/layouts/AddNewVisiting/NewVisiting.jsx';


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
      {
        path: "/signIn",
        element: <SignIn />
      },
      {
        path: "/registration",
        element: <Register />
      },
      {
        path: "/travelMap",
        element: <TravelMapPage />,
        children: [
          {
            index: true,
            element: <Navigate replace to="cities" />
          },
          {
            path: "cities",
            element: <CityList />
          },
          {
            path: "cities/:id",
            element: <CityDetails />
          },
          {
            path: "newVisiting",
            element: <NewVisiting />
          },
          {
            path: "countries",
            element: <CountryList />
          },
        ]
      }

    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
