import React from "react";
import { ListGroup } from "react-bootstrap";
import HomeDetailsItem from "../../HomeDetailsItem";

function HomeDetails() {
  return (
    <div>
      <h4>Home Details for Logan, Twin Eagles Point</h4>
      <ListGroup className="borderless">
        <ListGroup.Item>
          {/* <HomeDetailsItem image={ItemImage} /> */}
        </ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default HomeDetails;
