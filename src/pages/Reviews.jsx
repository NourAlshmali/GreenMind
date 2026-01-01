import React from "react";
import img1 from "/assets/img/person1.png";
import img2 from "/assets/img/person2.png";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="w-full h-[80vh] mt-[10%] flex flex-col">
     
      <h1 className="font-extrabold max-w-[30%] text-black text-4xl ml-30 mb-10">
        What customers say about GREEMIND?
      </h1>

     
    <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-8 px-[10%]">

        
          <div
            className="bg-[#C1DCDC] w-[60%] min-h-[280px] shrink-0
            flex flex-col justify-center items-center gap-6 p-8 rounded-xl"
          >
            <p className="text-2xl text-center">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>

            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <img src={img1} alt="" />
                <div>
                  <h2 className="text-2xl text-black">John Doe</h2>
                  <h3 className="text-sm text-black">Youtuber</h3>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <FaStar className="text-2xl" />
                <h2 className="text-2xl text-black">4.5</h2>
              </div>
            </div>
          </div>

       
          <div
            className="bg-[#C1DCDC] w-[60%] min-h-[280px] shrink-0
            flex flex-col justify-center items-center gap-6 p-8 rounded-xl"
          >
            <p className="text-2xl text-center">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>

            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <img src={img2} alt="" />
                <div>
                  <h2 className="text-2xl text-black">Jane Smith</h2>
                  <h3 className="text-sm text-black">Designer</h3>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <FaStar className="text-2xl" />
                <h2 className="text-2xl text-black">4.8</h2>
              </div>
            </div>
          </div>


          <div
            className="bg-[#C1DCDC] w-[60%] min-h-[280px] shrink-0
            flex flex-col justify-center items-center gap-6 p-8 rounded-xl"
          >
            <p className="text-2xl text-center">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>

            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <img src={img1} alt="" />
                <div>
                  <h2 className="text-2xl text-black">Jane Smith</h2>
                  <h3 className="text-sm text-black">Designer</h3>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <FaStar className="text-2xl" />
                <h2 className="text-2xl text-black">4.8</h2>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Reviews;
