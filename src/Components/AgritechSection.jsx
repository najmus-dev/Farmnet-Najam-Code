import React from "react";
import { ChevronRight } from "lucide-react";
const AgritechSection = () => {
  return (
    <div className="w-[80%] mx-auto flex items-center justify-between bg-white p-6">
      <div className="md:w-1/2 p-4">
        <h3
          className="text-lg font-bold text-yellow-500"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "1.857rem",lineHeight: "120%",
            letterSpacing: "0%",
            verticalAlign: "middle" }}
        >
          Agritech
        </h3>

        <h2
          className="text-2xl md:text-3xl font-extrabold text-black mt-2"
          style={{
            fontFamily: "Inter",
            fontSize: "1.875rem",
            lineHeight: "120%",
            letterSpacing: "0%",
            verticalAlign: "middle",
          }}
        >
          The future of Agriculture.
        </h2>

        <img
          src="https://s3-alpha-sig.figma.com/img/1e29/4ceb/009eba99235b4d540ecab016fc6ee3db?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IwNt1vtr24gyIMdrLgjix6KHfixp1wf6SpW8usGmiGfTBP9fGwGRNKJvElG7NuN-CkoNDa8gKfD0lqaXgYuaQlg2xy3qw6vLlhftN56raHHTtTGlfZR00~qEc9NRH5wZzfVocChVN1qrAL529quN4zFO0l3Z4mHxj8tg-yFx~ucgxiS1KBVLTYVtD5HNm7ClXk0YVQa~c0gVQayv5baE033yqOAqyTtJuOII~ldJ-LF-8Fx0cMUoTKwzCR6hkQ~~~e6xcdfI3WQfTpVr1N-lKGoi~UuVXBKhSqEJxzliJJiHwlDm75l5zP~qLt462jT3IvTFBWuPfcfz8RKl5JGmnQ__"
          alt="Farmer using mobile"
          className="rounded-lg mt-4 shadow-lg w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 p-6 relative">
        <h2
          className="text-2xl md:text-3xl font-extrabold text-black mt-2 pt-8"
          style={{
            fontFamily: "Inter",
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "120%",
            letterSpacing: "0%",
            verticalAlign: "middle",
          }}
        >
          Have you registered as a Farmer?
        </h2>

        <p className="text-gray-600" style={{ fontSize: "24px" }}>
          Registering as a Farmer offers several benefits for farmers:
        </p>
        <p
          className="list-disc list-inside text-gray-600"
          style={{ fontSize: "24px" }}
        >
        
            <strong>Efficient Farm Management:</strong> The app helps farmers
            track crops & livestock, manage inventory, planning, and schedule
            daily operations.
          
        </p>
        <p
          className="list-disc list-inside text-gray-600"
          style={{ fontSize: "24px" }}
        >
          
            <strong>Expert Advice:</strong>Farmers can access timely and
            accurate agricultural advice,....
          
        </p>

        <button className="flex absolute right-0 bottom-2 bg-[#152C24] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#2E453D]">
    See More   <ChevronRight className="text-white" />
  </button>
      </div>
    </div>
  );
};

export default AgritechSection;
