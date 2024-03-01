import React from "react";
import car from "../images/car.jpg";
import { formatISO9075 } from "date-fns";

export const Post = ({ title, summary, cover, content, createdAt, author }) => {
  return (
    <div className="post">
      <div className="image bg-red-500">
        <img
          src={"http://localhost:4001/" + cover}
          alt="lamborghini"
          srcSet=""
        />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a href="" className="author">
            {author.username}
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};
