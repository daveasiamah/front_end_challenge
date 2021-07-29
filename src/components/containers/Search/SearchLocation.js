import React from "react";
import { Button, Form, FormControl, Image, InputGroup } from "react-bootstrap";
import styled from "styled-components";
import colors from "../../../colors";
import search_icon from "../../../assets/icons/search_icon.svg";

const Wrapper = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const SearchButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background-color: ${colors.primaryGreen};
`;

function SearchLocation() {
  return (
    <Wrapper>
      <InputGroup className="mb-3">
        <FormControl placeholder="Add More" />
        <SearchButton>
          <Image
            id="button-addon2"
            src={search_icon}
            alt="search icon"
            style={{ width: "24px", height: "24px" }}
          />
        </SearchButton>
      </InputGroup>
    </Wrapper>
  );
}

export default SearchLocation;
