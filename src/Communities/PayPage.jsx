// // import React from "react";

// // const PayPage = () => {
// //   return <div>PayPage</div>;
// // };

// // export default PayPage;

// import React from "react";
// import buyimg from "../Assets/buyimg.png";

// const PayPage = () => {
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
//       <div className="mb-6">
//         <h1 className="text-[#155528] font-bold text-2xl md:text-[40px]">
//           Pay
//         </h1>
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
//       <div className="flex flex-col md:flex-row md:justify-between mt-10">
//         <h1 className="font-medium text-[20px] ">
//           By clicking you confirm that you have read the
//           <span className="text-[#155528] underline">
//             {" "}
//             terms and condition{" "}
//           </span>
//           before paying.
//         </h1>
//         <a href="#">
//           <button className="text-[24px] mt-2 md:mt-0 rounded-md font-medium bg-[#155528] text-white w-full md:w-[440px] h-[50px] py-1">
//             Pay
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default PayPage;

import React from "react";
import buyimg from "../Assets/buyimg.png";

const PayPage = () => {
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
      <div className="mb-6">
        <h1 className="text-[#155528] font-bold text-2xl md:text-[40px]">
          Pay
        </h1>
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
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <h1 className="font-medium text-[20px] ">
          By clicking you confirm that you have read the
          <span className="text-[#155528] underline">
            {" "}
            terms and condition{" "}
          </span>
          before paying.
        </h1>
        <a href="#">
          <button className="text-[24px] mt-2 md:mt-0 rounded-md font-medium bg-[#155528] text-white w-full md:w-[440px] h-[50px] py-1">
            Pay
          </button>
        </a>
      </div>
    </div>
  );
};

export default PayPage;
