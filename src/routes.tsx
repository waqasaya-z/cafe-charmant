import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList";

const router = createBrowserRouter([
    { path: '/', element: <Layout />, children: [
        { index: true, element: <HomePage /> },
        { path: '/products', element: <ProductList /> }
    ] }
])

export default router;