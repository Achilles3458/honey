import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Product from '../pages/product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Product />,
  },
  {
    element: <></>,
    children: [
      // {
      //   path: '/main',
      //   element: <NewScan />,
      // },
      // {
      //   path: '/results',
      //   element: <Results />,
      // },
      // {
      //   path: '/Configuration',
      //   element: <Configuration />,
      // },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
