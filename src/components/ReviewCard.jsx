import { FaStar } from "react-icons/fa";

const ReviewCard = ({ text, image, name, job, rating }) => {
  return (
    <div
      className="
        bg-[#C1DCDC] 
        w-[90%] sm:w-[70%] md:w-[60%] 
        min-h-[280px] shrink-0
        flex flex-col justify-center items-center gap-4 sm:gap-6 
        p-6 sm:p-8 rounded-xl
      "
    >
      <p className="text-lg sm:text-xl md:text-2xl text-center">{text}</p>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
        <div className="flex gap-3 items-center">
          <img
            src={image}
            alt={name}
            className="lg:w-[200px] lg:h-auto md:w-12 md:h-12 sm:w-40 sm:h-40 "
          />
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl text-black">
              {name}
            </h2>
            <h3 className="text-sm sm:text-sm md:text-base text-black">
              {job}
            </h3>
          </div>
        </div>

        <div className="flex gap-2 items-center mt-2 sm:mt-0">
          <FaStar className="text-lg sm:text-2xl md:text-2xl text-yellow-500" />
          <h2 className="text-lg sm:text-2xl md:text-2xl text-black">
            {rating}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
