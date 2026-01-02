import ReviewCard from "../components/ReviewCard";
import img1 from "../assets/img/person1.png";
import img2 from "../assets/img/person2.png";

const Reviews = () => {
  return (
    <div className="w-full h-[80vh] mt-[10%] flex flex-col">
      <h1 className="font-extrabold max-w-[30%] text-black text-4xl ml-30 mb-10">
        What customers say about GREEMIND?
      </h1>

      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-8 px-[10%]">
          <ReviewCard
            text="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
            image={img1}
            name="John Doe"
            job="Youtuber"
            rating="4.5"
          />

          <ReviewCard
            text="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
            image={img2}
            name="Jane Smith"
            job="Designer"
            rating="4.8"
          />

          <ReviewCard
            text="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
            image={img1}
            name="Alex Brown"
            job="Developer"
            rating="4.7"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
