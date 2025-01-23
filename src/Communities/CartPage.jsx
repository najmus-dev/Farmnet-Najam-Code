// // import React from 'react'

// // const CartPage = () => {
// //   return (
// //     <div>CartPage</div>
// //   )
// // }

// // export default CartPage

// // import React from "react";
// // import buyimg from "../Assets/buyimg.png";
// // import cart from "../Assets/cart.png";

// // const CartPage = () => {
// //   // Array of product data
// //   const products = [
// //     {
// //       image: buyimg,
// //       title: "Capsicum",
// //       rating: 4.1,
// //       stock: 5.3,
// //       price: 5,
// //       minOrder: 10,
// //     },
// //     {
// //       image: buyimg,
// //       title: "Capsicum",
// //       rating: 4.1,
// //       stock: 5.3,
// //       price: 5,
// //       minOrder: 10,
// //     },
// //     {
// //       image: buyimg,
// //       title: "Capsicum",
// //       rating: 4.1,
// //       stock: 5.3,
// //       price: 5,
// //       minOrder: 10,
// //     },
// //     {
// //       image: buyimg,
// //       title: "Capsicum",
// //       rating: 4.1,
// //       stock: 5.3,
// //       price: 5,
// //       minOrder: 10,
// //     },
// //   ];

// //   return (
// //     <div className="p-4 md:p-6 mt-10 mb-20 overflow-x-hidden font-Inter">
// //       {/* Title */}
// //       <div className="flex items-center space-x-4 mb-6">
// //         <h1 className="text-[#155528] font-bold text-2xl md:text-[40px]">
// //           Cart
// //         </h1>
// //         <img src={cart} alt="cart" />
// //       </div>
// //       {/* grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-8 mt-10">
// //         {products.map((product, index) => (
// //           <div key={index} className="w-full md:w-[195px] bg-white">
// //             {/* Image */}
// //             <img
// //               src={product.image}
// //               alt={product.title}
// //               className="w-full md:w-[195px] h-40 md:h-[110px] object-cover "
// //             />
// //             {/* Product Title and ratings*/}
// //             <div className="flex items-center justify-between ">
// //               <h2 className="text-lg md:text-[12px] font-bold text-gray-800">
// //                 {product.title}
// //               </h2>
// //               <div className="flex items-center space-x-2">
// //                 {/* Stars */}
// //                 <div className="flex">
// //                   {[...Array(5)].map((_, i) => (
// //                     <span
// //                       key={i}
// //                       className={`text-sm ${
// //                         i < Math.floor(product.rating) // Filled stars
// //                           ? "text-[#155528]"
// //                           : "text-gray-400" // Unfilled stars
// //                       } ${i === 4 ? "text-gray-400" : ""}`} // Ensure the last star is gray for incomplete ratings
// //                     >
// //                       &#9733;
// //                     </span>
// //                   ))}
// //                 </div>

// //                 {/* Rating */}
// //                 <span className="text-[10px] text-[#19253C] font-bold">
// //                   {product.rating}({product.stock})
// //                 </span>
// //               </div>
// //             </div>
// //             {/* product details */}
// //             <p className="text-sm md:text-[12px]">
// //               Minimum Order Quantity ({product.minOrder})
// //             </p>
// //             <div className="flex items-center justify-between">
// //               <p className="text-sm md:text-[12px]">Stock: {product.stock}t</p>
// //               {/* Price button */}
// //               <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-lg text-center font-bold bg-[#155528] text-white flex items-center justify-center">
// //                 USD {product.price}
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       {/* pay button */}
// //       <div className="flex justify-end mt-20">
// //         <a href="/cart-page">
// //           <button className="text-[24px] rounded-md font-medium bg-[#155528] text-white w-[440px] h-[50px] py-1">
// //             Go To Pay
// //           </button>
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartPage;

// import React from "react";
// import buyimg from "../Assets/buyimg.png";
// import cart from "../Assets/cart.png";

// const CartPage = () => {
//   // Array of product data
//   const products = [
//     {
//       image: buyimg,
//       title: "Capsicum",
//       rating: 4.1,
//       stock: 5.3,
//       price: 5,
//       minOrder: 10,
//     },
//     {
//       image: buyimg,
//       title: "Capsicum",
//       rating: 4.1,
//       stock: 5.3,
//       price: 5,
//       minOrder: 10,
//     },
//   ];

