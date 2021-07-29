import React from "react";
import { Container, Navbar, Nav, Breadcrumb } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Nav>
          <StyledContainer>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Listing</Breadcrumb.Item>
              <Breadcrumb.Item>Single Page</Breadcrumb.Item>
            </Breadcrumb>
          </StyledContainer>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;
