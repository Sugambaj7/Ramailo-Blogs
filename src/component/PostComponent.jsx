import { useContext, React } from "react";
import car from "../images/car.jpg";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export const Post = ({
  _id,
  authorid,
  title,
  summary,
  postimage,
  content,
  createdAt,
}) => {
  return (
    <div className="post">
      <div className="image mt-0 ">
        <Link to={`/post/${_id}`}>
          <img
            src={"http://localhost:4001/uploads/postimages/" + postimage}
            alt="image"
            srcSet=""
          />
        </Link>
      </div>
      <div className="texts mt-0 ml-3 ">
        <div>
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
        </div>
        <p className="info">
          <a href="" className="author">
            {authorid.name}
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};
