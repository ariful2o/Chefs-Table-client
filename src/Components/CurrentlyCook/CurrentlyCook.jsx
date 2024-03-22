import React from "react";
import CurrentlyCookShow from "./CurrentlyCookShow/CurrentlyCookShow"
export default function CurrentlyCook({currentlyCook,cookSerial}) {
    // console.log(currentlyCook)
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
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
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
        </table>
      </div>
    </div>
  );
}
