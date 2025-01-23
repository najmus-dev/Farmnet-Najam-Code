// import React from "react";
// import production1 from "../../Assets/production1.png";
// import production2 from "../../Assets/production2.png";
// import production3 from "../../Assets/production3.png";
// import production4 from "../../Assets/production4.png";

// const ProductGallery = () => {
//   return (
//     <div>
//       <h1 className="font-bold text-2xl md:text-[32px] mt-6 mb-8">Gallery</h1>
//       {/* gallery Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 md:px-0">
//         <img
//           src={production1}
//           alt="production1"
//           className="w-full h-auto md:h-[397px] object-cover rounded-t-md "
//         />
//         <img
//           src={production2}
//           alt="production2"
//           className="w-full h-auto md:h-[397px] object-cover rounded-t-md"
//         />
//         <img
//           src={production3}
//           alt="production3"
//           className="w-full h-auto md:h-[397px] object-cover rounded-t-md"
//         />
//         <img
//           src={production4}
//           alt="production4"
//           className="w-full h-auto md:h-[397px] object-cover rounded-t-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductGallery;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import production1 from "../../Assets/production1.png";
import production2 from "../../Assets/production2.png";
import production3 from "../../Assets/production3.png";
import production4 from "../../Assets/production4.png";

const ProductGallery = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl md:text-[32px] mt-6 md:mt-16 md:mb-16 mb-8">
        Gallery
      </h1>
      {/* gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 md:px-0">
        {/* Wrap each image in a Link component */}
        <Link to={`/shop?image=${encodeURIComponent(production1)}`}>
          <img
            src={production1}
            alt="production1"
            className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
          />
        </Link>
        <Link to={`/shop?image=${encodeURIComponent(production2)}`}>
          <img
            src={production2}
            alt="production2"
            className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
          />
        </Link>
        <Link to={`/shop?image=${encodeURIComponent(production3)}`}>
          <img
            src={production3}
            alt="production3"
            className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
          />
        </Link>
        <Link to={`/shop?image=${encodeURIComponent(production4)}`}>
          <img
            src={production4}
            alt="production4"
            className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductGallery;
