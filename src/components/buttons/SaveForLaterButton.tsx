
"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { libraryData } from "@/types/libraryData";
import { useContext } from "react";
import { toast } from "react-toastify";

const SaveForLaterButton = ({ exercise }: { exercise: libraryData }) => {
  const { saveForLater, setSaveForLater } = useContext(LibraryContext);

  const handleSaveForLater = () => {
    const exists = saveForLater.some((item) => item.id === exercise.id);

    if (exists) {
      toast.error("This exercise is already saved.");
      return;
    }

    setSaveForLater((previous) => [...previous, exercise]);
    toast.success(`${exercise.name} saved for later.`);
  };

  return (
    <button
      onClick={handleSaveForLater}
      className="rounded-lg border border-[#C2F10D] px-5 py-3 font-semibold text-[#C2F10D] transition hover:bg-[#C2F10D] hover:text-black"
    >
      Save for Later
    </button>
  );
};

export default SaveForLaterButton;
