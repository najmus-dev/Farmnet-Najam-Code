import React from "react";
import buyimg from "../../Assets/buyimg.png";
import Header4 from "./Header4";
import editIcon from "../Assets/editicon.png";
import { IoAddCircleOutline } from "react-icons/io5";
import importicon from "../Assets/importicon.png";

const AdminBuyPage = () => {
  const products = [
    {
      image: buyimg,
      title: "Capsicum",
      rating: 4.1,
      stock: 5.3,
      price: 5,
      minOrder: 10,
    },
    {
      image: buyimg,
      title: "Capsicum",
      rating: 4.1,
      stock: 5.3,
      price: 5,
      minOrder: 10,
    },
  ];

  return (
    <div>
      <Header4 />
      <div className="p-4 md:p-6 mt-10 mb-4 overflow-x-hidden font-Inter">
        {/* Title */}
        <h1 className="text-[#155528] font-bold text-2xl md:text-[40px]  mb-6">
          Buy
        </h1>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-sm md:text-[24px] text-[#919291] font-bold mt-2 ">
            Type of report
          </h1>
          <div className="flex items-center gap-2">
            <img src={editIcon} alt="Edit Icon" className="h-5 w-5" />
            <span className="text-sm lg:text-[20px] font-bold">Edit</span>
          </div>
        </div>

        <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 items-center justify-between">
          {/* Group 1 */}
          <div>
            <div className="flex justify-between items-center">
              <h1 className=" font-extrabold text-2xl md:text-[24px] ">
                PRODUCTION
              </h1>
              <IoAddCircleOutline className=" w-6 h-6 " />
            </div>
            {/* row 1 */}
            <div className="flex flex-wrap gap-4 mt-4">
              {products.map((product, index) => (
                <div key={index} className="w-full md:w-[195px] bg-white">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full md:w-[195px] h-40 md:h-[110px] object-cover rounded-sm"
                  />
                  {/* Product Title and ratings*/}
                  <div className="flex items-center justify-between ">
                    <h2 className="text-lg md:text-[12px] font-bold text-gray-800">
                      {product.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(product.rating) // Filled stars
                                ? "text-[#155528]"
                                : "text-gray-400" // Unfilled stars
                            } ${i === 4 ? "text-gray-400" : ""}`} // Ensure the last star is gray for incomplete ratings
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>

                      {/* Rating */}
                      <span className="text-[10px] text-[#19253C] font-bold">
                        {product.rating}({product.stock})
                      </span>
                    </div>
                  </div>
                  {/* product details */}
                  <p className="text-sm md:text-[12px]">
                    Minimum Order Quantity ({product.minOrder})
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm md:text-[12px]">
                      Stock: {product.stock}t
                    </p>
                    {/* Price button */}
                    <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-md text-center font-bold bg-[#155528] text-white flex items-center justify-center">
                      USD {product.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* row 2 */}
            <div className="flex flex-wrap gap-4 mt-10">
              {products.map((product, index) => (
                <div key={index} className="w-full md:w-[195px] bg-white">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full md:w-[195px] h-40 md:h-[110px] object-cover rounded-sm"
                  />
                  {/* Product Title and ratings*/}
                  <div className="flex items-center justify-between ">
                    <h2 className="text-lg md:text-[12px] font-bold text-gray-800">
                      {product.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(product.rating) // Filled stars
                                ? "text-[#155528]"
                                : "text-gray-400" // Unfilled stars
                            } ${i === 4 ? "text-gray-400" : ""}`} // Ensure the last star is gray for incomplete ratings
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>

                      {/* Rating */}
                      <span className="text-[10px] text-[#19253C] font-bold">
                        {product.rating}({product.stock})
                      </span>
                    </div>
                  </div>
                  {/* product details */}
                  <p className="text-sm md:text-[12px]">
                    Minimum Order Quantity ({product.minOrder})
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm md:text-[12px]">
                      Stock: {product.stock}t
                    </p>
                    {/* Price button */}
                    <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-md text-center font-bold bg-[#155528] text-white flex items-center justify-center">
                      USD {product.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* REVENUE Group */}
          <div>
            <div className="flex justify-between items-center">
              <h1 className=" font-extrabold text-2xl md:text-[24px] ">
                REVENUE
              </h1>
              <IoAddCircleOutline className=" w-6 h-6 " />
            </div>
            {/* row 1 */}
            <div className="flex flex-wrap gap-4 mt-4">
              {products.map((product, index) => (
                <div key={index} className="w-full md:w-[195px] bg-white">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full md:w-[195px] h-40 md:h-[110px] object-cover rounded-sm"
                  />
                  {/* Product Title and ratings*/}
                  <div className="flex items-center justify-between ">
                    <h2 className="text-lg md:text-[12px] font-bold text-gray-800">
                      {product.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(product.rating) // Filled stars
                                ? "text-[#155528]"
                                : "text-gray-400" // Unfilled stars
                            } ${i === 4 ? "text-gray-400" : ""}`} // Ensure the last star is gray for incomplete ratings
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>

                      {/* Rating */}
                      <span className="text-[10px] text-[#19253C] font-bold">
                        {product.rating}({product.stock})
                      </span>
                    </div>
                  </div>
                  {/* product details */}
                  <p className="text-sm md:text-[12px]">
                    Minimum Order Quantity ({product.minOrder})
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm md:text-[12px]">
                      Stock: {product.stock}t
                    </p>
                    {/* Price button */}
                    <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-md text-center font-bold bg-[#155528] text-white flex items-center justify-center">
                      USD {product.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* row 2 */}
            <div className="flex flex-wrap gap-4 mt-10">
              {products.map((product, index) => (
                <div key={index} className="w-full md:w-[195px] bg-white">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full md:w-[195px] h-40 md:h-[110px] object-cover rounded-sm"
                  />
                  {/* Product Title and ratings*/}
                  <div className="flex items-center justify-between ">
                    <h2 className="text-lg md:text-[12px] font-bold text-gray-800">
                      {product.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(product.rating) // Filled stars
                                ? "text-[#155528]"
                                : "text-gray-400" // Unfilled stars
                            } ${i === 4 ? "text-gray-400" : ""}`} // Ensure the last star is gray for incomplete ratings
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>

                      {/* Rating */}
                      <span className="text-[10px] text-[#19253C] font-bold">
                        {product.rating}({product.stock})
                      </span>
                    </div>
                  </div>
                  {/* product details */}
                  <p className="text-sm md:text-[12px]">
                    Minimum Order Quantity ({product.minOrder})
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm md:text-[12px]">
                      Stock: {product.stock}t
                    </p>
                    {/* Price button */}
                    <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-md text-center font-bold bg-[#155528] text-white flex items-center justify-center">
                      USD {product.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* INVENTORY Group */}
          <div>
            <div className="flex justify-between items-center">
              <h1 className=" font-extrabold text-2xl md:text-[24px] ">
                INVENTORY
              </h1>
              <IoAddCircleOutline className=" w-6 h-6 " />
            </div>
            {/* row 1 */}
            <div className="flex flex-wrap gap-4 mt-4">
              {products.map((product, index) => (
                <div key={index} className="w-full md:w-[195px] bg-white">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full md:w-[195px] h-40 md:h-[110px] object-cover rounded-sm"
                  />
                  {/* Product Title and ratings*/}
                  <div className="flex items-center justify-between ">
                    <h2 className="text-lg md:text-[12px] font-bold text-gray-800">
                      {product.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(product.rating) // Filled stars
                                ? "text-[#155528]"
                                : "text-gray-400" // Unfilled stars
                            } ${i === 4 ? "text-gray-400" : ""}`} // Ensure the last star is gray for incomplete ratings
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>

                      {/* Rating */}
                      <span className="text-[10px] text-[#19253C] font-bold">
                        {product.rating}({product.stock})
                      </span>
                    </div>
                  </div>
                  {/* product details */}
                  <p className="text-sm md:text-[12px]">
                    Minimum Order Quantity ({product.minOrder})
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm md:text-[12px]">
                      Stock: {product.stock}t
                    </p>
                    {/* Price button */}
                    <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-md text-center font-bold bg-[#155528] text-white flex items-center justify-center">
                      USD {product.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* row 2 */}
            <div className="flex flex-wrap gap-4 mt-10">
              {products.map((product, index) => (
                <div key={index} className="w-full md:w-[195px] bg-white">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full md:w-[195px] h-40 md:h-[110px] object-cover rounded-sm"
                  />
                  {/* Product Title and ratings*/}
                  <div className="flex items-center justify-between ">
                    <h2 className="text-lg md:text-[12px] font-bold text-gray-800">
                      {product.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      {/* Stars */}
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(product.rating) // Filled stars
                                ? "text-[#155528]"
                                : "text-gray-400" // Unfilled stars
                            } ${i === 4 ? "text-gray-400" : ""}`} // Ensure the last star is gray for incomplete ratings
                          >
                            &#9733;
                          </span>
                        ))}
                      </div>

                      {/* Rating */}
                      <span className="text-[10px] text-[#19253C] font-bold">
                        {product.rating}({product.stock})
                      </span>
                    </div>
                  </div>
                  {/* product details */}
                  <p className="text-sm md:text-[12px]">
                    Minimum Order Quantity ({product.minOrder})
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm md:text-[12px]">
                      Stock: {product.stock}t
                    </p>
                    {/* Price button */}
                    <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-md text-center font-bold bg-[#155528] text-white flex items-center justify-center">
                      USD {product.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* save button */}
        <div className="flex justify-end items-end">
          <div className="flex justify-end gap-2 mt-8 ">
            <img src={importicon} alt="Save Icon" className="h-5 w-5" />
            <span className="text-sm lg:text-[20px] font-bold">Save</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBuyPage;
