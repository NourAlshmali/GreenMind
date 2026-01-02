import AboutComponent from "../components/AboutComponent";
import { RiPlantLine } from "react-icons/ri";
import { FaBox } from "react-icons/fa6";
import { LuPhoneOutgoing } from "react-icons/lu";

const AboutUs = () => {
  return (
    <div className="bg-white w-full min-h-[70vh] ">
      <h1 className="text-black font-bold text-5xl text-center">About Us</h1>

      <p className="text-gray-400 text-2xl text-center mt-6">
        Order now and appreciate the beauty of nature
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mb-60 mt-20 mx-[10%]">
        <AboutComponent
          icon={RiPlantLine}
          title="Large Assortment"
          description="We offer many different types of products with fewer variations in each category."
        />

        <AboutComponent
          icon={FaBox}
          title="Fast & Free Shipping"
          description="4-day or less delivery time, free shipping and an expedited delivery option."
        />

        <AboutComponent
          icon={LuPhoneOutgoing}
          title="24/7 Support"
          description="Answers to any business related inquiry 24/7 and in real-time."
        />
      </div>
    </div>
  );
};

export default AboutUs;
