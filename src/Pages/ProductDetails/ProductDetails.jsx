import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/feature/products/productApi";
import Loading from "../../components/Loading/Loading";
import useGetSingleUser from "../../Hooks/useGetSingleUser";
import {
  useAddToCartMutation,
  useAddToWishListMutation,
} from "../../redux/feature/user/userApi";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const [addToWishList] = useAddToWishListMutation();
  const [addToCart] = useAddToCartMutation();
  const [singleUserData, isSingleUserDataLoading] = useGetSingleUser();
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetSingleProductQuery(productId);

  if (isLoading) return <Loading />;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

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

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-6 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-2xl font-semibold text-green-600">
            ${product.price}
          </p>
          <div className="text-gray-600 space-y-1">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>
            <p>
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p>
              <span className="font-semibold">Stock:</span> {product.stock}{" "}
              units available
            </p>
          </div>
          <p className="text-gray-700">{product.details}</p>

          {/* Ratings Section
          <div className="pt-4 border-t">
            <h2 className="text-lg font-semibold text-gray-800">Ratings</h2>
            <p className="text-gray-600">Rating: {product?.ratings} / 5</p>
          </div> */}

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              onClick={() => handleAddToCart(product._id)}
              disabled={
                (!isSingleUserDataLoading &&
                  singleUserData &&
                  singleUserData?.role !== "buyer") ||
                singleUserData?.cart?.includes(product._id)
              }
              className={`bg-primary text-white py-2 px-4 rounded-lg hover:bg-neutral hover:text-black ${
                (!isSingleUserDataLoading &&
                  singleUserData &&
                  singleUserData?.role !== "buyer") ||
                singleUserData?.cart?.includes(product._id)
                  ? "cursor-not-allowed opacity-40 btn-disabled"
                  : ""
              }`}
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleAddToWishList(product._id)}
              disabled={
                (!isSingleUserDataLoading &&
                  singleUserData &&
                  singleUserData?.role !== "buyer") ||
                singleUserData?.wishlist?.includes(product._id)
              }
              className={`bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 ${
                (!isSingleUserDataLoading &&
                  singleUserData &&
                  singleUserData?.role !== "buyer") ||
                singleUserData?.wishlist?.includes(product._id)
                  ? "cursor-not-allowed opacity-40 btn-disabled"
                  : ""
              }`}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
