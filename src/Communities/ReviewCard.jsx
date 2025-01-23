// // import React from "react";
// // import rating1 from "../Assets/rating1.png";
// // import rating2 from "../Assets/rating2.png";
// // import rating3 from "../Assets/rating3.png";
// // import rating4 from "../Assets/rating4.png";

// // const ReviewCard = () => {
// //   return (
// //     <div className="w-[670px] h-[302px] bg-gray-100 rounded-lg shadow-md p-8">
// //       {/* User Info */}
// //       <div className="flex items-center mb-4">
// //         {/* Profile Image */}
// //         <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
// //           <img
// //             src={rating1} // Replace with actual image URL
// //             alt="rating1"
// //             className="w-full h-full object-cover"
// //           />
// //         </div>
// //         {/* Name */}
// //         <h2 className="ml-4 text-[34px] font-bold">Juma Jembe</h2>
// //       </div>
// //       {/* Review Content */}
// //       <p className="text-[36px] leading-10 mt-4">
// //         I have been getting good returns from the seed propagation investment
// //       </p>
// //       {/* Rating and Stars */}
// //       <div className="flex items-center justify-between mt-12">
// //         {/* Stars */}
// //         <div className="flex">
// //           <span className="text-[#155528] text-6xl">&#9733;</span>
// //           <span className="text-[#155528] text-6xl">&#9733;</span>
// //           <span className="text-[#155528] text-6xl">&#9733;</span>
// //           <span className="text-[#155528] text-6xl">&#9733;</span>
// //           <span className="text-gray-400 text-6xl">&#9734;</span>
// //         </div>
// //         {/* Rating */}
// //         <span className="ml-4 text-[34px] text-[#19253C] font-bold">
// //           4.5(278)
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ReviewCard;

// // import React from "react";
// // import rating1 from "../Assets/rating1.png";
// // import rating2 from "../Assets/rating2.png";
// // import rating3 from "../Assets/rating3.png";
// // import rating4 from "../Assets/rating4.png";

// // const reviewData = [
// //   {
// //     name: "Juma Jembe",
// //     image: rating1,
// //     reviewText:
// //       "I have been getting good returns from the seed propagation investment",
// //     rating: 4.5,
// //     totalReviews: 278,
// //   },
// //   {
// //     name: "Mary Naigaga",
// //     image: rating2,
// //     reviewText: "The investment has exceeded my expectations, very satisfied.",
// //     rating: 5,
// //     totalReviews: 150,
// //   },
// //   {
// //     name: "Abdul Kadir",
// //     image: rating3,
// //     reviewText: "A solid investment, I've seen consistent returns.",
// //     rating: 4,
// //     totalReviews: 120,
// //   },
// //   {
// //     name: "Sarah Ali",
// //     image: rating4,
// //     reviewText: "Great experience, the service is top-notch!",
// //     rating: 5,
// //     totalReviews: 200,
// //   },
// // ];

// // const ReviewCard = ({ name, image, reviewText, rating, totalReviews }) => {
// //   // Calculate the number of full and empty stars
// //   const fullStars = Math.floor(rating);
// //   const emptyStars = 5 - fullStars;

// //   return (
// //     <div>
// //       <div className="w-[690px] h-[312px] bg-gray-100 rounded-md p-10">
// //         {/* User Info */}
// //         <div className="flex items-center mb-4">
// //           {/* Profile Image */}
// //           <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
// //             <img
// //               src={image} // Dynamic image
// //               alt={name}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           {/* Name */}
// //           <h2 className="ml-8 text-[34px] font-bold">{name}</h2>
// //         </div>
// //         {/* Review Content */}
// //         <p className="text-[36px] leading-10 mt-4">{reviewText}</p>
// //         {/* Rating and Stars */}
// //         <div className="flex items-center justify-between mt-12">
// //           {/* Stars */}
// //           <div className="flex">
// //             {Array.from({ length: fullStars }).map((_, index) => (
// //               <span
// //                 key={`full-star-${index}`}
// //                 className="text-[#155528] text-6xl"
// //               >
// //                 &#9733;
// //               </span>
// //             ))}
// //             {Array.from({ length: emptyStars }).map((_, index) => (
// //               <span
// //                 key={`empty-star-${index}`}
// //                 className="text-gray-400 text-6xl"
// //               >
// //                 &#9734;
// //               </span>
// //             ))}
// //           </div>
// //           {/* Rating */}
// //           <span className="ml-4 text-[34px] text-[#19253C] font-bold">
// //             {rating} ({totalReviews})
// //           </span>
// //         </div>
// //       </div>
// //       {/* Date */}
// //       <div className="mt-4 ml-4 text-[24px] md:text-[36px] text-[#979797] font-medium">
// //         15/07/2024
// //       </div>
// //     </div>
// //   );
// // };

