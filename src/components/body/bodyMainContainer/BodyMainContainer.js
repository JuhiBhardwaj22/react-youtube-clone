import React from "react";
import { ButtonFilterList } from "./ButtonFilterList";
import { VideoContainer } from "./VideoContainer";

export const BodyMainContainer = () => {
  return (
    <div className="px-3 col-span-11">
      <ButtonFilterList />
      <VideoContainer />
    </div>
  );
};
