
import { libraryData } from "@/types/libraryData";
import LibraryDataCard from "./product/LibraryDataCard";
import { Suspense } from "react";

const getLibrary = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
       cache: 'force-cache'
    }
  );

  const data = await response.json();

  return data;
};

const LibrarySection = async () => {
  const libraryData = await getLibrary();

  return (
    <>
      <div className="w-[96%] mx-auto mb-5">
        <h2 className="text-3xl font-bold text-[#FFFFFF]">
          THE LIBRARY
        </h2>

        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <Suspense fallback=<span className="loading loading-spinner text-success"></span>>
      <div  className="grid w-[96%] mx-auto mb-10 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {libraryData.map((data: libraryData) => (
          <LibraryDataCard key={data.id} data={data} />
        ))}
      </div>
      </Suspense>
    </>
  );
};

export default LibrarySection;
