import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Error from './components/Error';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume';
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
         path: '/Resume',
         element: <Resume />,
     },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
