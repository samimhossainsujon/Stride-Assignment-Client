function Banner() {
    return (
        <div
            className="hero min-h-[60vh]"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div>
                    <h1 className="mb-5 text-5xl font-bold uppercase">Mobile shop</h1>
                    <p className="mb-5">
                        Your trusted destination for smartphones, accessories, and tech products. At our phone shop, you’ll find the latest models of smartphones, feature phones, chargers, headphones, cases, screen protectors, and much more. We offer high-quality products at affordable prices with excellent customer service.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
