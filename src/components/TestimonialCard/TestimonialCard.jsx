const TestimonialCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 text-center">
      <div className="text-6xl text-yellow-500 mb-4">&ldquo;</div>
      <p className="text-gray-700 mb-6">
        I recently purchased a new smartphone from TechOrbit, and I could not be
        happier with my experience. The customer service was excellent, and the
        phone works perfectly. Highly recommend!
      </p>
      <div className="relative">
        <img
          className="w-20 h-20 mx-auto rounded-full border-4 border-yellow-500"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="John Doe"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800">John Doe</h3>
        <p className="text-sm text-gray-600">Satisfied Customer</p>
        <div className="flex justify-center items-center gap-1 mt-4">
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
