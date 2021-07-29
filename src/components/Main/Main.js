import React from "react";
import styled from "styled-components";

import Banner from "../containers/Banner/Banner";
import Descriptions from "../containers/Descriptions/Descriptions";
import HomeDetails from "../containers/HomeDetails/HomeDetails";
import HomeOwner from "../containers/HomeOwner/HomeOwner";
import Navigation from "../containers/Navigation/Navigation";
import SimilarProperty from "../containers/SimilarProperty/SimilarProperty";
import Overview from "../containers/Overview/Overview";

const Wrapper = styled.div`
  margin-top: 20px;
`;

function Main() {
  return (
    <Wrapper>
      <Navigation />
      <Banner />
      <Overview />
      <Descriptions />
      <HomeDetails />
      <SimilarProperty />
      <HomeOwner />
    </Wrapper>
  );
}

export default Main;
