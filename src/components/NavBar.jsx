import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { VscListFlat } from "react-icons/vsc";
const NavBar = () => {
  const NavTabs = [
    { id: 1, Tab: "Home" },
    { id: 2, Tab: "products" },
    { id: 3, Tab: "contact" },
  ];
  const IconsTab = [
    { id: 1, Icon: <FaCartShopping /> },
    { id: 2, Icon: <IoPersonOutline /> },
    { id: 3, Icon: <VscListFlat /> },
  ];

  return (
    <div>
      <nav className=" fixed bg-transparent flex relative ">
        <p className=" lg:text-[30px] md:text-[25px] font-extrabold sm:text-[20px] text-black md:pt-[4%] lg:pt-[2%] pl-[8%] pt-[2%] w-[20%] absolute">
          GREEN MIND
        </p>
        <span className="flex right-0 pr-[7%] w-[78%] pt-[2.66%] md:pt-[6%] lg:pt-[2.5%] absolute justify-between">
          <ul className="flex lg:gap-10 sm:gap-5 cursor-pointer">
            {NavTabs.map((tab) => (
              <li
                key={tab.id}
                className="text-black lg:text-[18px] md:text-[18px] sm:text-[15px]"
              >
                <span>{tab.Tab}</span>
              </li>
            ))}
          </ul>

          <ul className="flex lg:gap-10 sm:gap-6 cursor-pointer">
            {IconsTab.map((icon) => (
              <li key={icon.id} className="">
                <span className="text-black lg:text-2xl md:text-[25px]  sm:text-[20px] ">
                  {icon.Icon}
                </span>
              </li>
            ))}
          </ul>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
