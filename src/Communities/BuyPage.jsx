// // // import React from "react";
// // // import buyimg from "../Assets/buyimg.png";

// // // const BuyPage = () => {
// // //   return (
// // // <div className="p-4 md:p-8 mt-10 overflow-x-hidden">
// // //   {/* Title */}
// // //   <div className="mb-6">
// // //     <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
// // //       Buy
// // //     </h1>
// // //   </div>
// // // </div>
// // //   );
// // // };

// // // export default BuyPage;

// // import React from "react";
// // import buyimg from "../Assets/buyimg.png";

// // const ProductCard = () => {
// //   return (
// // <div className="p-4 md:p-8 mt-10 overflow-x-hidden">
// //   {/* Title */}
// //   <div className="mb-6">
// //     <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
// //       Buy
// //     </h1>
// //       </div>
// //       {/* card */}
// //       <div className="w-[221px] bg-white">
// //         {/* Image */}
// //         <img
// //           src={buyimg}
// //           alt="Product"
// //           className="w-full md:w-[221px] h-40 md:h-[110px] object-cover  mb-2"
// //         />
// //         {/* Product Title and ratings*/}
// //         <div className="flex items-center justify-between">
// //           <h2 className="text-lg md:text-[14px] font-bold text-gray-800 ">
// //             Capsicum
// //           </h2>
// //           <div className="flex items-center space-x-2">
// //             {/* Stars */}
// //             <div className="flex">
// //               <span className="text-[#155528] text-base">&#9733;</span>
// //               <span className="text-[#155528] text-base">&#9733;</span>
// //               <span className="text-[#155528] text-base">&#9733;</span>
// //               <span className="text-[#155528] text-base">&#9733;</span>
// //               <span className="text-gray-400 text-base">&#9734;</span>
// //             </div>
// //             {/* Rating */}
// //             <span className=" text-[10px] text-[#19253C] font-bold">
// //               4.5(278)
// //             </span>
// //           </div>
// //         </div>
// //         {/* product deatails */}
// //         <p className="text-sm md:text-[14px]  ">Minimum Order Quantity (10)</p>
// //         <div className="flex items-center justify-between">
// //           <p className="text-sm md:text-[14px]  ">Stock: 180,000t</p>
// //           {/* Price button */}
// //           <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-lg text-center font-bold bg-[#155528] text-white flex items-center justify-center">
// //             USD 5
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;

// // import React from "react";
// // import buyimg from "../Assets/buyimg.png";

// // const ProductGrid = () => {
// //   // Array of product data
// //   const products = [
// //     {
// //       image: buyimg,
// //       title: "Capsicum",
// //       rating: 4.5,
// //       stock: 180000,
// //       price: 5,
// //       minOrder: 10,
// //     },
// //     {
// //       image: buyimg,
// //       title: "Capsicum",
// //       rating: 4.5,
// //       stock: 180000,
// //       price: 5,
// //       minOrder: 10,
// //     },
// //     {
// //       image: buyimg,
// //       title: "Capsicum",
// //       rating: 4.5,
// //       stock: 180000,
// //       price: 5,
// //       minOrder: 10,
// //     },
// //     {
// //       image: buyimg,
// //       title: "Capsicum",
// //       rating: 4.5,
// //       stock: 180000,
// //       price: 5,
// //       minOrder: 10,
// //     },
// //     {
// //       image: buyimg,
// //       title: "Capsicum",
// //       rating: 4.5,
// //       stock: 180000,
// //       price: 5,
// //       minOrder: 10,
// //     },
// //     {
// //       image: buyimg,
// //       title: "Capsicum",
// //       rating: 4.5,
// //       stock: 180000,
// //       price: 5,
// //       minOrder: 10,
// //     },
// //     {
// //       image: buyimg,
// //       title: "Capsicum",
// //       rating: 4.5,
// //       stock: 180000,
// //       price: 5,
// //       minOrder: 10,
// //     },
// //   ];

// //   return (
// //     <div className="p-4 md:p-6 mt-10 overflow-x-hidden">
// //       {/* Title */}
// //       <div className="mb-6">
// //         <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
// //           Buy
// //         </h1>
// //       </div>
// //       <div className="grid grid-cols-2 md:grid-cols-7 gap-2  mt-10">
// //         {products.map((product, index) => (
// //           <div key={index} className="w-[2011px] bg-white">
// //             {/* Image */}
// //             <img
// //               src={product.image}
// //               alt={product.title}
// //               className="w-full md:w-[201px] h-40 md:h-[110px] object-cover mb-2"
// //             />
// //             {/* Product Title and ratings*/}
// //             <div className="flex items-center justify-between">
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
// //                         i < product.rating ? "text-[#155528]" : "text-gray-400"
// //                       }`}
// //                     >
// //                       &#9733;
// //                     </span>
// //                   ))}
// //                 </div>
// //                 {/* Rating */}
// //                 <span className="text-[8px] text-[#19253C] font-bold">
// //                   {product.rating}({product.stock})
// //                 </span>
// //               </div>
// //             </div>
// //             {/* product details */}
// //             <p className="text-sm md:text-[14px]">
// //               Minimum Order Quantity ({product.minOrder})
// //             </p>
// //             <div className="flex items-center justify-between">
// //               <p className="text-sm md:text-[14px]">Stock: {product.stock}t</p>
// //               {/* Price button */}
// //               <button className="text-sm md:text-[10px] w-[83px] h-[14px] py-1 rounded-lg text-center font-bold bg-[#155528] text-white flex items-center justify-center">
// //                 USD {product.price}
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductGrid;

// import React from "react";
// import buyimg from "../Assets/buyimg.png";

// const ProductGrid = () => {
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
//     <div className="p-4 md:p-6 mt-10  overflow-x-hidden font-Inter">
//       {/* Title */}
//       <div className="mb-6">
//         <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
//           Buy
//         </h1>
//       </div>
//       {/* grid */}
//       <div className="grid grid-cols-1 md:grid-cols-7 gap-x-1 gap-y-8 mt-10">
//         {products.map((product, index) => (
//           <div key={index} className="w-full md:w-[195px] bg-white">
//             {/* Image */}
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full md:w-[195px] h-40 md:h-[110px] object-cover rounded"
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

//       {/* cart button */}
//       <div className="flex justify-center md:justify-end mt-20">
//         <a href="/cart-page">
//           <button className="text-[24px] rounded-md font-medium bg-[#155528] text-white w-[300px] md:w-[440px] h-[50px] py-1">
//             Go To Cart
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;

import React from "react";
import buyimg from "../Assets/buyimg.png";

const ProductGrid = () => {
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
    <div className="p-4 md:p-6 mt-10  overflow-x-hidden font-Inter">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[36px]">
          Buy
        </h1>
      </div>
      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-x-1 gap-y-8 mt-10">
        {products.map((product, index) => (
          <div key={index} className="w-full md:w-[195px] bg-white">
            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-[195px] h-40 md:h-[110px] object-cover rounded"
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
                        i < Math.floor(product.rating)
                          ? "text-[#155528]"
                          : "text-gray-400"
                      } ${i === 4 ? "text-gray-400" : ""}`}
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

      {/* cart button */}
      <div className="flex justify-center md:justify-end mt-20">
        <a href="/cart-page">
          <button className="text-[24px] rounded-md font-medium bg-[#155528] text-white w-[300px] md:w-[440px] h-[50px] py-1">
            Go To Cart
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProductGrid;
