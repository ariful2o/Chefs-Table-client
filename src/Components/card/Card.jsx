import React from "react";
import clock from "../../../public/icons/Frame (2).svg";
import caloriesimg from "../../../public/icons/Frame (3).svg";

export default function Card({ card }) {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = card;
  {
    console.log(ingredients);
  }
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl shadow-xl my-8">
        <figure>
          <img src={recipe_image} alt="recipe_image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="my-4">{short_description}</p><hr />
          <h2 className="card-title my-6">Ingredients: {ingredients.length}</h2>
          <ou className="ml-4">
            {ingredients.map((producDetalis) => {
              return <li>{producDetalis}</li>;
            })}
          </ou>
          <div className="flex my-6">
            <div className="flex">
              <img src={clock} alt="" />
              <p className="">{preparing_time}</p>
            </div>
            <div className="flex ml-4">
              <img src={caloriesimg} alt="" />
              <p className="">{calories}</p>
            </div>
          </div>
          <div className=" my-4 mx-auto">
            <button className="btn btn-accent text-[#150B2B] rounded-[50px] px-6 py-3">
              Want to cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
