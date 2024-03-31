import React, { useEffect, useState } from "react";
import { Post } from "../component/PostComponent";

export const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts.data);
        console.log(posts, "mero posts");
      });
    });
  }, []);

  return (
    <>
      <div className="flex">
        <div>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</div>
      </div>
    </>
  );
};
