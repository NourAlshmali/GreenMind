import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import SellingCard from "../components/SellingCard";

import planet1 from "../assets/img/p1.png";
import planet2 from "../assets/img/p2.png";
import planet3 from "../assets/img/p3.png";

const Selling = () => {
  return (
    <div className="bg-white w-full mt-[5%] px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col gap-5 lg:w-1/4">
          <h3 className="text-black font-bold text-3xl lg:text-4xl">
            Best Selling Plants
          </h3>

          <p className="text-gray-400 text-lg">
            Easiest way to healthy life by buying your favorite plants
          </p>

          <button className="bg-[#C1DCDC] w-[150px] h-[45px] rounded-2xl flex items-center justify-center text-[18px] text-black">
            See More
            <IoIosArrowRoundForward className="size-[30px]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-50 flex-1">
          <SellingCard
            image={planet1}
            title="Natural Plants"
            price="₱ 1,400.00"
          />

          <SellingCard
            image={planet2}
            title="Artificial Plants"
            price="₱ 900.00"
          />

          <SellingCard
            image={planet3}
            title="Artificial Plants"
            price="₱ 3,500.00"
          />
        </div>
      </div>
    </div>
  );
};

export default Selling;
