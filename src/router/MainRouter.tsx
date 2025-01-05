import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

export const MainRouter = createBrowserRouter([
    {
        path: "/", element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/product-detail/:id', element: <ProductDetail /> } 
        ]
    }
])