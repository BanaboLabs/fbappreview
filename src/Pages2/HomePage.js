/**********************
 * The Main Application *
 - Contains SideTabBar + Component
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WhiteCanvas from "../Components2/whitecanvas";
import SideBar from "../Components2/sidebar";
import Home from "../Components2/HomeComponents/ParentHome";
import Events from "../Components2/EventsComponents/EventsHome";
import Campaigns from "../Components2/CampaignComponents/CampaignsHome";

export default function HomePage(props) {
  const [isScreen, setIsScreen] = useState("Home");
  const [calendarActive, setCalendarActive] = useState(false);
  const [isGrandpaData1, setIsGrandpaData1] = useState(false);
  const [screen1, setScreen1] = useState(true);
  const [isParentData2, setIsParentData2] = useState(false);
  const [isParentData, setIsParentData] = useState("Link");

  useEffect(() => {
    console.log("yessir");
  }, [isParentData2]);

  useEffect(() => {
    console.log("pokemon");
    console.log(isParentData);
  }, [isParentData]);

  return (
    <Wrapper>
      <SubWrapper>
        <SideBar toChild={isParentData} sendToParent={setIsParentData} />
      </SubWrapper>
      <AlignDiv>
        <WhiteCanvas></WhiteCanvas>
        <div>
          {isParentData == "Home" ? (
            <Home />
          ) : isParentData == "Events" ? (
            <Events />
          ) : (
            <Campaigns />
          )}
        </div>
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
