import AddToPlanButton from "@/components/buttons/AddToPlanButton";
import SaveForLaterButton from "@/components/buttons/SaveForLaterButton";
import { libraryData } from "@/types/libraryData";
import Image from "next/image";

interface WorkoutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getLibrary = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch library data: ${response.status} ${response.statusText}`,
    );
  }

  const contentType = response.headers.get("content-type");

  if (!contentType?.includes("application/json")) {
    throw new Error(
      `Expected JSON response but received ${contentType}`,
    );
  }

  return response.json();
};

const WorkoutDetails = async ({
  params,
}: WorkoutDetailsProps) => {
  const { id } = await params;
  const libraryData = await getLibrary();

  const exercise = libraryData.find(
    (exercise: libraryData) => exercise.id === Number(id),
  ) as libraryData;

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-2xl bg-black p-4 shadow-sm sm:p-6 lg:flex-row lg:p-6">
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={exercise.image}
              alt={exercise.name}
              width={800}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="flex w-full flex-col lg:w-1/2">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            {exercise.name}
          </h2>

          <p className="mb-5 text-[#9CA3AF]">
            {exercise.description}
          </p>

          <div className="mb-5">
            <h3 className="mb-2 text-sm font-semibold text-white">
              HIGHLIGHTS
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              {exercise.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-sm font-medium text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-5 overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table w-full font-semibold text-[#9CA3AF]">
              <tbody className="text-[11px]">
                <tr>
                  <td>EQUIPMENT</td>
                  <td className="text-end">{exercise.equipment}</td>
                </tr>

                <tr>
                  <td>DIFFICULTY</td>
                  <td className="text-end">{exercise.difficulty}</td>
                </tr>

                <tr>
                  <td>SETS</td>
                  <td className="text-end">{exercise.sets}</td>
                </tr>

                <tr>
                  <td>REPS</td>
                  <td className="text-end">{exercise.reps}</td>
                </tr>

                <tr>
                  <td>DURATION</td>
                  <td className="text-end">
                    {exercise.duration} min
                  </td>
                </tr>

                <tr>
                  <td>CALORIES</td>
                  <td className="text-end">
                    {exercise.caloriesBurned} kcal
                  </td>
                </tr>

                <tr>
                  <td>RATING</td>
                  <td className="text-end">{exercise.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <h2 className="text-md mb-2 font-semibold text-white">
              INSTRUCTIONS
            </h2>

            <div className="space-y-1 text-[#9CA3AF]">
              <small>
                1. Lie on the bench with eyes under the bar and feet
                planted.
                <br />
              </small>

              <small>
                2. Unrack with locked elbows and lower the bar to
                mid-chest. with eyes under the bar and feet planted.
                <br />
              </small>

              <small>
                3. Press up in a slight arc until elbows lock without
                bouncing.
                <br />
              </small>

              <small>
                4. Keep shoulder blades pinched and a natural arch in
                the back.
              </small>
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-3">
            <AddToPlanButton exercise={exercise} />
            <SaveForLaterButton exercise={exercise} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;