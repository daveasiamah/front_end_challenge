import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

function MainContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default MainContainer;
