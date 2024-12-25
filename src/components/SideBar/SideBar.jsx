import { Link, NavLink } from "react-router-dom";
import useGetSingleUser from "../../Hooks/useGetSingleUser";
import Loading from "../Loading/Loading";

const SideBar = () => {
  const [singleUserData, isSingleUserDataLoading] = useGetSingleUser();

  if (isSingleUserDataLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-800 text-white font-bold h-full p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">
            Home
          </Link>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-white text-primary block py-2 px-4 rounded"
                : "block py-2 px-4 rounded hover:bg-gray-700"
            }
          >
            Profile
          </NavLink>
        </li>
        {singleUserData?.role === "buyer" && (
          <>
            <li>
              <NavLink
                to="/dashboard/wishlist"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-white text-primary block py-2 px-4 rounded"
                    : "block py-2 px-4 rounded hover:bg-gray-700"
                }
              >
                Wish List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/cart-list"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-white text-primary block py-2 px-4 rounded"
                    : "block py-2 px-4 rounded hover:bg-gray-700"
                }
              >
                Cart List
              </NavLink>
            </li>
          </>
        )}
        {singleUserData?.role === "admin" && (
          <>
            <li>
              <NavLink
                to="/dashboard/view-all-users"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-white text-primary block py-2 px-4 rounded"
                    : "block py-2 px-4 rounded hover:bg-gray-700"
                }
              >
                View All Users
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/dashboard/banned-users"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-white text-primary block py-2 px-4 rounded"
                    : "block py-2 px-4 rounded hover:bg-gray-700"
                }
              >
                Banned Users
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/dashboard/seller-list"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-white text-primary block py-2 px-4 rounded"
                    : "block py-2 px-4 rounded hover:bg-gray-700"
                }
              >
                Seller List
              </NavLink>
            </li> */}
          </>
        )}
        {singleUserData?.role === "seller" && (
          <>
            <li>
              <NavLink
                to="/dashboard/add-new-product"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-white text-primary block py-2 px-4 rounded"
                    : "block py-2 px-4 rounded hover:bg-gray-700"
                }
              >
                Add New Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/view-products"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-white text-primary block py-2 px-4 rounded"
                    : "block py-2 px-4 rounded hover:bg-gray-700"
                }
              >
                View Products
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
