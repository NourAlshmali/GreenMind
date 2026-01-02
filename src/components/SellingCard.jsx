import React from "react";

const SellingCard = ({ image, title, price }) => {
  return (
    <div className="flex flex-col gap-y-4 sm:justify-center sm:items-center">
      <img
        src={image}
        alt={title}
        className="lg:w-[75%] md:w-[500px] sm:w-[450px]"
      />
      <h4 className="text-black lg:text-3xl sm:text-2xl">{title}</h4>
      <h5 className="text-gray-400 lg:text-2xl sm:text-[16px]">{price}</h5>
    </div>
  );
};

export default SellingCard;
