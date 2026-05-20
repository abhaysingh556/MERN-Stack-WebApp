import React from "react";

export default function AutoLuxWebsite() {
  const categories = [
    {
      title: "Engine",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
    },
    {
      title: "Brakes",
      image:
        "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800",
    },
    {
      title: "Suspension",
      image:
        "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800",
    },
    {
      title: "Electronics",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800",
    },
  ];

  const products = [
    {
      title: "Brake Pad Pro",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600",
    },
    {
      title: "Engine Oil Kit",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600",
    },
    {
      title: "Alloy Wheel",
      price: "₹8,499",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600",
    },
    {
      title: "Suspension Kit",
      price: "₹5,499",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wider text-red-500">
            AutoLux
          </h1>

          <nav>
            <ul className="flex gap-8 text-sm uppercase tracking-wide">
              <li>
                <a
                  href="#"
                  className="hover:text-red-500 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-red-500 transition duration-300"
                >
                  Parts
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-red-500 transition duration-300"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-red-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-2xl cursor-pointer hover:scale-110 transition">
            🛒
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-4 animate-fadeUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Car <br /> Spare Parts
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Performance. Precision. Power.
          </p>

          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg">
            Shop Now
          </button>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Categories</h2>

          <div className="w-24 h-1 bg-red-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl cursor-pointer bg-gray-900 hover:-translate-y-3 transition duration-500 shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Featured Products</h2>

            <div className="w-24 h-1 bg-red-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-black rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-500 transition duration-500 hover:-translate-y-2 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {product.title}
                  </h3>

                  <p className="text-red-500 text-xl font-bold mb-5">
                    {product.price}
                  </p>

                  <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl transition duration-300 font-medium">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1000"
              alt="garage"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-6">
              Built For Car Enthusiasts
            </h2>

            <p className="text-gray-400 text-lg leading-8 mb-8">
              AutoLux delivers premium spare parts engineered for durability,
              precision, and high performance. From suspension systems to
              advanced electronics, every product is crafted to elevate your
              driving experience.
            </p>

            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 text-center text-gray-500">
        © 2026 AutoLux Parts. All Rights Reserved.
      </footer>
    </div>
  );
}