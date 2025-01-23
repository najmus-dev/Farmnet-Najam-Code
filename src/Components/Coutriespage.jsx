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

const CountriesPage = () => {
  return (
    <div className="countries-page font-Inter p-6">
      <h1 className="pl-4 mt-4 text-4xl font-bold mb-4 text-[#155528] font-Inter">
        COUNTRIES
      </h1>
      <div className="flex flex-wrap gap-3 p-4">
        {countries.map((country, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={country.flag}
              //   alt={Flag of ${country.name}}
              alt={`Flag of ${country.name}`}
              // className="w-24 h-24 rounded"
              className="w-[128px] h-[128px] rounded"
            />
            <span className="text-[20px] font-bold -mt-4">{country.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
