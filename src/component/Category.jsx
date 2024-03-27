import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../component/PostComponent";

export default function Category() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4001/category/${category}`).then((response) => {
      response.json().then((posts) => {
        if (posts.length > 0) {
          setPosts(posts);
        } else {
          setPosts([]);
        }
      });
    });
  }, [category]);

  return (
    <>
      <div className="flex">
        <div>
          {posts.length === 0 ? (
            <div className="mt-10">No posts found in this category !!!</div>
          ) : (
            posts.map((post) => <Post {...post} />)
          )}
        </div>
      </div>
    </>
  );
}
