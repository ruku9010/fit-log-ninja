
import { libraryData } from "@/types/libraryData";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

interface LibraryDataCardProps {
  data: libraryData;
}

const LibraryDataCard = ({ data }: LibraryDataCardProps) => {
  const {
    image,
    name,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = data;

  return (
    <div className="card bg-base-100 w-full shadow-sm overflow-hidden">
      {/* Image */}
      <figure className="h-56 w-full">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="card-body p-5">
        {/* Muscle Groups */}
        <div className="flex min-h-10 flex-wrap items-center gap-2">
          {muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-sm font-medium text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Info */}
        <div className="min-h-15">
          <h2 className="card-title text-xl text-white">
            {name}
          </h2>

          <p className="mt-1 text-sm text-[#9CA3AF]">
            {equipment}
          </p>
        </div>

        <hr className="my-2 opacity-15" />

        {/* Stats */}
        <div className="flex gap-4 text-sm text-[#9CA3AF]">
          <span className="flex items-center gap-2">
            <IoMdTime className="text-lg text-[#9CA3AF]" />
            {duration}
          </span>

          <span className="flex items-center gap-2">
            <GiMuscleUp className="text-lg text-[#9CA3AF]" />
            {caloriesBurned}
          </span>

          <span className="flex items-center gap-2">
            <FaRegStar className="text-lg" />
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LibraryDataCard;
