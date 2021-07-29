import React from "react";
import { Image } from "react-bootstrap";
import banner from "../../../assets/images/banner.png";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5px;
  margin: 10px;
`;

function Banner() {
  return (
    <Wrapper>
      <Image src={banner} width="100%" height="673px" alt="banner" />
    </Wrapper>
  );
}

export default Banner;
