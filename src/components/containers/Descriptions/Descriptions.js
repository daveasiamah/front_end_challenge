import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;
`;

function Descriptions() {
  return (
    <Wrapper>
      <h4>Descriptions</h4>
      <p>
        Welcome to Dynasty's Logan floorplan! This spacious home offers 2,661
        square feet to 3,396 square feet of living space. The Logan foyer opens
        to a home office in the front of the home. The kitchen overlooks the
        back yard with rear facing window with an adjacent dinette that leads
        into the family room...<strong>Read more</strong>
      </p>
    </Wrapper>
  );
}

export default Descriptions;
