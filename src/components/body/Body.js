import React from "react";
import Sidebar from "./sideBar/Sidebar";
import { BodyMainContainer } from "./bodyMainContainer/BodyMainContainer";
import { Outlet } from "react-router";

function Body() {
  return (
    <div className="grid grid-flow-col grid-cols-[225px_minmax(900px,_1fr)_100px] ">
      <Sidebar />
      <Outlet/>
    </div>
  );
}

export default Body;
