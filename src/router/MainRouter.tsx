import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"))

export const MainRouter = createBrowserRouter([
    {
        path: "/", element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/product-detail/:id', element: <ProductDetail /> } 
        ]
    }
])