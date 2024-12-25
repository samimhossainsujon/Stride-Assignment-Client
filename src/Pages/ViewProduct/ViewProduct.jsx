import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  useGetSellerProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../redux/feature/products/productApi";
import Loading from "../../components/Loading/Loading";

const ViewProduct = () => {
  const { data: products, isLoading } = useGetSellerProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId).unwrap();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product deleted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete product.",
      });
      console.error("Failed to delete product:", error);
    }
  };

  const handleUpdateSubmit = async (data) => {
    try {
      const updatedData = { ...selectedProduct, ...data };
      await updateProduct(updatedData).unwrap();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      document.getElementById("update-modal").close();
      reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update product.",
      });
      console.error("Failed to update product:", error);
    }
  };

  const openUpdateModal = (product) => {
    setSelectedProduct(product);
    reset(product); // Pre-fill the form with current product data
    document.getElementById("update-modal").showModal();
  };

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Products</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>{product.stock}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary mr-2"
                    onClick={() => openUpdateModal(product)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      <dialog id="update-modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Product</h3>
          <form
            onSubmit={handleSubmit(handleUpdateSubmit)}
            className="space-y-4"
          >
            <div>
              <label className="block font-semibold">Name</label>
              <input
                className="input input-bordered w-full"
                {...register("name")}
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label className="block font-semibold">Price</label>
              <input
                className="input input-bordered w-full"
                type="number"
                {...register("price")}
                placeholder="Enter product price"
              />
            </div>
            <div>
              <label className="block font-semibold">Category</label>
              <input
                className="input input-bordered w-full"
                {...register("category")}
                placeholder="Enter product category"
              />
            </div>
            <div>
              <label className="block font-semibold">Brand</label>
              <input
                className="input input-bordered w-full"
                {...register("brand")}
                placeholder="Enter product brand"
              />
            </div>
            <div>
              <label className="block font-semibold">Stock</label>
              <input
                className="input input-bordered w-full"
                type="number"
                {...register("stock")}
                placeholder="Enter product stock"
              />
            </div>
            <div className="modal-action">
              <button className="btn btn-primary" type="submit">
                Save Changes
              </button>
              <button
                className="btn"
                type="button"
                onClick={() => document.getElementById("update-modal").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ViewProduct;
