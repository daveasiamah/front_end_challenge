import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

function MainTop(props) {
  return (
    <>
      <Wrapper>{props.children}</Wrapper>
    </>
  );
}

export default MainTop;
