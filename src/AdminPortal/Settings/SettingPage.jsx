import UserAccountHeader from "../UserAccounts/UserAccountHeader";

const SettingPage = () => {
  return (
    <>
      <UserAccountHeader />
      <div className="font-Inter bg-[#FAFBFB] mt-6 md:mt-0 w-full border-b-[4px] border-[#EDF0EF]">
        <div className="flex flex-wrap md:flex-row space-x-2 px-4 md:px-6 py-4 w-full">
          <h1 className="text-[18px] font-medium  rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
            Settings
          </h1>
          <h1 className="text-[15px] font-medium bg-[#F3F5F5] hover:text-white hover:bg-[#155528] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
            <a
              href="/admin/termsandcondition"
              className="hover:bg-[#155528] hover:text-white"
            >
              Ts & Cs
            </a>
          </h1>
          <h1 className="text-[15px] font-medium bg-[#F3F5F5]  hover:text-white hover:bg-[#155528] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
            <a
              href="/admin/privacypolicy"
              className="hover:bg-[#155528] hover:text-white"
            >
              Privacy Policy
            </a>
          </h1>
          <h1 className="text-[15px] font-medium bg-[#F3F5F5]  hover:text-white hover:bg-[#155528] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
            <a
              href="/admin/datausage"
              className="hover:bg-[#155528] hover:text-white"
            >
              Data Usage
            </a>
          </h1>
          <h1 className="text-[15px] font-medium bg-[#F3F5F5]  hover:text-white hover:bg-[#155528] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
            <a
              href="/admin/license"
              className="hover:bg-[#155528] hover:text-white"
            >
              License
            </a>
          </h1>
          <h1 className="text-[15px] font-medium bg-[#F3F5F5]  hover:text-white hover:bg-[#155528] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
            Demonstrations
          </h1>
          <h1 className="text-[15px] font-medium bg-[#F3F5F5]  hover:text-white hover:bg-[#155528] rounded-md p-4 mb-2 md:mb-0 flex-grow md:w-auto">
            <a
              href="/admin/faqs"
              className="hover:bg-[#155528] hover:text-white"
            >
              {" "}
              FAQS
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default SettingPage;
