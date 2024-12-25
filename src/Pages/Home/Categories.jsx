
const categories = [
  {
    name: "Smartphones",
    image:
      "https://opsg-img-cdn-gl.heytapimg.com/epb/202406/26/IzcVfAu2kdJjoeYS.png",
  },
  {
    name: "Accessories",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2vzCFF9flp2tWBk5jX2aGduwls7XhkzBXA&s",
  },
  {
    name: "Tablets",
    image:
      "https://media.wired.com/photos/649b2dbfc859c4a1cdecc412/master/w_960,c_limit/Amazon-Fire-Max-11-Review--Stand-Gear.jpg",
  },
  {
    name: "Budget Phones",
    image:
      "https://media.wired.com/photos/66469169db771a38599a23da/4:3/w_1732,h_1299,c_limit/Google%20Pixel%208a%205G%20128G%20Abstract%20Background%20SOURCE%20Best%20Buy.jpg",
  },
  {
    name: "Flagships",
    image:
      "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/04/front-and-rear-view-of-some-flagship-smartphones.jpg",
  },
];

const Categories = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group border rounded-lg overflow-hidden shadow-md hover:shadow-lg bg-white"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover transition-transform transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-lg font-semibold">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
