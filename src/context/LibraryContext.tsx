
"use client";

import { libraryData } from "@/types/libraryData";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ILibraryContext {
  addToPlan: libraryData[];
  setAddToPlan: Dispatch<SetStateAction<libraryData[]>>;
  saveForLater: libraryData[];
  setSaveForLater: Dispatch<SetStateAction<libraryData[]>>;
  doneExercises: number[];
  markAsDone: (id: number) => void;
  removeFromPlan: (id: number) => void;
}

export const LibraryContext = createContext<ILibraryContext>({
  addToPlan: [],
  setAddToPlan: () => {},
  saveForLater: [],
  setSaveForLater: () => {},
  doneExercises: [],
  markAsDone: () => {},
  removeFromPlan: () => {},
});

const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [addToPlan, setAddToPlan] = useState<libraryData[]>([]);
  const [saveForLater, setSaveForLater] = useState<libraryData[]>([]);
  const [doneExercises, setDoneExercises] = useState<number[]>([]);

  const markAsDone = (id: number) => {
    setDoneExercises((previous) =>
      previous.includes(id) ? previous : [...previous, id],
    );
  };

  const removeFromPlan = (id: number) => {
    setAddToPlan((previous) =>
      previous.filter((exercise) => exercise.id !== id),
    );

    setDoneExercises((previous) =>
      previous.filter((exerciseId) => exerciseId !== id),
    );
  };

  return (
    <LibraryContext.Provider
      value={{
        addToPlan,
        setAddToPlan,
        saveForLater,
        setSaveForLater,
        doneExercises,
        markAsDone,
        removeFromPlan,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
