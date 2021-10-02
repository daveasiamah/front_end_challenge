import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import colors from "../../../colors";
import OverviewItem from "./OverviewItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* border: 2px solid black; */
`;
const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  /* border: 2px solid red; */
`;

const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  /* border: 2px solid skyblue; */
`;

const ContactAgent = styled(Button)`
  border-color: ${colors.orange};
  color: ${colors.orange};
  background-color: ${colors.background};
  font-weight: bold;
  width: 187px;
  height: 50px;

  :hover {
    background-color: ${colors.orange};
    color: white;
  }
`;

const ContactActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: ${colors.textColor};
  font-size: 14px;
`;

const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 5px;
`;

const AmenitiesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
`;

const overviewItems = [
  { id: "1", title: "Bedrooms", valueText: "3" },
  { id: "2", title: "Bathrooms", valueText: "3" },
  { id: "3", title: "Balcony", valueText: "2" },
  { id: "4", title: "Servant room", valueText: "1" },
  { id: "5", title: "Furnishng", valueText: "Furnished" },
  { id: "4", title: "Area", valueText: "2130 sqft" },
  { id: "4", title: "Parking", valueText: "2 covered" },
  { id: "4", title: "Floor", valueText: "2/4" },
  { id: "4", title: "Units on floor", valueText: "1" },
  { id: "4", title: "Lift", valueText: "1" },
  { id: "4", title: "Water availability", valueText: "24 hours" },
  { id: "4", title: "Status of electricity", valueText: "No/Rare powercut" },
];

function Overview() {
  return (
    <Wrapper>
      <WrapperLeft>
        <p style={{ color: colors.textColor }}>Reference no:#1065</p>
        <TopWrapper>
          <h2>Logan, Twin Eagles Point</h2>
          <ContactAgent>Contact Agent</ContactAgent>
        </TopWrapper>
        <ContactActions>
          <p style={{ marginRight: "15px" }}>Granger,IA 50109</p>
          <p style={{ marginRight: "15px" }}>Save</p>
          <p style={{ marginRight: "15px" }}>Share</p>
        </ContactActions>
        <AmenitiesWrapper>
          {overviewItems.map((item) => (
            <OverviewItem
              key={item.id}
              title={item.title}
              valueText={item.valueText}
            />
          ))}
        </AmenitiesWrapper>
        <strong
          style={{
            color: colors.orange,
            display: "flex",
            alignItems: "center",
          }}
        >
          Price
          <span
            style={{
              color: colors.black,
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            $345,900
          </span>
        </strong>
      </WrapperLeft>
      <WrapperRight>
        <h4>Contact Form</h4>
      </WrapperRight>
    </Wrapper>
  );
}

export default Overview;
