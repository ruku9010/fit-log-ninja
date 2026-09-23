import Image from "next/image";
import hero from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="hero w-[96%] mx-auto my-15 rounded-3xl bg-base-200 min-h-[90vh]">
      <div className="hero-content flex-col text-center lg:gap-60 lg:text-start lg:flex-row-reverse">
        <Image
          alt="Fitlog hero banner"
          src={hero}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h3 className="font-semibold text-sm text-[#C2F800] mb-5">
            WORKOUT LIBRARY
          </h3>
          <h1 className="text-5xl font-bold">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>
          <p className="py-6 text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br />
            into today's plan, and watch the week's work add up.
          </p>
          <button className="btn rounded-md bg-[#C2F800] text-black">
            BROWSE WORKOUTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