// // const Reviews = () => {
// //   return (
// //     // <div className="flex flex-wrap justify-center gap-8">
// //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4">
// //       {/* Loop through reviewData and render ReviewCard for each */}
// //       {reviewData.map((review, index) => (
// //         <ReviewCard key={index} {...review} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default Reviews;

// // import React from "react";
// // import rating1 from "../Assets/rating1.png";
// // import rating2 from "../Assets/rating2.png";
// // import rating3 from "../Assets/rating3.png";
// // import rating4 from "../Assets/rating4.png";

// // const reviewData = [
// //   {
// //     name: "Juma Jembe",
// //     image: rating1,
// //     reviewText:
// //       "I have been getting good returns from the seed propagation investment",
// //     rating: 4.5,
// //     totalReviews: 278,
// //   },
// //   {
// //     name: "Mkulima Poa",
// //     image: rating2,
// //     reviewText:
// //       "I have been getting good returns from the seed propagation investment",
// //     rating: 4.5,
// //     totalReviews: 278,
// //   },
// //   {
// //     name: "Amina Ali",
// //     image: rating3,
// //     reviewText:
// //       "I have been getting good returns from the seed propagation investment",
// //     rating: 4.5,
// //     totalReviews: 278,
// //   },
// //   {
// //     name: "George Bul",
// //     image: rating4,
// //     reviewText:
// //       "I have been getting good returns from the seed propagation investment",
// //     rating: 4.5,
// //     totalReviews: 278,
// //   },
// // ];

// // const ReviewCard = ({ name, image, reviewText, rating, totalReviews }) => {
// //   // Calculate the number of full and empty stars
// //   const fullStars = Math.floor(rating);
// //   const emptyStars = 5 - fullStars;

// //   return (
// //     <div>
// //       <div className="w-[690px] h-[312px] bg-gray-100 rounded-md p-10">
// //         {/* User Info */}
// //         <div className="flex items-center mb-4">
// //           {/* Profile Image */}
// //           <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
// //             <img
// //               src={image} // Dynamic image
// //               alt={name}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //           {/* Name */}
// //           <h2 className="ml-8 text-[34px] font-bold">{name}</h2>
// //         </div>
// //         {/* Review Content */}
// //         <p className="text-[36px] leading-10 mt-4">{reviewText}</p>
// //         {/* Rating and Stars */}
// //         <div className="flex items-center justify-between mt-12">
// //           {/* Stars */}
// //           <div className="flex">
// //             {Array.from({ length: fullStars }).map((_, index) => (
// //               <span
// //                 key={`full-star-${index}`}
// //                 className="text-[#155528] text-6xl"
// //               >
// //                 &#9733;
// //               </span>
// //             ))}
// //             {Array.from({ length: emptyStars }).map((_, index) => (
// //               <span
// //                 key={`empty-star-${index}`}
// //                 className="text-[#C4C4C4] text-6xl" // Changed to filled gray color
// //               >
// //                 &#9733;
// //               </span>
// //             ))}
// //           </div>
// //           {/* Rating */}
// //           <span className="ml-4 text-[34px] text-[#19253C] font-bold">
// //             {rating} ({totalReviews})
// //           </span>
// //         </div>
// //       </div>
// //       {/* Date */}
// //       <div className="mt-4 ml-4 text-[24px] md:text-[36px] text-[#979797] font-medium">
// //         15/07/2024
// //       </div>
// //     </div>
// //   );
// // };

// // const Reviews = () => {
// //   return (
// //     // <div className="flex flex-wrap justify-center gap-8">
// //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4">
// //       {/* Loop through reviewData and render ReviewCard for each */}
// //       {reviewData.map((review, index) => (
// //         <ReviewCard key={index} {...review} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default Reviews;

// import React from "react";
// import rating1 from "../Assets/rating1.png";
// import rating2 from "../Assets/rating2.png";
// import rating3 from "../Assets/rating3.png";
// import rating4 from "../Assets/rating4.png";

// const reviewData = [
//   {
//     name: "Juma Jembe",
//     image: rating1,
//     reviewText:
//       "I have been getting good returns from the seed propagation investment",
//     rating: 4.5,
//     totalReviews: 278,
//   },
//   {
//     name: "Mkulima Poa",
//     image: rating2,
//     reviewText:
//       "I have been getting good returns from the seed propagation investment",
//     rating: 4.5,
//     totalReviews: 278,
//   },
//   {
//     name: "Amina Ali",
//     image: rating3,
//     reviewText:
//       "I have been getting good returns from the seed propagation investment",
//     rating: 4.5,
//     totalReviews: 278,
//   },
//   {
//     name: "George Bul",
//     image: rating4,
//     reviewText:
//       "I have been getting good returns from the seed propagation investment",
//     rating: 4.5,
//     totalReviews: 278,
//   },
// ];

// const ReviewCard = ({ name, image, reviewText, rating, totalReviews }) => {
//   // Calculate the number of full and empty stars
//   const fullStars = Math.floor(rating);
//   const emptyStars = 5 - fullStars;

