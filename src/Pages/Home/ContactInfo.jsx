
const ContactInfo = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contact Details */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Address
            </h3>
            <p className="text-gray-600">
              123 Tech Street, MobileMart Plaza, City Center, 12345
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Email</h3>
            <p className="text-gray-600">support@mobilemart.com</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Phone</h3>
            <p className="text-gray-600">+123 456 7890</p>
          </div>
          {/* Operating Hours */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Operating Hours
            </h3>
            <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
            <p className="text-gray-600">Sun: Closed</p>
          </div>
          {/* Social Media */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Follow Us
            </h3>
            <p className="text-gray-600">
              <a href="https://facebook.com" className="text-blue-500">
                Facebook
              </a>
              ,{" "}
              <a href="https://twitter.com" className="text-blue-400">
                Twitter
              </a>
              ,{" "}
              <a href="https://instagram.com" className="text-pink-500">
                Instagram
              </a>
            </p>
          </div>
          {/* Customer Support */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Customer Support
            </h3>
            <p className="text-gray-600">
              Live chat available 24/7 or email us for inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
