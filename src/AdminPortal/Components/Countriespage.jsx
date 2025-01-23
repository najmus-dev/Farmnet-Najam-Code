import React from "react";
import angolaFlag from "../Assets/angola.png";
import BotswanaFlag from "../Assets/botswana.png";
import cameroonFlag from "../Assets/cameroon.png";
import drcFlag from "../Assets/DRC.png";
import coteDivorieFlag from "../Assets/cotedivorie.png";
import eswatiniFlag from "../Assets/eswatini.png";
import ethiopiaFlag from "../Assets/ethiopia.png";
import ghanaFlag from "../Assets/ghana.png";
import kenyaFlag from "../Assets/kenya.png";
import lesothoFlag from "../Assets/lesotho.png";
import malawiFlag from "../Assets/malawi.png";
import mozambiqueFlag from "../Assets/mozambique.png";
import namibiaFlag from "../Assets/namibia.png";
import nigeriaFlag from "../Assets/nigeria.png";
import rawandaFlag from "../Assets/rawanda.png";
import senegalFlag from "../Assets/senegal.png";
import somaliaFlag from "../Assets/somalia.png";
import southAfricaFlag from "../Assets/southafrica.png";
import southSudanFlag from "../Assets/southsudan.png";
import tanzaniaFlag from "../Assets/tanzania.png";
import ugandaFlag from "../Assets/uganda.png";
import zambiaFlag from "../Assets/zambia.png";
import zimbabweFlag from "../Assets/zimbabwe.png";
import Header3 from "./Header3";
import addicon from "../Assets/addicon.png";
import downloadicon from "../Assets/downloadicon.png";
import editicon from "../Assets/editicon.png";

const countries = [
  { name: "Angola", flag: angolaFlag },
  { name: "Botswana", flag: BotswanaFlag },
  { name: "Cameroon", flag: cameroonFlag },
  { name: "DRC", flag: drcFlag },
  { name: "Cote dlvorie", flag: coteDivorieFlag },
  { name: "Eswatini", flag: eswatiniFlag },
  { name: "Ethiopia", flag: ethiopiaFlag },
  { name: "Ghana", flag: ghanaFlag },
  { name: "Kenya", flag: kenyaFlag },
  { name: "Lesotho", flag: lesothoFlag },
  { name: "Malawi", flag: malawiFlag },
  { name: "Mozambique", flag: mozambiqueFlag },
  { name: "Namibia", flag: namibiaFlag },
  { name: "Nigeria", flag: nigeriaFlag },
  { name: "Rwanda", flag: rawandaFlag },
  { name: "Senegal", flag: senegalFlag },
  { name: "Somalia", flag: somaliaFlag },
  { name: "South Africa", flag: southAfricaFlag },
  { name: "South Sudan", flag: southSudanFlag },
  { name: "Tanzania", flag: tanzaniaFlag },
  { name: "Uganda", flag: ugandaFlag },
  { name: "Zambia", flag: zambiaFlag },
  { name: "Zimbabwe", flag: zimbabweFlag },
];

const Countriespage = () => {
  return (
    <div className="countries-page font-Inter px-4 md:px-6">
      <Header3 />
      <div className="flex  md:mt-28  items-center justify-between">
        <h1 className="md:pl-4 text-[24px] font-bold mb-4 text-[#155528] font-Inter">
          COUNTRIES
        </h1>
        <img src={addicon} alt="addicon" className="pr-8 md:pr-4" />
      </div>

      <div className="flex flex-wrap gap-4 md:gap-2">
        {countries.map((country, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={country.flag}
              alt={`Flag of ${country.name}`}
              className="w-[100px] sm:w-[120px]   md:w-[95px]  h-[94px]    rounded"
            />

            <span className="text-[12px] font-bold -mt-3">{country.name}</span>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="flex justify-end space-x-8 mt-2 mr-6">
        <div className="flex items-center space-x-1">
          <img src={editicon} alt="editicon" className="w-[15px] h-[13px]" />
          <button className="text-[12px] font-bold  hover:underline">
            Edit
          </button>
        </div>
        <div className="flex items-center space-x-1">
          <img
            src={downloadicon}
            alt="downloadicon"
            className="w-[15px] h-[12px]"
          />
          <button className="text-[12px] font-bold  hover:underline">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Countriespage;
