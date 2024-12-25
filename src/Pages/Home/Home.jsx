import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Categories from "./Categories";
import ContactInfo from "./ContactInfo";
import FAQ from "./FAQ";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="">
        <FeaturedProducts />
        <Testimonials />
        <Categories />
        <FAQ />
        <ContactInfo />
      </div>
      <Footer />
    </>
  );
};

export default Home;
