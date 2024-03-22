import React from "react";

export default function TotalCalMin({currentlyCook}) {
    for (const item of currentlyCook) {
        
        console.log(item)
    }
  return (
    <div>
      <hr />
      {/* <tr>
        <th></th>
        <td></td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
      </tr> */}
    </div>
  );
}
