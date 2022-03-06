/**********************
 * The Main Application *
 - Contains SideTabBar + Component
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WhiteCanvas from "../Components2/whitecanvas";
import SideBar from "../Components2/sidebar";
import Home from "../Components2/HomeComponents/ParentCampaign";

export default function HomePage() {
  const [isScreen, setIsScreen] = useState("Home");

  return (
    <Wrapper>
      <SubWrapper>
        <SideBar></SideBar>
      </SubWrapper>
      <AlignDiv>
        <WhiteCanvas></WhiteCanvas>
        <Home />
      </AlignDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f7fbff;
  min-height: 100vh;
  min-width: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const SubWrapper = styled.div`
  position: absolute;
  left: 0vw;
  top: 2vh;
`;

const AlignDiv = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  position: relative;
`;
