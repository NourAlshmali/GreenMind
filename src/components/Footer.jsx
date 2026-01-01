import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#C1DCDC] flex justify-between min-h-[400px] ">
        <div className=" flex flex-col gap-6 justify-center items-center ml-[5%]">
          <h3 className="text-3xl text-black font-bold">GREENMIND</h3>
          <p className="text-gray-400 text-[20px] max-w-[50%]">
            We help you find your dream plant
          </p>
          <div className="flex gap-5">
            <div className="bg-[C1DCDC] border rounded-[50%] border-[#1E1E1E80] w-[50px] h-[50px] flex justify-center items-center">
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

        <div className="  justify-end grid grid-cols-3 gap-30 mr-[10%] mt-[4%]  ">
          <div className="flex flex-col gap-5">
            <h3 className="text-black font-bold text-[20px]">Information</h3>
            <p className="text-gray-400 text-[20px]">About</p>
            <p className="text-gray-400 text-[20px]">Product</p>
            <p className="text-gray-400 text-[20px]">Blog</p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-black font-bold text-[20px]">Company</h3>
            <p className="text-gray-400 text-[20px]">Community</p>
            <p className="text-gray-400 text-[20px]">Career</p>
            <p className="text-gray-400 text-[20px]">Our story</p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-black font-bold text-[20px]">Contact</h3>
            <p className="text-gray-400 text-[20px]">Getting Started</p>
            <p className="text-gray-400 text-[20px]">Pricing</p>
            <p className="text-gray-400 text-[20px]">Resources</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
