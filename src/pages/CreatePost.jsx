import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { Editor } from "../component/Editor";
import { UserContext } from "../UserContext";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export const CreatePost = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function CreatePost(event) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    event.preventDefault();
    console.log(files);
    const response = await fetch("http://localhost:4001/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    } else {
      alert("You have to provide all the fields!!!");
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }
  if (userInfo == null) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <form action="" className="flex flex-col space-y-4" onSubmit={CreatePost}>
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
          <button style={{ marginTop: "5px" }}>Create Post</button>
        </div>
      </form>
    </>
  );
};
