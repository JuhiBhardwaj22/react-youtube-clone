import React from "react";
import Sidebar from "./sideBar/Sidebar";
import { BodyMainContainer } from "./bodyMainContainer/BodyMainContainer";

function Body() {
  return (
    <div className="flex">
      <Sidebar />
      <BodyMainContainer />
    </div>
  );
}

export default Body;
