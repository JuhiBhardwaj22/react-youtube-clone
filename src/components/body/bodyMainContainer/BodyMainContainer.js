import React from "react";
import { ButtonFilterList } from "./ButtonFilterList";
import { VideoContainer } from "./VideoContainer";

export const BodyMainContainer = () => {
  return (
    <div>
      <ButtonFilterList />
      <VideoContainer />
    </div>
  );
};
