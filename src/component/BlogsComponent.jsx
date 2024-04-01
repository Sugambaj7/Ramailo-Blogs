import { React, useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BlogsComponent() {
  const [posts, setposts] = useState([]);

  const fetchPosts = () => {
    fetch("http://localhost:4001/post").then((response) => {
      response.json().then((posts) => {
        setposts(posts.data);
      });
    });
  };

  const deletepost = (id) => {
    fetch("http://localhost:4001/post/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
        fetchPosts();
        alert(response.message);
      });
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 120 },
    {
      field: "category",
      headerName: "Category",
      width: 120,
    },
    {
      field: "summary",
      headerName: "Summary",
      width: 200,
    },
    {
      field: "content",
      headerName: "Content",
      width: 200,
    },
    {
      field: "image",
      headerName: "Image",
      width: 120,
      renderCell: (params) => (
        <img
          src={"http://localhost:4001/uploads/postimages/" + params.row.image}
          alt="Post"
          width="50"
          height="50"
        />
      ),
    },
    {
      field: "author",
      headerName: "Author",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => (
        <div className="h-2 w-5">
          <Button
            variant="contained"
            color="primary"
            onClick={() => deletepost(params.row.postactualId)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch("http://localhost:4001/post").then((response) => {
      response.json().then((postDatas) => {
        setposts(postDatas.data);
      });
    });
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className="m-4">
        <Typography variant="h5">List of Blogs</Typography>
      </div>
      <DataGrid
        sx={{ margin: 1 }}
        rows={posts.map((post, index) => {
          return {
            postactualId: post._id,
            id: index + 1,
            title: post.title,
            category: post.category,
            summary: post.summary,
            content: post.content,
            image: post.postimage,
            author: post.authorid.name,
          };
        })}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
