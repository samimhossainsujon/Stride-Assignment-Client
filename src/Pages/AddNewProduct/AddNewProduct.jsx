import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAddProductMutation } from "../../redux/feature/products/productApi";
import Input from "../../components/Input/Input";
import InputImage from "../../components/Input/InputImage";
import GetHostUrl from "../../firebase/getHostUrl";

const AddNewProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addProduct] = useAddProductMutation();

  const onSubmit = async (data) => {
    try {
      Swal.fire({
        title: "wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const image = await GetHostUrl(data.image[0]);
      data.image = image;
      const res = await addProduct(data).unwrap();
      if (res.acknowledged === true) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "MongoDB Error",
          text: "Failed to add product.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add product.",
      });
      console.error("Failed to add product:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-4">
        Add New Product
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <Input
          label="Name"
          placeholder="Enter Product Name"
          type="text"
          register={register}
          registerName="name"
          validation={{ required: "Name is required" }}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <Input
          label="Price"
          placeholder="Enter Product Price"
          type="number"
          register={register}
          registerName="price"
          validation={{ required: "Price is required" }}
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}

        <Input
          label="Category"
          placeholder="Enter Product Category"
          type="text"
          register={register}
          registerName="category"
          validation={{ required: "Category is required" }}
        />
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}

        <Input
          label="Brand"
          placeholder="Enter Product Brand"
          type="text"
          register={register}
          registerName="brand"
          validation={{ required: "Brand is required" }}
        />
        {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}

        <Input
          label="Details"
          placeholder="Enter Product Details"
          type="text"
          register={register}
          registerName="details"
          validation={{ required: "Details are required" }}
        />
        {errors.details && (
          <p className="text-red-500">{errors.details.message}</p>
        )}

        <Input
          label="Stock"
          placeholder="Enter Product Stock"
          type="number"
          register={register}
          registerName="stock"
          validation={{ required: "Stock is required" }}
        />
        {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}

        <div className="block">
          <InputImage register={register} registerName="image" />
        </div>
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