//   return (
//     <div>
//       <div className="w-full h-[250px] md:w-[690px] md:h-[312px] bg-gray-100 rounded-md p-4 md:p-10">
//         {/* User Info */}
//         <div className="flex items-center mb-4">
//           {/* Profile Image */}
//           <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
//             <img
//               src={image} // Dynamic image
//               alt={name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           {/* Name */}
//           <h2 className="md:ml-8 ml-4 text-2xl md:text-[34px] font-bold">
//             {name}
//           </h2>
//         </div>
//         {/* Review Content */}
//         <p className="text-2xl md:text-[36px] md:leading-10 mt-4">
//           {reviewText}
//         </p>
//         {/* Rating and Stars */}
//         <div className="flex items-center justify-between mt-6 md:mt-12">
//           {/* Stars */}
//           <div className="flex">
//             {Array.from({ length: fullStars }).map((_, index) => (
//               <span
//                 key={`full-star-${index}`}
//                 className="text-[#155528] text-2xl md:text-6xl"
//               >
//                 &#9733;
//               </span>
//             ))}
//             {Array.from({ length: emptyStars }).map((_, index) => (
//               <span
//                 key={`empty-star-${index}`}
//                 className="text-[#C4C4C4] text-2xl md:text-6xl" // Changed to filled gray color
//               >
//                 &#9733;
//               </span>
//             ))}
//           </div>
//           {/* Rating */}
//           <span className="ml-4 text-2xl md:text-[34px] text-[#19253C] font-bold">
//             {rating} ({totalReviews})
//           </span>
//         </div>
//       </div>
//       {/* Date */}
//       <div className="mt-4 md:ml-4 text-[20px] md:text-[36px] text-[#979797] font-medium">
//         15/07/2024
//       </div>
//     </div>
//   );
// };

// const Reviews = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4">
//       {/* Loop through reviewData and render ReviewCard for each */}
//       {reviewData.map((review, index) => (
//         <ReviewCard key={index} {...review} />
//       ))}
//     </div>
//   );
// };

// export default Reviews;

import React from "react";
import rating1 from "../Assets/rating1.png";
import rating2 from "../Assets/rating2.png";
import rating3 from "../Assets/rating3.png";
import rating4 from "../Assets/rating4.png";

const reviewData = [
  {
    name: "Juma Jembe",
    image: rating1,
    reviewText:
      "I have been getting good returns from the seed propagation investment",
    rating: 4.5,
    totalReviews: 278,
  },
  {
    name: "Mkulima Poa",
    image: rating2,
    reviewText:
      "I have been getting good returns from the seed propagation investment",
    rating: 4.5,
    totalReviews: 278,
  },
  {
    name: "Amina Ali",
    image: rating3,
    reviewText:
      "I have been getting good returns from the seed propagation investment",
    rating: 4.5,
    totalReviews: 278,
  },
  {
    name: "George Bul",
    image: rating4,
    reviewText:
      "I have been getting good returns from the seed propagation investment",
    rating: 4.5,
    totalReviews: 278,
  },
];

const ReviewCard = ({ name, image, reviewText, rating, totalReviews }) => {
  // Calculate the number of full and empty stars
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div>
      <div className="w-full h-[250px] md:w-[690px] md:h-[312px] bg-gray-100 rounded-md p-4 md:p-10">
        {/* User Info */}
        <div className="flex items-center mb-4">
          {/* Profile Image */}
          <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
            <img
              src={image} // Dynamic image
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name */}
          <h2 className="md:ml-8 ml-4 text-2xl md:text-[34px] font-bold">
            {name}
          </h2>
        </div>
        {/* Review Content */}
        <p className="text-2xl md:text-[36px] md:leading-10 mt-4">
          {reviewText}
        </p>
        {/* Rating and Stars */}
        <div className="flex items-center justify-between mt-6 md:mt-12">
          {/* Stars */}
          <div className="flex">
            {Array.from({ length: fullStars }).map((_, index) => (
              <span
                key={`full-star-${index}`}
                className="text-[#155528] text-2xl md:text-6xl"
              >
                &#9733;
              </span>
            ))}
            {Array.from({ length: emptyStars }).map((_, index) => (
              <span
                key={`empty-star-${index}`}
                className="text-[#C4C4C4] text-2xl md:text-6xl" // Changed to filled gray color
              >
                &#9733;
              </span>
            ))}
          </div>
          {/* Rating */}
          <span className="ml-4 text-2xl md:text-[34px] text-[#19253C] font-bold">
            {rating} ({totalReviews})
          </span>
        </div>
      </div>
      {/* Date */}
      <div className="mt-4 md:ml-4 text-[20px] md:text-[36px] text-[#979797] font-medium">
        15/07/2024
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4">
      {/* Loop through reviewData and render ReviewCard for each */}
      {reviewData.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default Reviews;
