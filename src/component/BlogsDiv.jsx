import * as React from "react";
import Typography from "@mui/material/Typography";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <div className="flex flex-col items-center">
      <TextSnippetIcon color="primary" style={{ fontSize: 50 }} />
      <Typography color="primary" sx={{ marginTop: "10px", fontSize: "20px" }}>
        No. of Blogs
      </Typography>
    </div>
  );
}
