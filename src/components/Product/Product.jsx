/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import useGetSingleUser from "../../Hooks/useGetSingleUser";
import {
  useAddToCartMutation,
  useAddToWishListMutation,
  useRemoveFromCartMutation,
  useRemoveFromWishListMutation,
} from "../../redux/feature/user/userApi";
import Swal from "sweetalert2";

const Product = ({ product }) => {
  const [removeFromWishList] = useRemoveFromWishListMutation();
  const [addToWishList] = useAddToWishListMutation();
  const [addToCart] = useAddToCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  const [singleUserData, isSingleUserDataLoading] = useGetSingleUser();
  const location = useLocation();
  const handleRemoveFromWishList = async (productId) => {
    try {
      const res = await removeFromWishList({ productId }).unwrap();
      if (res.modifiedCount === 1) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product removed from wishlist",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to remove product from wishlist.",
      });
      console.error("Failed to remove from wishlist:", error);
    }
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return (
        <>
          {text.substring(0, maxLength)}...
          <Link
            to={`/product-details/${product._id}`}
            className="text-blue-500"
          >
            See More
          </Link>
        </>
      );
    }
    return text;
  };
  // add to wishlist

  const handleAddToWishList = async (productId) => {
    Swal.fire({
      title: "wait...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const res = await addToWishList({ productId }).unwrap();
    if (res.modifiedCount === 1) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product added on wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "MongoDB Error",
        text: res.message || "Failed to save wishlist in the database.",
      });
    }
  };

  // add to cart
  const handleAddToCart = async (productId) => {
    Swal.fire({
      title: "wait...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const res = await addToCart({ productId }).unwrap();
    if (res.modifiedCount === 1) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product added on wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "MongoDB Error",
        text: res.message || "Failed to save wishlist in the database.",
      });
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const res = await removeFromCart({ productId }).unwrap();
      if (res.modifiedCount === 1) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product removed from cart",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to remove product from cart.",
      });
      console.error("Failed to remove from cart:", error);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={product && product.image}
          alt={product && product.name}
          className="h-64 object-cover w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product && product.name}
          <div className="badge badge-secondary bg-gradient">
            <span>$</span> {product && product.price}
          </div>
        </h2>
        <p>{product && truncateText(product.details, 30)}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{product && product.brand}</div>
          <div className="badge badge-outline">
            <span className="text-info">In Stock</span> &nbsp;
            <span className="text-accent">{product && product.stock}</span>
          </div>
        </div>
        <div className="card-actions justify-between mt-4">
          {location.pathname === "/dashboard/cart-list" ? (
            <></>
          ) : (
            <>
              {singleUserData?.wishlist?.includes(product._id) ? (
                <>
                  <button
                    onClick={() => handleRemoveFromWishList(product._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Remove from Wishlist
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleAddToWishList(product._id)}
                    disabled={
                      !isSingleUserDataLoading &&
                      singleUserData &&
                      singleUserData?.role !== "buyer"
                    }
                    className={`btn btn-neutral hover:btn-info btn-sm ${
                      !isSingleUserDataLoading &&
                      singleUserData &&
                      singleUserData?.role !== "buyer"
                        ? "cursor-not-allowed opacity-40"
                        : ""
                    }`}
                  >
                    wishlist
                  </button>
                </>
              )}
            </>
          )}

          {location.pathname === "/dashboard/wishlist" ? (
            <></>
          ) : (
            <>
              {singleUserData?.cart?.includes(product._id) ? (
                <>
                  <button
                    onClick={() => handleRemoveFromCart(product._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Remove from Cart
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleAddToCart(product._id)}
                    disabled={
                      !isSingleUserDataLoading &&
                      singleUserData &&
                      singleUserData?.role !== "buyer"
                    }
                    className={`btn btn-neutral hover:btn-info btn-sm ${
                      !isSingleUserDataLoading &&
                      singleUserData &&
                      singleUserData?.role !== "buyer"
                        ? "cursor-not-allowed opacity-40"
                        : ""
                    }`}
                  >
                    Add to cart
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
