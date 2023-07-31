import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout/page.jsx";
import HomePage from "./homePage/page.jsx";
import BrandPage from "./brandPage/page.jsx";
import SuperSpecialCategory from "./superSpecialCategory/page.jsx";
import Shop from "./shop/page.jsx";
import Product from "./product/page.jsx";
import Checkout from "./checkout/page.jsx";
import Receipt from "./receipt/page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "brandpage",
        element: <BrandPage />,
      },
      {
        path: "/superspecialcategory/:id",
        element: <SuperSpecialCategory />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/receipt/:id",
        element: <Receipt />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
