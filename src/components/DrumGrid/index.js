import React from "react";

//styles
import { Wrapper, Content } from "./DrumGrid.styles";

const DrumGrid = ({ children }) => {
  return <Wrapper><Content>{children}</Content></Wrapper>;
};

export default DrumGrid;
