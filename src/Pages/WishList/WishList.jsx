import Loading from "../../components/Loading/Loading";
import Product from "../../components/Product/Product";
import { useGetWishlistQuery } from "../../redux/feature/user/userApi";

const WishList = () => {
  const { data, isLoading } = useGetWishlistQuery();
  console.log(data);

  return (
    <div>
      <h1 className="lg:text-5xl text-2xl font-bold text-center text-primary mb-6">
        View Your Wish List
      </h1>
      {/* Product List */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 mx-auto">
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <>
            {data.length === 0 ? (
              <p>No Products found</p>
            ) : (
              <>
                {data.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WishList;
