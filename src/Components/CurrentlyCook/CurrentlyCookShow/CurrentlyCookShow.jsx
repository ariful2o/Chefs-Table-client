import React from "react";

export default function CurrentlyCookShow({ item }) {
  const { recipe_name, preparing_time, calories } = item;
  // console.log(item)
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th></th>
        <td>{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
     </tr>
    </tbody>
  );
}
