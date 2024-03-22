import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clock from "../../../public/icons/Frame (2).svg";
import caloriesimg from "../../../public/icons/Frame (3).svg";

export default function Card({ card, handleCookTiem }) {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories
  } = card;

  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    if (selected) {
      // Show toast notification if card is already selected
      toast.warning("You've already selected this recipe!", {
        position: "top-center",
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setSelected(true);
      handleCookTiem(card);
    }
  };

  return (
    <div>
      <div className={`card card-compact w-96 bg-base-100 shadow-xl my-8 pt-8 border ${selected ? 'border-green-500' : 'border-slate-200'}`}>
        <figure>
          <img className="h-52 w-full rounded-2xl" src={recipe_image} alt="recipe_image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="my-4">{short_description}</p>
          <hr />
          <h2 className="card-title">Ingredients: {ingredients.length}</h2>
          <ol className="ml-4">
            {ingredients.map((producDetalis, idx) => {
              return <li key={idx}>{producDetalis}</li>;
            })}
          </ol>
          <div className="flex my-6">
            <div className="flex">
              <img src={clock} alt="" />
              <p className="">{preparing_time} minutes</p>
            </div>
            <div className="flex ml-4">
              <img src={caloriesimg} alt="" />
              <p className="">{calories} calories</p>
            </div>
          </div>
          <div className="my-4">
            <button
              onClick={handleSelect}
              className={`btn btn-accent text-[#150B2B] rounded-[50px] px-6 py-3 ${selected ? 'bg-green-500' : ''}`}
            >
              {selected ? 'Selected' : 'Want to cook'}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
