import { React, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function UsersComponent() {
  const [userDatas, setuserDatas] = useState([]);

  const fetchUsers = () => {
    fetch("http://localhost:4001/user").then((response) => {
      response.json().then((users) => {
        setuserDatas(users.data);
      });
    });
  };

  const deleteuser = (id) => {
    fetch("http://localhost:4001/user/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
        alert(response.message);
        fetchUsers();
      });
    });
  };
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
            onClick={() => deleteuser(params.row.useractualId)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch("http://localhost:4001/user").then((response) => {
      response.json().then((users) => {
        setuserDatas(users.data);
      });
    });
  }, []);

  return (
    <>
      <div className="m-4">
        <Typography variant="h5">List of Users</Typography>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={{ margin: 1 }}
          rows={userDatas.map((userData, index) => {
            return {
              useractualId: userData._id,
              id: index + 1,
              name: userData.name,
              mobile: userData.mobile,
              email: userData.email,
            };
          })}
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
