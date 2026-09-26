
"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { libraryData } from "@/types/libraryData";
import Image from "next/image";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const AddToPlanCard = ({ toPlan }: { toPlan: libraryData }) => {
  const { doneExercises, markAsDone, removeFromPlan } =
    useContext(LibraryContext);

  const isDone = doneExercises.includes(toPlan.id);

  const handleMarkAsDone = () => {
    if (isDone) return;

    markAsDone(toPlan.id);
    toast.success(`${toPlan.name} marked as done.`);
  };

  const handleRemove = () => {
    removeFromPlan(toPlan.id);
    toast.success(`${toPlan.name} removed from today's plan.`);
  };

  return (
    <div className="w-full rounded-xl border border-[#272B33] bg-[#1A1E26] p-4">
      <div className="grid grid-cols-[180px_1fr_auto_auto] items-center gap-5">
        <div className="relative h-[120px] w-[180px] overflow-hidden rounded-lg">
          <Image
            src={toPlan.image}
            alt={toPlan.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white">
              {toPlan.name}
            </h2>

            {isDone && (
              <span className="rounded-full bg-[#C2F10D] px-2 py-1 text-xs font-bold text-black">
                DONE
              </span>
            )}
          </div>

          <p className="text-sm text-[#9CA3AF]">
            {toPlan.equipment}
          </p>
        </div>

        <div className="flex items-center gap-5 whitespace-nowrap text-sm">
          <div>
            <p className="text-[#6B7280]">Duration</p>
            <p className="font-semibold text-white">
              {toPlan.duration} min
            </p>
          </div>

          <div>
            <p className="text-[#6B7280]">Calories</p>
            <p className="font-semibold text-white">
              {toPlan.caloriesBurned} kcal
            </p>
          </div>

          <div>
            <p className="text-[#6B7280]">Rating</p>
            <p className="font-semibold text-[#C2F10D]">
              ★ {toPlan.rating}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleMarkAsDone}
            disabled={isDone}
            className="flex items-center gap-2 rounded-lg border border-[#C2F10D] px-4 py-2 text-sm font-semibold text-[#C2F10D] transition hover:bg-[#C2F10D] hover:text-black disabled:bg-[#C2F10D] disabled:text-black"
          >
            <FaCheck size={13} />
            {isDone ? "Done" : "Mark as Done"}
          </button>

          <button
            onClick={handleRemove}
            className="rounded-lg p-2 text-[#9CA3AF] transition hover:bg-[#272B33] hover:text-white"
            aria-label={`Remove ${toPlan.name}`}
          >
            <IoClose size={23} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToPlanCard;
