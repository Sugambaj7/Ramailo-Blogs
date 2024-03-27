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
  const [filename, setFilename] = useState("");
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4001/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
        setFilename(postInfo.postimage);
      });
    });
  }, []);
  async function updatePost(event) {
    event.preventDefault();

    const originalname = files[0].name;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    console.log(ext);
    console.log(files[0]);

    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("id", id);

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
          const response = await fetch("http://localhost:4001/post", {
            method: "PUT",
            body: data,
            credentials: "include",
          });
          if (response.ok) {
            setRedirect(true);
          } else {
            alert("Error in updating post");
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

    // if (files?.[0]) {
    //   data.set("file", files?.[0]);
    // }
    // data.set("file", files?.[0]);
    // const response = await fetch("http://localhost:4001/post", {
    //   method: "PUT",
    //   body: data,
    //   credentials: "include",
    // });
    // if (response.ok) {
    //   setRedirect(true);
    // }
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
          required
          value={title}
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
        <div className="pt-3 pb-3 mb-1 pl-3 border ">
          <label>Selected Image: {filename}</label>
        </div>
        <input
          type="file"
          required
          onChange={(event) => setFiles(event.target.files)}
          className="p-2 border rounded mb-1"
        />
        <Editor onChange={setContent} value={content} />
        <button style={{ marginTop: "5px" }}>Update Post</button>
      </div>
    </form>
  );
};
