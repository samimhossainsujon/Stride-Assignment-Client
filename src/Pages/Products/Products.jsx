import { useState } from "react";
import Product from "../../components/Product/Product";
import { useGetAllProductsQuery } from "../../redux/feature/products/productApi";
import Loading from "../../components/Loading/Loading";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortQuery, setSortQuery] = useState("");
  const [catQuery, setCatQuery] = useState("");
  const [brandQuery, setBrandQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [page, setNewPage] = useState(1);

  const query = {};
  if (searchQuery) query.name = searchQuery;
  if (sortQuery) query.sort = sortQuery;
  if (catQuery) query.category = catQuery;
  if (brandQuery) query.brand = brandQuery;
  if (page) query.page = page;

  const { data: products, isLoading } = useGetAllProductsQuery(query);

  const totalPage = Math.ceil(products?.totalProducts / 6);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPage) {
      setNewPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-cols-12 container mx-auto gap-5 min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-200 col-span-3 pt-12 px-5 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block fixed md:relative z-10 w-full md:w-auto h-full md:h-auto space-y-5`}
      >
        <div className="space-y-3">
          {/* search bar */}
          <span className="font-semibold text-info">Search</span>
          <input
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search by product name"
            className="input input-accent border-accent w-full"
          />
        </div>
        <div className="space-y-3">
          {/* Sort by price */}
          <span className="font-semibold text-info">Sort Product</span>
          <select
            onChange={(e) => setSortQuery(e.target.value)}
            className="select select-accent w-full max-w-xs"
          >
            <option disabled selected>
              Sort by price
            </option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className="space-y-3">
          {/* Filter By category */}
          <span className="font-semibold text-info">Filter By category</span>
          <select
            onChange={(e) => setCatQuery(e.target.value)}
            className="select select-accent w-full max-w-xs"
          >
            <option disabled selected>
              Filter By category
            </option>
            {!isLoading &&
              products?.categories?.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
          </select>
        </div>
        <div className="space-y-3">
          {/* Filter By category */}
          <span className="font-semibold text-info">Filter By brand</span>
          <select
            onChange={(e) => setBrandQuery(e.target.value)}
            className="select select-accent w-full max-w-xs"
          >
            <option disabled selected>
              Filter By brand
            </option>
            {!isLoading &&
              products?.brands?.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
          </select>
        </div>
        <div
          onClick={() => {
            window.location.reload();
          }}
          className="flex justify-center"
        >
          <button className="btn-main">Reset</button>
        </div>

        <button
          className="btn btn-primary md:hidden absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          Close
        </button>
      </div>

      {/* Main Content */}
      <div className="md:col-span-9 col-span-12 pt-12">
        <button
          className={`btn btn-primary md:hidden ${
            isSidebarOpen ? "hidden" : ""
          }`}
          onClick={toggleSidebar}
        >
          Menu
        </button>
        <h1 className="lg:text-5xl text-2xl font-bold text-center text-primary">
          View Our Products
        </h1>
        {/* Product List */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 mx-auto">
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <>
              {products?.products?.length === 0 ? (
                <p>No Products found</p>
              ) : (
                <>
                  {products?.products?.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
                </>
              )}
            </>
          )}
        </div>
        <div className="flex justify-center my-5 gap-5 items-center">
          <button
            onClick={() => handlePage(page - 1)}
            disabled={page === 1}
            className={`btn rounded-full ${
              page === 1
                ? "cursor-not-allowed opacity-50"
                : "btn-neutral hover:btn-link"
            }`}
          >
            <IoArrowBackOutline />
          </button>
          <p className="font-bold text-primary">
            page {page} of {totalPage}
          </p>
          <button
            disabled={page === totalPage}
            onClick={() => handlePage(page + 1)}
            className={`btn rounded-full ${
              page === totalPage
                ? "cursor-not-allowed opacity-50"
                : "btn-neutral hover:btn-link"
            }`}
          >
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
