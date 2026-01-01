import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import planet1 from "/public/assets/img/p1.png";
import planet2 from "/public/assets/img/p2.png";
import planet3 from "/public/assets/img/p3.png";

const Selling = () => {
  return (
    <div className="bg-white grid w-full h-[80vh] lg:grid-cols-4 gap-x-4 mt-[5%]">
      <div className="flex flex-col gap-5 m-20 ">
        <h3 className="text-black font-bold lg:text-4xl max-w-[70%]">
          Best Selling Plants
        </h3>
        <p className="text-gray-400 text-lg max-w-[60%]">
          Easiest way to healthy life by buying your favorite plants{" "}
        </p>
        <button className="bg-[#C1DCDC] w-[150px] h-[45px] rounded-2xl cursor-pointer items-center justify-center text-[20px] text-black flex gap-0">
          See More{" "}
          <IoIosArrowRoundForward className="flex justify-center size-[30px] pt-1" />{" "}
        </button>
      </div>
      <div className="flex flex-col gap-y-4">
        <img
          src={planet1}
          alt="planet image"
          className="lg:w-[75%] md:w-[500px] "
        />
        <h4 className="text-black lg:text-3xl">Natural Plants</h4>
        <h5 className="text-gray-400 lg:text-2xl">₱ 1,400.00</h5>
      </div>
      <div className="flex flex-col gap-y-4">
        <img src={planet2} alt="planet image" className="lg:w-[75%]" />
        <h4 className="text-black lg:text-3xl">Artificial Plants</h4>
        <h5 className="text-gray-400 lg:text-2xl">₱ 900.00</h5>
      </div>
      <div className="flex flex-col gap-y-4">
        <img src={planet3} alt="planet image" className="lg:w-[75%]" />
        <h4 className="text-black lg:text-3xl">Artificial Plants</h4>
        <h5 className="text-gray-400 lg:text-2xl">₱ 3,500.00</h5>
      </div>
    </div>
  );
};

export default Selling;
