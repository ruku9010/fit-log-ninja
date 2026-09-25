import React from "react";

const MyPlanPage = () => {
  return (
    <>
      <div className="w-[96%] mx-auto mb-5 mt-10">
        <h2 className="text-3xl font-bold text-[#FFFFFF]">MY PLAN</h2>

        <p className="text-[#9CA3AF]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div>
        <div>
          <h3>Excercises</h3>
          <span>2</span>
        </div>
        <div>
          <h3>Minutes</h3>
          <span>23</span>
        </div>
        <div>
          <h3>Calories</h3>
          <span>190</span>
        </div>
      </div>
    </>
  );
};

export default MyPlanPage;
