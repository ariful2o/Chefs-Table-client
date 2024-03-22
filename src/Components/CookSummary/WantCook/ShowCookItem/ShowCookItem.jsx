import React from "react";
import icon8 from '../../../../../public/icons/icons8-left-3-50.png'

export default function ShowCookItem({ item ,handleCurrentlyCook,}) {
  const { recipe_name, preparing_time, calories,id } = item;
  // console.log(item)
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th><img src={icon8} alt="" /></th>
        <td>{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
        <td>
          <button onClick={()=>handleCurrentlyCook(item,id)} className="btn btn-accent text-[#150B2B] rounded-[50px] px-6">
            Preparing
          </button>
        </td>
      </tr>
    </tbody>
  );
}
