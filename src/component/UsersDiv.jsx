import { React, useState, useEffect } from "react";
import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function UsersDiv() {
  const [numUsers, setnumUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/user").then((response) => {
      response.json().then((usersDetails) => {
        setnumUsers(usersDetails.totalCount);
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <PersonIcon color="primary" style={{ fontSize: 50 }} />
      <Typography color="primary" sx={{ marginTop: "10px", fontSize: "20px" }}>
        No. of Users
      </Typography>
      <div>
        <Typography color="initial" sx={{ fontSize: "30px", marginTop:"20px" }}>
          {numUsers? numUsers : 0}
        </Typography>
      </div>
    </div>
  );
}
