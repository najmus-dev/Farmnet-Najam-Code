

import user from '../Assets/User.png'
function SignUp1() {

  return (
    <>
      <div className="min-h-screen flex bg-[#155528] flex-col lg:flex-row">
        <form className="w-full lg:w-1/2 px-8 py-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">Create an Account</h2>


          <div className="space-y-3 ">
            <p className="text-white font-bold">Farmer</p>

            <div className=" mb-2 flex flex-col sm:flex-row sm:gap-4">
              <input
               type="text"
                required
                className="w-full sm:w-[28%] h-[51px] placeholder:text-white p-2 bg-[#489B15] rounded mb-2 sm:mb-0"
                placeholder="Name"
              />
              <input
                type="text"
                required
                className="w-full sm:w-[29%] h-[51px] placeholder:text-white p-2 bg-[#489B15] rounded mb-2 sm:mb-0"
                placeholder="Surname"
              />
            </div>

            <input
              type="text"
              required
              className="w-full sm:w-[60%] p-2 bg-[#489B15] h-[51px] text-white rounded placeholder-white mb-2"
              placeholder="Country"
            />

            <input
              type="tel"
              required
              className="w-full sm:w-[60%] h-[51px] p-2 bg-[#489B15] text-white rounded placeholder-white mb-2"
              placeholder="Mobile Number"
            />

            <input
              type="email"
              required
              className="w-full sm:w-[60%] h-[51px] p-2 bg-[#489B15] text-white rounded placeholder-white mb-2"
              placeholder="Email"
            />

            <input
              type="password"
              required
              className="w-full sm:w-[60%] h-[51px] p-2 bg-[#489B15] text-white rounded placeholder-white mb-2"
              placeholder="Password"
            />

            <div className="space-y-2  mt-4 border-t-4 border-white lg:w-[365px] w-auto">
              <label className="block mt-3 text-white font-medium">Select</label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label className="flex items-center text-white">
                  <input type="radio" name="type" className="mr-2 accent-[#489B15]" />
                  Individual Farmer
                </label>
                <label className="flex items-center text-white">
                  <input type="radio" name="type" required className="mr-2 accent-[#489B15]" />
                  Organization
                </label>
              </div>
            </div>

            <div className="mb-2">
              <input
                type="text"
                required
                className="w-full sm:w-[60%] h-[51px] placeholder:text-white p-2 bg-[#489B15] rounded"
                placeholder="Insert Name"
              />
            </div>


            <div className="mb-2">
              <input
                type="text"
                required
                className="w-full sm:w-[60%] h-[51px] p-2 placeholder:text-white bg-[#489B15] rounded"
                placeholder="Country"
              />
            </div>


            <div className="mb-2">
              <input
                type="email"
                required
                className="w-full sm:w-[60%] h-[51px] p-2 placeholder:text-white bg-[#489B15] rounded"
                placeholder="Email"
              />
            </div>


            <div className="mb-2">
              <input
                type="password"
                required
                className="w-full sm:w-[60%] h-[51px] p-2 placeholder:text-white bg-[#489B15] rounded"
                placeholder="Password"
              />
            </div>

            <div className="mb-2 lg:top-[843px]sm:absolute sm:bottom-4 sm:left-4 text-white w-full text-start">
              <p className="text-md sm:text-base lg:text-lg">By</p>
              <p className="text-md font-bold sm:text-xl lg:text-2xl">
                Farmers Networks
              </p>
            </div>
          </div>
        </form>


        <form className="w-full lg:w-1/2 px-8 sm:mb-4 lg:pr-[90px] lg:pl-[50px] lg:py-[118px]  ">
          <div className="space-y-2">
            <div className="relative">
              <select
                className="w-full    pl-4 pr-10 pt-1 pb-6 bg-[#489B15] h-[51px] text-white rounded appearance-none"
              >
                <option value=""
                  className=''>
                  Ordinary User
                </option>
                <option value="1">Ordinary User</option>
                <option value="2">Option 1</option>
              </select>

              <img
                src={user}
                alt="User Icon"
                className="absolute left-3  top-[34px] transform -translate-y-1/2 w-12 h-6 mb-4"
              />

              <svg
                viewBox="0 0 34 33"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[33px] text-white pointer-events-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow_drop_down">
                  <path
                    id="Vector"
                    d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>

            <div className="relative">
              <select className="w-full  pl-4 pr-10 pt-1 pb-6 bg-[#489B15] h-[51px] text-white rounded appearance-none"
              >
                <option value="" disabled selected className="text-gray-300">
                  Service Provider
                </option>
                <option value="1">Service Provider</option>
                <option value="2">Option 1</option>
              </select>
              <img
                src={user}
                alt="User Icon"
                className="absolute left-3  top-[34px] transform -translate-y-1/2 w-12 h-6 mb-4"
              />
              <svg viewBox="0 0 34 33" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[33px] text-white pointer-events-none' fill="none" xmlns="http://www.w3.org/2000/svg">

                <g id="arrow_drop_down">
                  <path id="Vector" d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z" fill="white" />
                </g>
              </svg>

            </div>
            <div className="relative">
              <select className="w-full pl-4 pr-10 pt-1 pb-6 bg-[#489B15] h-[51px] text-white rounded appearance-none"
                placeholder="Ordinary User">
                <option className="w-1/2" value="">Offtake Partner</option>
                <option value="1">Option 1</option>
              </select>
              <img
                src={user}
                alt="User Icon"
                className="absolute left-3  top-[34px] transform -translate-y-1/2 w-12 h-6 mb-4"
              />
              <svg viewBox="0 0 34 33" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[33px] text-white pointer-events-none' fill="none" xmlns="http://www.w3.org/2000/svg">

                <g id="arrow_drop_down">
                  <path id="Vector" d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z" fill="white" />
                </g>
              </svg>
            </div>
            <div className="relative">
              <select className="w-full pl-4 pr-10 pt-1 pb-6 bg-[#489B15] h-[51px] text-white rounded appearance-none"
                placeholder="Ordinary User">
                <option value="">Development Partner</option>
                <option value="1">Option 1</option>
              </select>
              <img
                src={user}
                alt="User Icon"
                className="absolute left-3  top-[34px] transform -translate-y-1/2 w-12 h-6 mb-4"
              />
              <svg viewBox="0 0 34 33" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[33px] text-white pointer-events-none' fill="none" xmlns="http://www.w3.org/2000/svg">

                <g id="arrow_drop_down">
                  <path id="Vector" d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z" fill="white" />
                </g>
              </svg>
            </div>
            <div className="relative">
              <select className="w-full pl-4 pr-10 pt-1 pb-6 white bg-[#489B15] h-[51px] text-white rounded appearance-none"
                placeholder="Ordinary User">
                <option
                  className="bg-[#489B15] text-white focus:bg-[#489B15] focus:text-white" value="">Education</option>
                <option value="1">Option 1</option>
              </select>
              <img
                src={user}
                alt="User Icon"
                className="absolute left-3  top-[34px] transform -translate-y-1/2 w-12 h-6 mb-4"
              />
              <svg viewBox="0 0 34 33" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[33px] text-white pointer-events-none' fill="none" xmlns="http://www.w3.org/2000/svg">

                <g id="arrow_drop_down">
                  <path id="Vector" d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z" fill="white" />
                </g>
              </svg>
            </div>
            <div className="relative ">
              <select className="  w-full pl-4 pr-10 pt-1 pb-6 bg-[#489B15] h-[51px] text-white rounded appearance-none"
                placeholder
              >
                <option value=""
                >Institution</option>
                <option value="1"
                >Option 1</option>
              </select>
              <img
                src={user}
                alt="User Icon"
                className="absolute left-3  top-[34px] transform -translate-y-1/2 w-12 h-6 mb-4"
              />
              <svg viewBox="0 0 34 33" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[33px] text-white pointer-events-none' fill="none" xmlns="http://www.w3.org/2000/svg">

                <g id="arrow_drop_down">
                  <path id="Vector" d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z" fill="white" />
                </g>
              </svg>
            </div>
            <div className="relative">
              <select className="w-full pl-4 pr-10 pt-1 pb-6  bg-[#489B15] h-[51px] text-white rounded appearance-none"
                placeholder>
                <option value="">Community</option>
                <option value="1">Option 1</option>
              </select>
              <img
                src={user}
                alt="User Icon"
                className="absolute left-3  top-[34px] transform -translate-y-1/2 w-12 h-6 mb-4"
              />
              <svg viewBox="0 0 34 33" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[33px] text-white pointer-events-none' fill="none" xmlns="http://www.w3.org/2000/svg">

                <g id="arrow_drop_down">
                  <path id="Vector" d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z" fill="white" />
                </g>
              </svg>
            </div>
            <div className="relative">
              <select className="w-full pl-4 pr-10 pt-1 pb-6 bg-[#489B15] h-[51px] text-white rounded appearance-none"
                placeholder>
                <option value="">Investor</option>
                <option value="1">Option 1</option>
              </select>
              <img
                src={user}
                alt="User Icon"
                className="absolute left-3  top-[34px] transform -translate-y-1/2 w-12 h-6 mb-4"
              />
              <svg viewBox="0 0 34 33" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[33px] text-white pointer-events-none' fill="none" xmlns="http://www.w3.org/2000/svg">

                <g id="arrow_drop_down">
                  <path id="Vector" d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z" fill="white" />
                </g>
              </svg>
            </div>
            <div className="relative">
              <select className="w-full pl-4 pr-10 pt-1 pb-6 bg-[#489B15] h-[51px] text-white rounded appearance-none"
                placeholder>
                <option value="">Research</option>
                <option value="1">Option 1</option>
              </select>
              <img
                src={user}
                alt="User Icon"
                className="absolute left-3  top-[34px] transform -translate-y-1/2 w-12 h-6 mb-4"
              />
              <svg viewBox="0 0 34 33" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-[34px] h-[33px] text-white pointer-events-none' fill="none" xmlns="http://www.w3.org/2000/svg">

                <g id="arrow_drop_down">
                  <path id="Vector" d="M9.91699 13.0625L17.0003 19.9375L24.0837 13.0625H9.91699Z" fill="white" />
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-center text-white text-md font-sans">
              <svg width="24" height="24" className="mr-2 w-4 h-4 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Check_ring_duotone_line">
                  <circle id="Ellipse 47" cx="12" cy="12" r="9" fill="#7E869E" fill-opacity="0.25" stroke="white" stroke-width="1.2" />
                  <path id="Line 1" d="M8 12L11 15L16 9" stroke="white" stroke-width="1.2" />
                </g>
              </svg>
              <span>
                I accept&nbsp;
                <a href="/terms-and-conditions" className="text-white underline">
                  Terms of Use
                </a>
                &nbsp;and&nbsp;
                <a href="/privacy-policy" className="text-white underline">
                  Privacy Policy
                </a>
                &nbsp;for Farmers Networks<br /> App
              </span>
            </label>
          </div>
          <div className='mb-6'>
            <button className="mt-4  bg-[#fdbb26] h-[51px] text-white w-full py-2 p-2 rounded">

              <a href="/signup2">




                Continue

              </a>   </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp1;
