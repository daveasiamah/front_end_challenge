import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0 10px 0;
  border: 0 red solid;
`;
function Affordability() {
  return (
    <Wrapper>
      <h4>
        <strong>Calculate your monthly mortgage paym,ents</strong>
        <p>Your est. payment:$2,441/month</p>
      </h4>
    </Wrapper>
  );
}

export default Affordability;
