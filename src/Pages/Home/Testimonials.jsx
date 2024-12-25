import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="bg-gradient text-gray-100 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <h4 className="mt-2 text-lg">Some Client About Us</h4>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
