import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { lazy } from "react";
import Likes from "../pages/Likes";
import ProductReview from "../pages/ProductReview";
import Category from "../pages/Category";

const Home = lazy(() => import("../pages/Home"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"))

export const MainRouter = createBrowserRouter([
    {
        path: "/", element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/product-detail/:id', element: <ProductDetail /> },
            { path: '/likes', element: <Likes /> },
            { path: ':id', element: <ProductReview /> },
            { path: 'category/:categoryId', element: <Category /> }
        ]
    }
])