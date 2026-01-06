import React from "react";
import img1 from "../assets/img/c1.png";
import img2 from "../assets/img/c2.png";
import img3 from "../assets/img/c3.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Categories = () => {
  return (
    <div className="bg-white w-full py-20">
      <h1 className="text-black font-bold text-3xl md:text-5xl flex justify-center items-center">
        Categories
      </h1>

      <p className="text-gray-400 text-lg md:text-2xl flex justify-center items-center mt-6 text-center px-4">
        Find what you are looking for
      </p>

      <div className="w-full bg-[#C1DCDC] mt-10 py-20 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-24 md:gap-10 px-4  w-full">
          <div className="flex flex-col justify-center items-center">
            <img
              src={img1}
              alt="plant image"
              className=" lg:w-[37.5rem] md:w-[37.5rem] sm:w-[31.25rem]"
            />
            <h3 className="text-black mt-5 text-xl md:text-2xl font-bold text-center">
              Natural Plants
            </h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img
              src={img2}
              alt="plant image"
              className=" lg:w-[37.5rem] md:w-[37.5rem] sm:w-[31.25rem]"
            />
            <h3 className="text-black mt-5 text-xl md:text-2xl font-bold text-center">
              Plant Accessories
            </h3>
            <p className="text-gray-400 text-center max-w-[80%] text-base mt-3">
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-white w-36 h-12 mt-5 rounded-2xl cursor-pointer flex items-center justify-center text-base md:text-lg text-black gap-1">
              Explore
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <img
              src={img3}
              alt="plant image"
              className=" lg:w-[37.5rem] md:w-[37.5rem] sm:w-[31.25rem] "
            />
            <h3 className="text-black mt-5 text-xl md:text-2xl font-bold text-center">
              Artificial Plants
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
