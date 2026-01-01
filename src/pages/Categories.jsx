import React from "react";
import img1 from "/assets/img/c1.png";
import img2 from "/assets/img/c2.png";
import img3 from "/assets/img/c3.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Categories = () => {
  return (
    <div className="bg-white w-full h-screen">
      <h1 className="text-black font-bold text-5xl flex justify-center items-center">
        Categories
      </h1>
      <p className="text-gray-400 text-2xl flex justify-center items-center mt-6">
        Find what you are looking for
      </p>
      <div className="w-full h-[95vh] bg-[#C1DCDC] mt-[3%] flex justify-center items-center">
        <div className=" grid grid-cols-3 flex justify-center items-center gap-50">
          <div className="mb-90 flex flex-col justify-center items-center">
            <img src={img1} alt="plant image" />
            <h3 className="text-black mt-5 text-2xl font-bold ">
              Natural Plants
            </h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={img2} alt="plant image" />
            <h3 className="text-black mt-5 text-2xl font-bold">
              Plant Accessories
            </h3>
            <p className="text-gray-400 max-w-[80%] text-[18px]">
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-white w-[150px] h-[45px] mt-5 rounded-2xl cursor-pointer items-center justify-center  text-[20px] text-black flex gap-0">
              Explore
              <IoIosArrowRoundForward className="flex justify-center size-[30px] pt-1" />{" "}
            </button>
          </div>

          <div className="mb-90 flex flex-col justify-center items-center">
            <img src={img3} alt="plant image" />
            <h3 className="text-black mt-5 text-2xl font-bold">
              Artificial Plants
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
