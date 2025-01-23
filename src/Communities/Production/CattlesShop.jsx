import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook from react-router-dom
import community5 from "../../Assets/community5.png";
import specialoffer from "../../Assets/specialoffer.png";
import cowimg from "../../Assets/cowimg.png";
import sheepimg from "../../Assets/sheepimg.png";
import chickenimg from "../../Assets/chickenimg.png";
import goatimg from "../../Assets/gaotimg.png";

const CattlesShop = () => {
  const location = useLocation(); // Get the current location object
  const [mainImage, setMainImage] = useState(community5); // Default main image

  useEffect(() => {
    // Extract the query parameter from the URL
    const queryParams = new URLSearchParams(location.search);
    const image = queryParams.get("image");
    if (image) {
      setMainImage(decodeURIComponent(image)); // Set the main image if found in query
    }
  }, [location.search]); // Update when the search (query) part of the URL changes

  const products = [
    {
      image: cowimg,
      title: "CATTLE",
      rating: 4.1,
      stock: 1200,
      price: 5,
      minOrder: 50,
    },
    {
      image: sheepimg,
      title: "Onions",
      rating: 4.1,
      stock: 1200,
      price: 5,
      minOrder: 50,
    },
    {
      image: chickenimg,
      title: "Beans",
      rating: 4.1,
      stock: 1200,
      price: 5,
      minOrder: 50,
    },
    {
      image: goatimg,
      title: "Avocado",
      rating: 4.1,
      stock: 1200,
      price: 5,
      minOrder: 50,
    },
  ];

  return (
    <div className="p-4 md:p-8 font-Inter overflow-x-hidden">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          CattlesShop
        </h1>
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px] mt-8">
          Market day special
        </h1>
      </div>

      <div className="relative w-full">
        {/* main image */}
        <img
          src={mainImage}
          alt="Main Product"
          className="w-full md:h-[778px] object-cover rounded-md"
        />
        <div className="flex justify-between items-center px-4">
          {/* Left Text Block */}
          <div className="text-left absolute bottom-2 md:bottom-4 left-4 md:left-8 right-0">
            <h1 className="text-white text-2xl md:text-[48px] font-bold">
              Maize
            </h1>
            <h1 className="text-white md:text-[36px] font-medium md:mt-4">
              Dry maize
            </h1>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-end absolute bottom-2 md:bottom-2 left-0 right-4">
            <img
              src={specialoffer}
              alt="Special Offer"
              className="w-[100px] md:w-[199px] h-[80px] md:h-[201px]"
            />
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="mt-10 overflow-x-hidden font-Inter">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
            Produce
          </h1>
          <h1 className="text-[#979797] hover:text-[#b1b0b0] font-bold text-lg md:text-[32px]">
            View more
          </h1>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-10">
          {products.map((product, index) => (
            <div key={index} className="w-full bg-[#F3F5F5]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 md:h-[397px] object-cover rounded"
              />
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg md:text-[18px] font-extrabold">
                    {product.title}
                  </h2>
                </div>
                <p className="text-sm md:text-[18px] mb-2">
                  Minimum Order Quantity {product.minOrder}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm md:text-[18px]">
                    Stock: {product.stock} kg
                  </p>
                  <button className="text-sm md:text-[10px] w-[83px] md:w-[105px] h-[14px] md:h-[22px] py-1 rounded-tr-lg rounded-bl-lg text-center font-bold bg-[#155528] text-white flex items-center justify-center">
                    USD {product.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Button */}
        <div className="flex justify-center md:justify-end mt-20">
          <a href="/cart-page">
            <button className="text-[24px] rounded-md font-medium bg-[#155528] text-white w-[300px] md:w-[440px] h-[50px] py-1">
              Go To Cart
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CattlesShop;
