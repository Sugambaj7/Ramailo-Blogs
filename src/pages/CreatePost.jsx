import React, { useState, useContext, useEffect } from "react";
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
  const [authorid, setAuthorid] = useState("");
  const [category, setCategory] = useState("");
  const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   const loginUserId = localStorage.getItem("id");
  //   console.log(loginUserId);
  // }, []);
  // console.log(loginUserId);
  // const loginUserId = localStorage.getItem("id");
  // console.log(loginUserId);
  // console.log(userInfo.id, "mero");
  const userId = localStorage.getItem("id");
  // console.log(userId, "localstorage bata ho ni");

  async function CreatePost(event) {
    event.preventDefault();
    const originalname = files[0].name;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];

    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("authorid", userId);

    if (category !== "") {
      data.set("category", category);
      if (content !== "") {
        data.set("content", content);
        if (
          ext === "png" ||
          ext === "PNG" ||
          ext === "JPG" ||
          ext === "jpg" ||
          ext === "jpeg" ||
          ext === "JPEG"
        ) {
          data.set("image", files[0]);

          // console.log(
          //   data.get("image"),
          //   data.get("title"),
          //   data.get("summary"),
          //   data.get("content"),
          //   data.get("authorid")
          // );
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
        } else {
          alert("You have to provide image file!!!");
        }
      } else {
        alert("You have to provide content!!!");
      }
    } else {
      alert("You have to provide category!!!");
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
            required
            onChange={(event) => setTitle(event.target.value)}
            placeholder={"Title"}
            className="p-2 border rounded mb-1"
          />

         
          <select
            className="border p-2 mb-1"
            id="blogs"
            name="blogs_category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Politics">Politics</option>
            <option value="Science & Technology">Science & Technology</option>
            <option value="Celebrities">Celebrities</option>
            <option value="Luxury">Luxury</option>
            <option value="Comedy">Comedy</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="summary"
            required
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            placeholder={"Summary"}
            className="p-2 border rounded mb-1"
          />
          <input
            type="file"
            onChange={(event) => setFiles(event.target.files)}
            required
            className="p-2 border rounded mb-1"
          />
          <Editor onChange={setContent} value={content} />
          <button style={{ marginTop: "5px" }}>Create Post</button>
        </div>
      </form>
    </>
  );
};
