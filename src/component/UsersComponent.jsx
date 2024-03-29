import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  {
    field: "mobile",
    headerName: "Mobile",
    width: 120,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
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
    name: "Sugam Bajracharya",
    mobile: 986745367,
    email: "sugam123@gmail.com",
  },
];

export default function UsersComponent() {
  return (
    <>
      <div className="m-4">
        <Typography variant="h5">List of Users</Typography>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={{ margin: 1}} 
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
    </>
  );
}
