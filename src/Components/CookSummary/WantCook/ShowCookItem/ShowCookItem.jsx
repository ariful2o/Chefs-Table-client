import React from "react";

export default function ShowCookItem({ item }) {
  const { recipe_name, preparing_time, calories } = item;
  // console.log(item)
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td>
          <button className="btn btn-accent text-[#150B2B] rounded-[50px] px-6">
            Preparing
          </button>
        </td>
      </tr>
    </tbody>
  );
}
