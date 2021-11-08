import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import colors from "../../../colors";
import OverviewItem from "./OverviewItem";
import ScheduleTour from "../ScheduleTour/ScheduleTour";

import correct1 from "../../../assets/icons/correct1.svg";
import location from "../../../assets/icons/bxs-map3.svg";
import share from "../../../assets/icons/bx-share-alt1.svg";
import heart from "../../../assets/icons/love-it1.svg";
import question from "../../../assets/icons/question-circle4.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 2px solid black;
`;
const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 2px solid red;
`;

const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 35px;
  border: 2px solid ${colors.primaryGreen};
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
  justify-content: flex-start;
  align-items: center;
  color: ${colors.textColor};
  font-size: 14px;
  height: 50px;
`;

const WrapperRight = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  width: 50%;
  padding: 10px;
  margin: 5px;
  border: 2px solid hotpink;
`;

const AmenitiesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* width: 50%; */
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
          <h2>
            Logan, Twin Eagles Point
            <span>
              <Image
                src={correct1}
                height={24}
                width={24}
                style={{ marginLeft: "5px" }}
              />
            </span>
          </h2>
          <ContactAgent>Contact Agent</ContactAgent>
        </TopWrapper>
        <ContactActions>
          <p style={{ margin: "0px" }}>
            <span>
              <Image
                src={location}
                height={24}
                width={24}
                style={{ margin: "10px" }}
              />
            </span>
            Granger,IA 50109
          </p>
          <p style={{ margin: "15px" }}>
            <span>
              <Image
                src={heart}
                height={24}
                width={24}
                style={{ marginRight: "10px" }}
              />
            </span>
            Save
          </p>
          <p style={{ margin: "15px" }}>
            <span>
              <Image
                src={share}
                height={24}
                width={24}
                style={{ marginRight: "10px" }}
              />
            </span>
            Share
          </p>
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
              marginLeft: "10px",
            }}
          >
            $345,900
          </span>
        </strong>
        <p>
          EMI. payment: $2,145/mo
          <span>
            <Image
              src={question}
              height={24}
              width={24}
              style={{ marginLeft: "10px" }}
            />
          </span>
        </p>
      </WrapperLeft>
      <WrapperRight>
        <ScheduleTour />
      </WrapperRight>
    </Wrapper>
  );
}

export default Overview;
