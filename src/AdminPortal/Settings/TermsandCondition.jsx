import React from 'react'
import importicon from "../Assets/importicon.png";
import SettingPage from './SettingPage';
import editicon from "../Assets/editicon.png";
const TermsandCondition = () => {
  return (
    <div>
    
     <SettingPage />
   
    <div className="p-2 py-4 font-Inter  text-base md:text-xl">
      {/* <h2 className=" font-bold text-2xl lg:text-xl md:text-3xl">TERMS AND CONDITIONS</h2> */}
      <div className="  flex justify-between items-center">
        <h2 className=" font-bold text-xl lg:text-xl"> TERMS AND CONDITIONS </h2>
        <div className="flex items-center space-x-2">
                <img src={editicon} alt="edit icon" className="w-6 h-6" />
                <h1 className=" text-[20px] font-bold">Edit</h1>
              </div></div>
      <p className="text-[#979797] text-xs italic">
        Last updated on 30th November 2024
      </p>
      <div className="mt-2 text-xs">
        <p className='text-base'>
          Welcome to Farmnet website! By accessing or using this website, you
          agree to be bound by the following terms and conditions.
        </p>

        <p className="font-bold text-[18px]">1. Acceptance of Terms</p>
        <p className='text-base'>
          By using this website, you confirm that you have read, understood, and
          agree to be bound by these terms and conditions.
        </p>

        <p className="font-bold text-[18px]">2. Use of Website</p>
        <p className='text-base'>
          You are granted a non-exclusive, non-transferable, revocable license
          to access and use the website for personal, non-commercial purposes
          only.
        </p>

        <p className="font-bold text-[18px]">3. User Conduct</p>
        <p className='text-base'>You agree not to use the website to:</p>

        <p className='text-base'>
          Engage in any illegal activities. Harass, abuse, or defame any person
          or entity. Disrupt the website or its services. Violate any laws or
          regulations.
        </p>

        <p className="font-bold text-[18px]">4. Intellectual Property</p>
        <p className='text-base'>
          All content on this website, including text, graphics, logos, and
          images, is the property of Farmers Networks App or its licensors and
          is protected by copyright and trademark laws.
        </p>

        <p className="font-bold text-[18px]">5. Privacy Policy</p>
        <p className='text-base'>
          Please review our privacy policy for information on how we collect,
          use, and protect your personal data.
        </p>

        <p className="font-bold text-[18px]">6. Limitation of Liability</p>
        <p className='text-base'>
          We are not responsible for any indirect, incidental, or consequential
          damages arising from the use of this website.
        </p>

        <p className="font-bold text-[18px]">7. Changes to Terms</p>
        <p className='text-base'>
          We reserve the right to modify these terms and conditions at any time.
          Your continued use of the website after such modifications constitutes
          your acceptance of the new terms.
        </p>

        <p className="font-bold text-[18px]">8. Termination</p>
        <p className='text-base'>
          We may terminate your access to the website if you violate these terms
          and conditions.
        </p>

        <p className="font-bold text-[18px]">9. Governing Law</p>
        <p className='text-base'>These terms and conditions are governed by the laws of Namibia.</p>

        <p className="font-bold mt-2 text-[18px]">10. Contact Us</p>
        <p className='text-base'>
          If you have any questions or concerns, please contact us at
          info@farmnet.africa.
        </p>
      </div>
      <div className="  flex justify-end items-center">
        <div className="flex items-center space-x-2">
        <img src={importicon} alt="importicon" className="w-6 h-6" />
        <h1 className=" text-[18px] font-bold  ">Save</h1>
     
              </div>
              </div>  <div className="flex mb-6 justify-end">
              <button className="text-[14px] mt-[33px] font-bold bg-[#114918] text-white rounded-md w-[114px] h-[36px]">
                Publish
              </button>
            </div>
    </div>


   
    </div>
  )
}

export default TermsandCondition
