import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Error from './pages/Error';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume';
import PortfolioCarousel from './pages/PortfolioCarousel';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
      index: true,
      element: <AboutMe/>,
      },
      {
      path: '/Contact',
      element: <Contact />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/PortfolioCarousel',
        element: <PortfolioCarousel />,
      },
       {
         path: '/Resume',
         element: <Resume />,
     },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
