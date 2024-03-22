import React from "react";
import bannerimg from "../../../public/images/Rectangle 1.png";

export default function Banner() {
  return (
    <div>
      <div
        className="hero min-h-[600px] rounded-3xl mt-10"
        style={{ backgroundImage: `url(${bannerimg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-7xl">
            <h1 className="mb-5 text-3xl lg:text-6xl font-normal lg:font-bold text-white leading-normal lg:leading-[76px]">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="mb-5 text-lg lg:text-2xl my-10 text-white">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="mt-11 flex justify-center">
              <button className="btn btn-accent text-[#150B2B] rounded-[50px] px-5 lg:px-9 py-4">
                Explore Now
              </button>
              <button className="btn btn-outline btn-ghost ml-4 text-white rounded-[50px] px:3 lg:px-7 py-4 hover:text-[#fff]">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
