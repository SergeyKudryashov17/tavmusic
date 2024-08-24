import AboutPage from "@/pages/AboutPage";
import ArticlePage from "@/pages/ArticlePage";
import CartPage from "@/pages/CartPage";
import CategoriesPage from "@/pages/CategoriesPage";
import MainPage from "@/pages/MainPage";
import OrderTrackingPage from "@/pages/OrderTrackingPage";
import OrderCompletionPage from "@/pages/OrderСompletionPage";
import ProductPage from "@/pages/ProductPage";
import PurchasePage from "@/pages/PurchasePage";
import SimplePage from "@/pages/SimplePage";
import { RouteObject } from "react-router-dom";

export const routers: RouteObject[] = [
    {
        id: 'Main',
        path: '/',
        element: <MainPage />
    },
    {
        id: 'Cart',
        path: '/cart',
        element: <CartPage />
    },
    {
        id: 'Categories',
        path: '/categories',
        element: <CategoriesPage />
    },
    {
        id: 'OrderCompletion',
        path: '/cart',
        element: <OrderCompletionPage />
    },
    {
        id: 'OrderTracking',
        path: '/cart',
        element: <OrderTrackingPage />
    },
    {
        id: 'Product',
        path: '/product',
        element: <ProductPage />
    },
    {
        id: 'Purchase',
        path: '/purchase',
        element: <PurchasePage />
    },
    {
        id: 'About',
        path: '/product',
        element: <AboutPage />
    },
    {
        id: 'Simple',
        path: '/simple',
        element: <SimplePage />,
    },
    {
        id: 'Article',
        path: '/article',
        element: <ArticlePage />
    }
]; 