import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

function HomeDetailsItem(props) {
  return (
    <StyledItem>
      <Image src={props.image} width={48} height={48} />
      <p>{props.text}</p>
    </StyledItem>
  );
}

export default HomeDetailsItem;
