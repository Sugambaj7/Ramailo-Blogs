import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
    width: 120,
  },
  {
    field: "content",
    headerName: "Content",
    width: 120,
  },
  {
    field: "image",
    headerName: "Image",
    width: 120,
  },
  {
    field: "author",
    headerName: "Author",
    width: 120,
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
          onClick={() => console.log("Button clicked")}
        >
          Delete
        </Button>
      </div>
    ),
  },

  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  // },
];

const rows = [
  {
    id: 1,
    title: "Title",
    category: "Category",
    summary: "Summary",
    content: "Content",
    image: "Image",
    author: "Author",
  },
];

export default function BlogsComponent() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className="m-4">
        <Typography variant="h5">List of Blogs</Typography>
      </div>
      <DataGrid
        sx={{ margin: 1 }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
