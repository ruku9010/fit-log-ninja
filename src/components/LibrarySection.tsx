import { libraryData } from "@/types/libraryData";
import LibraryDataCard from "./product/LibraryDataCard";

const getLibrary = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch library data: ${response.status} ${response.statusText}`
    );
  }

  const contentType = response.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    throw new Error(
      `Expected JSON response but received ${contentType}`
    );
  }

  return response.json();
};

const LibrarySection = async () => {
  const libraryData = await getLibrary();

  return (
    <>
      <div className="mx-auto mb-5 w-[96%]">
        <h2 className="text-3xl font-bold text-[#FFFFFF]">
          THE LIBRARY
        </h2>

        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="mx-auto mb-10 grid w-[96%] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {libraryData.map((data: libraryData) => (
          <LibraryDataCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default LibrarySection;