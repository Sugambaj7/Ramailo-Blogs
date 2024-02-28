import React from "react";
import car from "../images/car.jpg";

export const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img src={car} alt="lamborghini" srcSet="" />
      </div>
      <div className="texts">
        <h2>
          Exclusive! Lamborghini Urus Hybrid to get over 30 miles of electric
          range
        </h2>
        <p className="info">
          <a href="" className="author">
            Sugam Bajracharya
          </a>
          <time>2024-2-27 12:23</time>
        </p>
        <p className="summary">
          The Lamborghini Urus, the most popular model in the brand’s line-up,
          will soon get a plug-in hybrid powertrain. The Urus Hybrid is said to
          be in its final stages of development and is expected to debut before
          the end of this year.
        </p>
      </div>
    </div>
  );
};
