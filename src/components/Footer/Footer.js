import React from "react";
import { ListGroupItem } from "react-bootstrap";
import styled from "styled-components";

const FooterList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  padding: 20px;
`;

const StyledListGroup = styled.ul`
  border: none;
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: ; */
  /* align-items: center; */
`;

function Footer() {
  return (
    <>
      <FooterList>
        <StyledListGroup className="borderless">
          <h4>Support</h4>
          <p>Ebooks</p>
          <p>Presentation</p>
          <p>Dashboard</p>
          <p>Management</p>
          <p>Privacy Policy</p>
        </StyledListGroup>
        <StyledListGroup className="borderless">
          <h4>Team</h4>
          <p>Ebooks</p>
          <p>Presentation</p>
          <p>Dashboard</p>
          <p>Management</p>
          <p>Privacy Policy</p>
        </StyledListGroup>
        <StyledListGroup className="borderless">
          <h4>Product</h4>
          <p>Ebooks</p>
          <p>Presentation</p>
          <p>Dashboard</p>
          <p>Management</p>
          <p>Privacy Policy</p>
        </StyledListGroup>
        <StyledListGroup className="borderless">
          <h4>Address</h4>
          <p>Counter</p>
          <p>PostCenter</p>
          <p>facebook</p>
          <p>instagram</p>
          <p>twitter</p>
        </StyledListGroup>
      </FooterList>
    </>
  );
}

export default Footer;
