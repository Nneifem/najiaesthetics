import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import Contact from './pages/Contact'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/homepage',
        element: <Homepage />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);