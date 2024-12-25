import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import DashBoard from "../Layout/Dashboard/DashBoard";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import BuyerRoutes from "./BuyerRoutes";
import WishList from "../Pages/WishList/WishList";
import CartList from "../Pages/CartList/CartList";
import SellerRoutes from "./SellerRoutes";
import AddNewProduct from "../Pages/AddNewProduct/AddNewProduct";
import ViewProduct from "../Pages/ViewProduct/ViewProduct";
import ViewAllUser from "../Pages/ViewAllUser/ViewAllUser";
import BannedUser from "../Pages/BannedUser/BannedUser";
import SellerList from "../Pages/SellerList/SellerList";
import AdminRoutes from "./AdminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/products", element: <Products /> },
      { path: "/product-details/:productId", element: <ProductDetails /> },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <PrivateRoute>
            <BuyerRoutes>
              <WishList />
            </BuyerRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/cart-list",
        element: (
          <PrivateRoute>
            <BuyerRoutes>
              <CartList />
            </BuyerRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-new-product",
        element: (
          <PrivateRoute>
            <SellerRoutes>
              <AddNewProduct />
            </SellerRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/view-products",
        element: (
          <PrivateRoute>
            <SellerRoutes>
              <ViewProduct />
            </SellerRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/view-all-users",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <ViewAllUser />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/banned-users",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <BannedUser />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/seller-list",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <SellerList />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
