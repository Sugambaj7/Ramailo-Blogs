import React, { useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

export const DeletePost = () => {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  function denyDelete() {
    navigate(`/`);
  }

  async function deletePost() {
    const data = { id };
    const response = await fetch("http://localhost:4001/post/test", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  if (redirect) {
    alert("Blog has been successfully deleted!!!");
    return <Navigate to="/" />;
  }
  return (
    <div className="delete">
      <p>Are you sure?</p>
      <button className="button-yes" onClick={deletePost}>
        Yes
      </button>
      <button className="button-no" onClick={denyDelete}>
        No
      </button>
    </div>
  );
};
