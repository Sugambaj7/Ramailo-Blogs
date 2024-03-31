import { React, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export default function BlogsDiv() {
  const [blogNumber, setblogNumber] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/post").then((response) => {
      response.json().then((blogsDetails) => {
        setblogNumber(blogsDetails.totalCount);
      });
    });
  }, []);
  return (
    <div className="flex flex-col items-center">
      <TextSnippetIcon color="primary" style={{ fontSize: 50 }} />
      <Typography color="primary" sx={{ marginTop: "10px", fontSize: "20px" }}>
        No. of Blogs
      </Typography>
      <div>
        <Typography
          color="initial"
          sx={{ fontSize: "30px", marginTop: "20px" }}
        >
          {blogNumber ? blogNumber : 0}
        </Typography>
      </div>
    </div>
  );
}
