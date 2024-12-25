import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-primary text-center mb-6">
        Contact Us
      </h2>
      <p className="text-lg text-info text-center mb-8">
        We&apos;d love to hear from you! Fill out the form below, and we&apos;ll get
        back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-primary"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-primary"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-primary"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
            rows="5"
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn-main mt-4 w-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
