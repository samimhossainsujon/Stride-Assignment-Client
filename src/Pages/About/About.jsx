import overViewImg from '../../assets/overview.webp';
const About = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-800">
          About TechOrbit
        </h1>
        <p className="text-lg text-gray-600">
          Your one-stop destination for all your tech shopping needs.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={overViewImg}
            alt="TechOrbit Overview"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At TechOrbit, we aim to revolutionize the online shopping experience
            for technology enthusiasts. From budget smartphones to flagship
            devices, we provide a wide range of products tailored to meet
            diverse customer needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With a responsive and user-friendly interface, secure
            authentication, and seamless role management, TechOrbit ensures a
            hassle-free experience for buyers, sellers, and administrators
            alike.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">
              Wide Product Range
            </h3>
            <p className="text-gray-600 mt-2">
              Explore a diverse catalog of tech products, including the latest
              smartphones, accessories, and more.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">
              Secure Platform
            </h3>
            <p className="text-gray-600 mt-2">
              Enjoy safe and secure transactions with advanced authentication
              systems like Firebase and JWT.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">
              Responsive Design
            </h3>
            <p className="text-gray-600 mt-2">
              Access TechOrbit seamlessly on any device with our fully
              responsive and optimized design.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Join the TechOrbit Community Today!
        </h2>
        <p className="text-gray-600 mt-2">
          Discover, explore, and shop the best technology products at your
          fingertips.
        </p>
        <button className="btn btn-primary mt-4">Start Shopping</button>
      </div>
    </div>
  );
};

export default About;
