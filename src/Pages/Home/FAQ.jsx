
const FAQ = () => {
  const faqs = [
    {
      question: "What types of products do you sell?",
      answer:
        "We offer a wide range of mobile phones, accessories, tablets, wearables, and flagship models from top brands like Apple, Samsung, Xiaomi, and Realme.",
    },
    {
      question: "Do you provide warranties on products?",
      answer:
        "Yes, all our products come with manufacturer warranties. Warranty details are included with each product listing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit/debit cards, digital wallets, and cash-on-delivery for your convenience.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, once your order is placed, you'll receive a tracking ID to monitor your delivery status.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 7-day return policy for unused items in their original condition. Terms and conditions apply.",
    },
    {
      question: "Do you offer discounts or promotions?",
      answer:
        "Yes, we regularly provide discounts and promotions on selected products. Check our website or subscribe to our newsletter for updates.",
    },
  ];

  return (
    <section className="py-14 bg-gradient text-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              tabIndex={0}
              className="collapse collapse-arrow border-base-300 bg-base-200 border rounded-lg"
            >
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
