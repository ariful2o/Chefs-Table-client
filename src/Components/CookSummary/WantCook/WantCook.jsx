import React from "react";
import ShowCookItem from "./ShowCookItem/ShowCookItem";

export default function WantCook({ cookitem ,cookSerial}) {
  // const {recipe_name,preparing_time,calories}=cookitem
//   console.log(cookitem);
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center">
        Want to cook: {cookitem.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          {cookitem.map((item) => {
            return <ShowCookItem key={item.id} item={item} cookSerial={cookSerial}></ShowCookItem>;
          })}
        </table>
      </div>
    </div>
  );
}
