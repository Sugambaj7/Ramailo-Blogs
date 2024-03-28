import React from "react";
import { Header } from "./HeaderComponent";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export const Layout = () => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      
      <div className="flex justify-between ">
        <div className="sidebar  flex flex-col   ml-1  w-[30vh] h-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Sidebar />
        </div>
        <main className="ml-1 mr-1">
          <Outlet />
        </main>
        <div></div>
      </div>
      <div className="w-44 flex justify-center"></div>
    </>
  );
};
