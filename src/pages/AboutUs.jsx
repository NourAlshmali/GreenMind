import React from "react";
import { RiPlantLine } from "react-icons/ri";
import { FaBox } from "react-icons/fa6";
import { LuPhoneOutgoing } from "react-icons/lu";

const AboutUs = () => {
  return (
    <div className="bg-white w-full h-[65vh]">
      <h1 className="text-black font-bold text-5xl flex justify-center items-center">
        About Us
      </h1>
      <p className="text-gray-400 text-2xl flex justify-center items-center mt-6">
        Order now and appreciate the beauty of nature
      </p>
      <div className="grid grid-cols-3 gap-4 mt-20 mr-[10%] ml-[10%]">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#C1DCDC] flex justify-center items-center rounded-[50%] w-30 h-30">
            <RiPlantLine className=" flex justify-center items-center text-[60px]" />
          </div>
          <h3 className="text-black mt-5 text-2xl font-bold">
            Large Assortment
          </h3>
          <p className="text-gray-400 max-w-[80%] mt-10 text-[20px]">
            we offer many different types of products with fewer variations in
            each category.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#C1DCDC] flex justify-center items-center rounded-[50%] w-30 h-30">
            <FaBox className=" flex justify-center items-center text-[60px]" />
          </div>
          <h3 className="text-black mt-5 text-2xl font-bold">
            Fast & Free Shipping
          </h3>
          <p className="text-gray-400 max-w-[80%] mt-10 text-[20px]">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#C1DCDC] flex justify-center items-center rounded-[50%] w-30 h-30">
            <LuPhoneOutgoing className=" flex justify-center items-center text-[60px]" />
          </div>
          <h3 className="text-black mt-5 text-2xl font-bold">24/7 Support</h3>
          <p className="text-gray-400 max-w-[80%] mt-10 text-[20px]">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
