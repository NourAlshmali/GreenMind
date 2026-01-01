import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import plant from "/public/assets/img/planet.png";

const Hero = () => {
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center">
      <div className="relative w-[88%] h-[78%] flex bg-[#C1DCDC] mt-10 rounded-2xl justify-center items-center">
        <p
          className="absolute  left-[5%] top-[10%]
         lg:text-7xl md:text-6xl text-4xl
          max-w-[40%] font-extrabold tracking-wider
          lg:leading-25 md:leading-20 sm:leading-15"
        >
          BUY YOUR DREAM PLANTS
        </p>
        <div className="absolute left-[8%] top-[40%] md:top-[50%] lg:top-[55%] flex gap-10 ">
          <div className="flex flex-col leading-3 ">
            <h2 className="text-4xl font-bold">+50 </h2>
            <h3 className="text-2xl">plant space </h3>
          </div>
          <div className="w-[1px] h-17 bg-black"></div>
          <div>
            <h2 className="text-4xl font-bold">+100 </h2>
            <h3 className="text-2xl">customers </h3>
          </div>
        </div>
        <div className="absolute w-[30%] left-[5%] md:bottom-[25%] lg:bottom-[20%] ">
          <div className="relative">
            <input
              type="text"
              placeholder="what are you looking for?"
              className="h-15 lg:w-full md:w-[300px] sm:w-[150px] md:placeholder:text-[16px] sm:placeholder:text-[10px]
               bg-white rounded-2xl focus:border-2 border-white placeholder:pl-6 text-[20px]"
            />
            <div className="absolute top-3 lg:left-110 md:left-60 bg-[#C1DCDC] w-10 h-10 flex items-center justify-center rounded-full">
              <FaMagnifyingGlass size={18} className="text-white" />
            </div>
          </div>
        </div>
        <div>
          <div className="absolute right-[5%] top-[13%] hidden lg:block">
            <svg
              width="110"
              height="195"
              viewBox="0 0 110 195"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.52257 2.47842C33.6915 9.78138 27.9891 7.84413 52.2598 27.4033C57.803 31.8704 66.2503 37.675 67.8304 43.8105C70.1621 52.8646 50.5484 74.4481 39.514 62.5287C32.3828 54.8256 34.559 44.7366 46.2372 44.4866C65.3886 44.0766 79.6093 60.7197 84.666 73.5258C90.2332 87.6247 83.8553 100.333 68.0718 105.499C60.8614 107.859 49.7854 103.667 56.4978 96.7813C70.3042 82.619 83.4925 106.32 80.735 117.126C75.7681 136.59 43.8704 156.633 16.0447 146.292C7.34473 143.058 10.4222 140.744 14.2625 139.371C18.1592 137.979 28.1316 131.967 25.392 134.478C20.6027 138.867 14.8482 139.8 8.36871 141.578C0.0113793 143.873 16.7202 156.503 21.5193 160.758C24.0387 162.991 27.6087 167.543 28.1335 170.404C29.17 176.056 19.981 159.879 18.5272 154.234"
                stroke="black"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="absolute lg:right-[20%] lg:bottom-22">
          <div className="relative w-[450px] h-[389px]">
            <svg
              viewBox="0 0 450 389"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute lg:top-22 lg:left-40 md:left-40 md:top-94 z-0 w-full h-auto sm:h-56 md:h-[300px] lg:h-[390px]"
            >
              <path
                d="M0 200C0 89.5431 89.5431 0 200 0H250C360.457 0 450 89.5431 450 200V400H200C89.543 400 0 310.457 0 200Z"
                fill="#1E1E1E"
              />
            </svg>

            <img
              src={plant}
              alt="plant"
              className="absolute lg:left-[90%] transform -translate-x-1/2 z-10 lg:w-[511px] lg:h-[614px]
              md:w-[400px] md:h-[590px] sm:w-[300px] sm:h-[410px] md:left-100 md:top-22 lg:top-[-35%]  "
            />
          </div>
        </div>

        <div className="absolute top-[50%] hidden lg:block">
          <svg
            width="184"
            height="87"
            viewBox="0 0 184 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00015 36.0352C3.42035 22.1395 2.8636 4.56141 20.0032 2.10874C28.1475 0.943283 38.4818 9.40914 40.9955 16.526C43.0806 22.4293 47.7778 29.0032 43.3777 35.1143C39.9216 39.9144 33.8658 42.0309 28.3342 39.2512C12.6258 31.3573 28.1976 14.4659 38.5612 12.271C52.7067 9.27514 81.7106 35.31 74.7369 50.4291C68.7577 63.3921 56.577 52.628 59.9571 41.7103C64.7118 26.3524 73.3627 22.2321 89.643 29.5255C102.355 35.2202 106.84 52.9444 103.563 64.6777C102.882 67.1146 102.86 82.1447 101 81.4339C82.6434 74.4203 97.7372 46.0749 111.646 43.2425C127.628 39.9881 143.835 36.8777 158.513 44.3536C166.407 48.3738 185.604 66.6221 180.361 59.4817C173.801 50.546 165.754 37.875 165.642 26.2296C165.609 22.7645 165.236 11.7016 166.064 22.2407C166.916 33.0947 167.414 42.6751 170.137 52.6508C170.743 54.8708 174.738 56.6803 176.428 58.0604C177.859 59.2294 170.904 59.9139 170.139 60.1508C163.536 62.1966 158.799 67.1014 154.675 72.4434C150.995 77.2114 147.628 84.6459 143.212 84.4016"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
