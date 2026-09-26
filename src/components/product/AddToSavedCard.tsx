import { libraryData } from "@/types/libraryData";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
const AddToSavedCard = ({ toPlan }: { toPlan: libraryData }) => {
  return (
    <div className="w-full bg-[#1A1E26] border border-[#272B33] rounded-xl p-4">
      
      <div className="grid grid-cols-[180px_1fr_auto_auto] items-center gap-5">
        
        {/* Image */}
        <div className="relative w-[180px] h-[120px] overflow-hidden rounded-lg">
          
          <Image
            src={toPlan.image}
            alt={toPlan.name}
            fill
            className="object-cover"
          />
        </div>
        {/* Exercise Info */}
        <div>
          
          <h2 className="text-xl font-bold text-white mb-1">
            
            {toPlan.name}
          </h2>
          <p className="text-sm text-[#9CA3AF]"> {toPlan.equipment} </p>
        </div>
        {/* Exercise Stats */}
        <div className="flex items-center gap-5 text-sm whitespace-nowrap">
          
          <div>
            
            <p className="text-[#6B7280]">Duration</p>
            <p className="text-white font-semibold">
              
              {toPlan.duration} min
            </p>
          </div>
          <div>
            
            <p className="text-[#6B7280]">Calories</p>
            <p className="text-white font-semibold">
              
              {toPlan.caloriesBurned} kcal
            </p>
          </div>
          <div>
            
            <p className="text-[#6B7280]">Rating</p>
            <p className="text-[#CCFF00] font-semibold">
              
              ★ {toPlan.rating}
            </p>
          </div>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-2">
          
          <button className="px-4 py-2 rounded-lg bg-[#CCFF00] text-black text-sm font-semibold hover:bg-[#b8e600] transition">
            
            Add to Plan
          </button>
          <button className="p-2 rounded-lg text-[#9CA3AF] hover:bg-[#272B33] hover:text-white transition">
            
            <IoClose size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddToSavedCard;
