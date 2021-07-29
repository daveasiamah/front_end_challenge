import React from "react";
import styled from "styled-components";
import colors from "../../../colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  margin: 5px;
  background-color: ${colors.background};
`;

const Title = styled.p`
  color: ${colors.textColor};
`;

const ValueText = styled.p`
  color: ${colors.primaryGreen};
`;

function OverviewItem({ title, valueText }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ValueText>
        <strong>{valueText}</strong>
      </ValueText>
    </Wrapper>
  );
}

export default OverviewItem;
