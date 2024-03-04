import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { Editor } from "../component/Editor";
import { useParams, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4001/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
      });
    });
  }, []);
  async function updatePost(event) {
    event.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    data.set("file", files?.[0]);
    const response = await fetch("http://localhost:4001/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }
  if (userInfo == null) {
    return <Navigate to="/" />;
  }

  return (
    <form action="" className="flex flex-col space-y-4" onSubmit={updatePost}>
      <div className="flex flex-col">
        <input
          type="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder={"Title"}
          className="p-2 border rounded mb-1"
        />
        <input
          type="summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          placeholder={"Summary"}
          className="p-2 border rounded mb-1"
        />
        <input
          type="file"
          onChange={(event) => setFiles(event.target.files)}
          className="p-2 border rounded mb-1"
        />

        <Editor onChange={setContent} value={content} />
        <button style={{ marginTop: "5px" }}>Update Post</button>
      </div>
    </form>
  );
};
