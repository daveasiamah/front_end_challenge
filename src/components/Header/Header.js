import React from "react";
import SearchLocation from "../containers/Search/SearchLocation";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import menuIcon from "../../assets/icons/menu-left-2-icon.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 25%;
`;

function Header() {
  return (
    <Wrapper>
      <SearchLocation />
      <RightWrapper>
        <p>Sell your properties</p>
        <Image src={menuIcon} width={24} height={24} />
      </RightWrapper>
    </Wrapper>
  );
}

export default Header;
