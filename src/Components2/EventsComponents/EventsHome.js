import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tooling from "./Tooling";
import eventbutton from "../../Images2/eventbutton.svg";
import Filter2 from "../HomeComponents/Filter2";
import WhiteArrow1 from "../../Images2/whitearrow.svg";
import Purchases from "./Purchases";
import Signups from "./Signups";

export default function EventsHome() {
  const [toggleActive, setToggleActive] = useState(false);
  const [filterActive, setFilterActive] = useState(true);
  const [Screen, setScreen] = useState(1);

  useEffect(() => {
    setFilterActive(!filterActive);
  }, [toggleActive]);

  return (
    <div>
      <VStack>
        <HStack>
          {Screen == 1 ? (
            <DarkText>Purchases</DarkText>
          ) : (
            <LightText onClick={() => setScreen(1)}>Purchases</LightText>
          )}
          {Screen == 1 ? (
            <LightText onClick={() => setScreen(2)}>Sign Ups</LightText>
          ) : (
            <DarkText>Sign Ups</DarkText>
          )}
        </HStack>
        <MainLine />
        <LittleLine />
        <HStack2>
          <EventButton src={eventbutton} />
          <Button2>
            <HStack3 onClick={() => setToggleActive(!toggleActive)}>
              <WhiteText>Today</WhiteText>
              <WhiteArrow src={WhiteArrow1} toggleActive={toggleActive} />
            </HStack3>
            {filterActive ? <Filter2 /> : <div></div>}
          </Button2>
        </HStack2>
        {Screen == 1 ? <Purchases /> : <Signups />}
      </VStack>
    </div>
  );
}

const WhiteText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
`;

const HStack3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 10px;
`;

const WhiteArrow = styled.img`
  height: 20px;
  width: 20px;
  transition-property: transform;
  transition-duration: 0.1s;
  cursor: pointer;
  transform: ${(props) =>
    props.toggleActive ? "rotate(180deg)" : "rotate(0deg)"};
`;

const MainLine = styled.div`
  width: 739px;
  height: 3px;
  background: #d7eeff;
  position: absolute;
  left: 464px;
  top: 100px;
`;

const Button2 = styled.div`
  position: absolute;
  width: 167px;
  height: 40px;
  left: 1312px;
  top: 65px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #26a4ff;
  /* Banabo No Hover */

  box-shadow: 2px 5px 100px 5px #ededef;
  border-radius: 20px;
`;

const EventButton = styled.img`
  position: absolute;
  left: 1220px;
  top: 43px;
  cursor: pointer;
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const LittleLine = styled.div`
  width: 84px;
  height: 3.2px;
  background: #1e9efb;
  position: absolute;
  left: 464px;
  top: 100px;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const LightText = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: #9392a6;
  font-size: 16px;
  cursor: pointer;
`;

const DarkText = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: #2f2f2f;
  font-size: 16px;
  cursor: pointer;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  font-size: 16px;
  line-height: 19px;
  color: #2f2f2f;
  position: absolute;
  left: 469px;
  top: 72px;
`;

const Button = styled.div`
  position: absolute;
  width: 109px;
  height: 34px;
  left: 941px;
  top: 369px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* Low */
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 10px;
`;

/*

<div>
      {screen == 1 ? (
        <Button onClick={() => setScreen(2)}>Click Me</Button>
      ) : (
        <Tooling />
      )}
    </div>

*/
