import React from "react";
import CurrentlyCookShow from "./CurrentlyCookShow/CurrentlyCookShow"
import TotalCalMin from "./CurrentlyCookShow/TotalCalMin/TotalCalMin";
export default function CurrentlyCook({currentlyCook,cookSerial}) {
  // console.log(currentlyCook)
    // Calculate total preparing time and total calories
    let totalPreparingTime = 0;
    let totalCalories = 0;
    currentlyCook.forEach((item) => {
      totalPreparingTime += parseInt(item.preparing_time);
      totalCalories += parseInt(item.calories);
    });
  
  return (
    <div className="mt-20 border border-slate-200 rounded-xl">
      <h2 className="text-2xl text-center my-4">
      Currently cooking: {cookSerial}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
            {
                currentlyCook.map((item) => {
                  return (
                    <CurrentlyCookShow
                      key={item.id}
                      item={item}
                    ></CurrentlyCookShow>
                  )
                })
            }
            <TotalCalMin totalPreparingTime={totalPreparingTime}
            totalCalories={totalCalories}></TotalCalMin>
        </table>
      </div>
    </div>
  );
}
