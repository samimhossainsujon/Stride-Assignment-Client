import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../../src/ErrorPage";
import AdminLayout from "../layouts/AdminLayout";
import AllUser from "../pages/admin/AllUser";
import Loginpage from "../pages/Auth/Loginpage";
import RegisterPage from "../pages/Auth/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/login", element: <Loginpage /> },
            { path: "/register", element: <RegisterPage /> },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "user", element: <AllUser /> },
        ],
    },
]);
