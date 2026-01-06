import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#C1DCDC] flex justify-between min-h-[400px] ">
        <div className=" flex flex-col gap-6 justify-center items-center ml-[5%] ">
          <h3 className="md:text-3xl sm:text-2xl text-black font-bold">
            GREENMIND
          </h3>
          <p className="text-gray-400 md:text-[20px] sm:text-[15px] max-w-[50%]">
            We help you find your dream plant
          </p>
          <div className="flex gap-5">
            <div className="bg-[#C1DCDC] border rounded-full border-[#1E1E1E80] w-[50px] h-[50px] flex justify-center items-center">
              {" "}
              <FaFacebookF className="text-[20px]" />
            </div>

            <div className="bg-[C1DCDC] border rounded-[50%] border-[#1E1E1E80] w-[50px] h-[50px] flex justify-center items-center">
              {" "}
              <FaInstagram className="text-[20px]" />
            </div>

            <div className="bg-[C1DCDC] border rounded-[50%] border-[#1E1E1E80] w-[50px] h-[50px] flex justify-center items-center">
              {" "}
              <FaTwitter className="text-[20px]" />
            </div>
          </div>
          <p className="text-gray-400 max-w-full text-[16px] mt-20">
            2023 all Right Reserved Term of use GREENMIND
          </p>
        </div>

        <div className="  justify-end grid grid-cols-3 md:gap-30 sm:gap-5 md:mr-[10%] mt-[4%] sm:mr-[1%]  ">
          <div className="flex flex-col gap-5">
            <h3 className="text-black font-bold md:text-[20px] sm:text-[15px]">
              Information
            </h3>
            <p className="text-gray-400 md:text-[20px] sm:text-[15px]">About</p>
            <p className="text-gray-400 md:text-[20px] sm:text-[15px]">
              Product
            </p>
            <p className="text-gray-400 md:text-[20px] sm:text-[15px]">Blog</p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-black font-bold md:text-[20px] sm:text-[15px]">
              Company
            </h3>
            <p className="text-gray-400 md:text-[20px] sm:text-[15px]">
              Community
            </p>
            <p className="text-gray-400 md:text-[20px] sm:text-[15px]">
              Career
            </p>
            <p className="text-gray-400 md:text-[20px] sm:text-[15px]">
              Our story
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-black font-bold md:text-[20px] sm:text-[15px]">
              Contact
            </h3>
            <p className="text-gray-400 md:text-[20px] sm:text-[15px]">
              Getting Started
            </p>
            <p className="text-gray-400 md:text-[20px] sm:text-[15px]">
              Pricing
            </p>
            <p className="text-gray-400 md:text-[20px] sm:text-[15px]">
              Resources
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
