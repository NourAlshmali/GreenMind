const AboutComponent = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="bg-[#C1DCDC] flex justify-center items-center rounded-full w-30 h-30">
        <Icon className="text-[60px]" />
      </div>

      <h3 className="text-black mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="text-gray-400 max-w-[80%] mt-10 text-[20px]">
        {description}
      </p>
    </div>
  );
};

export default AboutComponent;
