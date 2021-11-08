import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function InfoForm() {
  const [key, setKey] = useState("info");
  return (
    <Tabs
      id="schedule-tour"
      defaultActiveKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="tour" title="Schedule A Tour">
        <p>Schedule A Tour</p>
      </Tab>
      <Tab eventKey="info" title="Request Info">
        <p>Request Info</p>
      </Tab>
    </Tabs>
  );
}

export default InfoForm;
