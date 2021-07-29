import React from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import colors from "../../../colors";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  height: 200px;
  background-color: ${colors.background};
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
`;

function HomeOwner() {
  return (
    <StyledContainer>
      <h4>Are you a home owner</h4>
      <Form>
        <Form.Group className="inline">
          <FormWrapper>
            <Form.Control
              type="email"
              placeholder="Enter email address"
            ></Form.Control>
            <Button className="btn btn-success" style={{ width: "150px" }}>
              Get Listed
            </Button>
          </FormWrapper>
        </Form.Group>
      </Form>
    </StyledContainer>
  );
}

export default HomeOwner;
