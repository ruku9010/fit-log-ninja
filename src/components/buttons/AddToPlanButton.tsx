
"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { libraryData } from "@/types/libraryData";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddToPlanButton = ({ exercise }: { exercise: libraryData }) => {
  const { addToPlan, setAddToPlan } = useContext(LibraryContext);

  const handleAddToPlan = () => {
    const exists = addToPlan.some((item) => item.id === exercise.id);

    if (exists) {
      toast.error("This exercise is already in today's plan.");
      return;
    }

    setAddToPlan((previous) => [...previous, exercise]);
    toast.success(`${exercise.name} added to today's plan.`);
  };

  return (
    <button
      onClick={handleAddToPlan}
      className="rounded-lg bg-[#C2F10D] px-5 py-3 font-semibold text-black transition hover:bg-[#b5e500]"
    >
      Add to Today's Plan
    </button>
  );
};

export default AddToPlanButton;
