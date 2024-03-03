import { formatISO9075 } from "date-fns";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:4001/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";
  return (
    <div className="post-page">
      <div>
        <h1 className="text-center mt-3 mr-0 mb-1 ">{postInfo.title}</h1>
        <time className="text-center block text-xs text-customgrey">
          <p>{formatISO9075(new Date(postInfo.createdAt))}</p>
        </time>
        <div className="author mb-3">
          <p className="text-center">By: @{postInfo.author.username}</p>
        </div>
      </div>
      <div className="image mb-3">
        <img src={`http://localhost:4001/${postInfo.cover}`} alt="" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
};
