import { Link } from "react-router-dom";
import cowimg from "../../Assets/cowimg.png";
import sheepimg from "../../Assets/sheepimg.png";
import chickenimg from "../../Assets/chickenimg.png";
import goatimg from "../../Assets/gaotimg.png";

const CattlesGallery = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl md:text-[32px] mt-6 md:mt-16 mb-8 md:mb-16">
        Gallery
      </h1>
      {/* gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 md:px-0">
        {/* Wrap each image in a Link component */}
        <Link to={`/cattles-shop?image=${encodeURIComponent(cowimg)}`}>
          <img
            src={cowimg}
            alt="cowimg"
            className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
          />
        </Link>
        <Link to={`/cattles-shop?image=${encodeURIComponent(sheepimg)}`}>
          <img
            src={sheepimg}
            alt="sheepimg"
            className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
          />
        </Link>
        <Link to={`/cattles-shop?image=${encodeURIComponent(chickenimg)}`}>
          <img
            src={chickenimg}
            alt="chickenimg"
            className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
          />
        </Link>
        <Link to={`/cattles-shop?image=${encodeURIComponent(goatimg)}`}>
          <img
            src={goatimg}
            alt="goatimg"
            className="w-full h-auto md:h-[397px] object-cover rounded-t-md cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default CattlesGallery;
