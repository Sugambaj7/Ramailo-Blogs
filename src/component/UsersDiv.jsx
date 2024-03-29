import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";


export default function UsersDiv() {
  const theme = useTheme();

  function logout() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.clear();
    setUserInfo(null);
  }

  return (
    <div className="flex flex-col items-center">
      <PersonIcon color="primary" style={{ fontSize: 50 }} />
      <Typography color="primary" sx={{marginTop:"10px",fontSize:"20px"}}>
        No. of Users
      </Typography>
    </div>
  );
}
