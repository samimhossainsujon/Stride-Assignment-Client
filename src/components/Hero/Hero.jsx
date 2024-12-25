import heroImg from "../../assets/image.jpg"; // Adjust the path as needed

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-secondary to-accent">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={heroImg}
          alt="Hero"
          className=" md:w-[50%] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-white">
            Join TechOrbit Today!
          </h1>
          <p className="py-6 text-white">
            Discover the latest gadgets, unbeatable deals, and exclusive offers
            at MobileMart. Sign up now and stay connected to the world of smart
            technology at your fingertips!
          </p>
          <button className="btn btn-info hover:btn-neutral">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
