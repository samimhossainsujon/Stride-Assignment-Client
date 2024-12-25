import Product from "../../components/Product/Product";
import { useGetAllProductsQuery } from "../../redux/feature/products/productApi";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h1>
          <h4 className="mt-2 text-lg text-gray-600">
            Here are some of our products glints
          </h4>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.products?.slice(0, 4).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        {products?.products?.length > 4 && (
          <div className="text-center mt-6">
            <Link
              to={"/products"}
              className="btn-main"
            >
              See More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