//   return (
//     <div className="p-4 md:p-6 mt-10 mb-20 overflow-x-hidden font-Inter">
//       {/* Title */}
//       <div className="flex items-center space-x-4 mb-6">
//         <h1 className="text-[#155528] font-bold text-2xl md:text-[40px]">
//           Cart
//         </h1>
//         <img src={cart} alt="cart" />
//       </div>
//       {/* row 1 */}
//       <div className="flex flex-wrap gap-4 mt-10">
//         {products.map((product, index) => (
//           <div key={index} className="w-full md:w-[195px] bg-white">
//             {/* Image */}
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full md:w-[195px] h-40 md:h-[110px] object-cover rounded-sm"
//             />
//             {/* Product Title and ratings*/}
//             <div className="flex items-center justify-between ">
//               <h2 className="text-lg md:text-[12px] font-bold text-gray-800">
//                 {product.title}
//               </h2>
//               <div className="flex items-center space-x-2">
//                 {/* Stars */}
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <span
//                       key={i}
//                       className={`text-sm ${
//                         i < Math.floor(product.rating) // Filled stars
//                           ? "text-[#155528]"
//                           : "text-gray-400" // Unfilled stars
//                       } ${i === 4 ? "text-gray-400" : ""}`} // Ensure the last star is gray for incomplete ratings
//                     >
//                       &#9733;
//                     </span>
//                   ))}
//                 </div>

//                 {/* Rating */}
//                 <span className="text-[10px] text-[#19253C] font-bold">
//                   {product.rating}({product.stock})
//                 </span>
//               </div>
//             </div>
//             {/* product details */}
//             <p className="text-sm md:text-[12px]">
//               Minimum Order Quantity ({product.minOrder})
//             </p>
//             <div className="flex items-center justify-between">
//               <p className="text-sm md:text-[12px]">Stock: {product.stock}t</p>
//               {/* Price button */}
//               <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-lg text-center font-bold bg-[#155528] text-white flex items-center justify-center">
//                 USD {product.price}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* row 2 */}
//       <div className="flex flex-wrap gap-4 mt-10">
//         {products.map((product, index) => (
//           <div key={index} className="w-full md:w-[195px] bg-white">
//             {/* Image */}
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full md:w-[195px] h-40 md:h-[110px] object-cover rounded-sm"
//             />
//             {/* Product Title and ratings*/}
//             <div className="flex items-center justify-between ">
//               <h2 className="text-lg md:text-[12px] font-bold text-gray-800">
//                 {product.title}
//               </h2>
//               <div className="flex items-center space-x-2">
//                 {/* Stars */}
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <span
//                       key={i}
//                       className={`text-sm ${
//                         i < Math.floor(product.rating) // Filled stars
//                           ? "text-[#155528]"
//                           : "text-gray-400" // Unfilled stars
//                       } ${i === 4 ? "text-gray-400" : ""}`} // Ensure the last star is gray for incomplete ratings
//                     >
//                       &#9733;
//                     </span>
//                   ))}
//                 </div>

//                 {/* Rating */}
//                 <span className="text-[10px] text-[#19253C] font-bold">
//                   {product.rating}({product.stock})
//                 </span>
//               </div>
//             </div>
//             {/* product details */}
//             <p className="text-sm md:text-[12px]">
//               Minimum Order Quantity ({product.minOrder})
//             </p>
//             <div className="flex items-center justify-between">
//               <p className="text-sm md:text-[12px]">Stock: {product.stock}t</p>
//               {/* Price button */}
//               <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-lg text-center font-bold bg-[#155528] text-white flex items-center justify-center">
//                 USD {product.price}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* pay button */}
//       <div className="flex justify-center md:justify-end mt-10">
//         <a href="/pay-page">
//           <button className="text-[24px] rounded-md font-medium bg-[#155528] text-white w-[300px] md:w-[440px] h-[50px] py-1">
//             Go To Pay
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

import React from "react";
import buyimg from "../Assets/buyimg.png";
import cart from "../Assets/cart.png";

const CartPage = () => {
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
    <div className="p-4 md:p-6 mt-10 mb-20 overflow-x-hidden font-Inter">
      {/* Title */}
      <div className="flex items-center space-x-4 mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[40px]">
          Cart
        </h1>
        <img src={cart} alt="cart" />
      </div>
      {/* row 1 */}
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
              <p className="text-sm md:text-[12px]">Stock: {product.stock}t</p>
              {/* Price button */}
              <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-lg text-center font-bold bg-[#155528] text-white flex items-center justify-center">
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
              <p className="text-sm md:text-[12px]">Stock: {product.stock}t</p>
              {/* Price button */}
              <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-lg text-center font-bold bg-[#155528] text-white flex items-center justify-center">
                USD {product.price}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* pay button */}
      <div className="flex justify-center md:justify-end mt-10">
        <a href="/pay-page">
          <button className="text-[24px] rounded-md font-medium bg-[#155528] text-white w-[300px] md:w-[440px] h-[50px] py-1">
            Go To Pay
          </button>
        </a>
      </div>
    </div>
  );
};

export default CartPage;
