import React from "react";

export default function TotalCalMin({totalPreparingTime,totalCalories}) {

  return (

    <tr className="font-bold">
        <td></td>
        <td>Total : {totalPreparingTime} minutes</td>
        <td>Total : {totalCalories} calories</td>
      </tr>

  );
}
