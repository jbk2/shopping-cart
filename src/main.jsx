import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './assets/stylesheets/index.css';
import HomePage from "./routes/HomePage";
import CataloguePage from "./routes/CataloguePage";
import CartPage from "./routes/CartPage";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: < HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/catalogue',
        element: < CataloguePage />,
      },
      {
        path: '/cart',
        element: < CartPage />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
