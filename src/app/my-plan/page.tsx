
"use client";

import AddToPlanCard from "@/components/product/AddToPlanCard";
import AddToSavedCard from "@/components/product/AddToSavedCard";
import { LibraryContext } from "@/context/LibraryContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type SortOption = "Duration" | "Calories" | "Rating";

const MyPlanPage = () => {
  const { addToPlan, saveForLater } = useContext(LibraryContext);
  const [sortBy, setSortBy] = useState<SortOption>("Duration");

  const sortedAddToPlan = [...addToPlan].sort((a, b) => {
    if (sortBy === "Duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "Calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  const totalMinutes = addToPlan.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );

  const totalCalories = addToPlan.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  return (
    <div className="mx-auto w-[96%] max-w-6xl py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-white">
          MY PLAN
        </h1>

        <p className="text-[#9CA3AF]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-3 rounded-xl bg-[#13161D]">
        <div className="border-r border-[#272B33] p-5">
          <h3 className="mb-1 text-sm text-[#9CA3AF]">
            Exercises
          </h3>

          <span className="text-3xl font-bold text-[#C2F10D]">
            {addToPlan.length}
          </span>
        </div>

        <div className="border-r border-[#272B33] p-5">
          <h3 className="mb-1 text-sm text-[#9CA3AF]">
            Minutes
          </h3>

          <span className="text-3xl font-bold text-white">
            {totalMinutes}
          </span>
        </div>

        <div className="p-5">
          <h3 className="mb-1 text-sm text-[#9CA3AF]">
            Calories
          </h3>

          <span className="text-3xl font-bold text-white">
            {totalCalories}
          </span>
        </div>
      </div>

      <div className="tabs tabs-lift w-full">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label={`Today's Plan (${addToPlan.length})`}
          defaultChecked
        />

        <div className="tab-content border-[#272B33] bg-[#13161D] p-5">
          {addToPlan.length > 0 ? (
            <>
              <div className="mb-5 flex justify-end">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(event) =>
                      setSortBy(
                        event.target.value as SortOption,
                      )
                    }
                    className="appearance-none rounded-lg border border-[#272B33] bg-[#1A1E26] py-2 pl-4 pr-10 text-sm font-medium text-white outline-none focus:border-[#C2F10D]"
                  >
                    <option value="Duration">Duration</option>
                    <option value="Calories">Calories</option>
                    <option value="Rating">Rating</option>
                  </select>

                  <FaChevronDown
                    size={12}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {sortedAddToPlan.map((toPlan) => (
                  <AddToPlanCard
                    key={toPlan.id}
                    toPlan={toPlan}
                  />
                ))}
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label={`Saved (${saveForLater.length})`}
        />

        <div className="tab-content border-[#272B33] bg-[#13161D] p-5">
          {saveForLater.length > 0 ? (
            <div className="flex flex-col gap-4">
              {saveForLater.map((toPlan) => (
                <AddToSavedCard
                  key={toPlan.id}
                  toPlan={toPlan}
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-2xl font-bold text-white">
        NOTHING HERE YET
      </h2>

      <p className="mb-6 max-w-md text-sm text-[#9CA3AF]">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/workouts"
        className="rounded-lg bg-[#C2F10D] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#b5e500]"
      >
        Go to Workouts
      </Link>
    </div>
  );
};

export default MyPlanPage;
