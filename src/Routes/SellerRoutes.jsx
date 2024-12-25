/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import useGetSingleUser from "../Hooks/useGetSingleUser";

const SellerRoutes = ({ children }) => {
  const [singleUserData, isSingleUserDataLoading] = useGetSingleUser();
  if (isSingleUserDataLoading) {
    return <Loading />;
  }
  if (
    singleUserData.userStatus === "unbanned" &&
    singleUserData.role === "seller"
  ) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoutes;
