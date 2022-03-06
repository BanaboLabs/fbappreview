import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GrayTriangle from "../../Images2/graytriangle.svg";
import minus from "../../Images2/minus.svg";
import plus from "../../Images2/plus.svg";

export default function SelectCardTopLeft() {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <SelectCard toggleActive={toggleActive}>
      <VStack>
        <HStack>
          <GrayText2>Here’s some quick stats</GrayText2>
          <BlueCircle onClick={() => setToggleActive(!toggleActive)}>
            <InsideWrapperTop>
              <IMG2 src={GrayTriangle} toggleActive={toggleActive} />
            </InsideWrapperTop>
          </BlueCircle>
        </HStack>
        <Line />
        {toggleActive == false ? (
          <VStack>
            <HStack2>
              <GrayChoices>Visitors Currently on Site</GrayChoices>
              <BlueChoices>61</BlueChoices>
            </HStack2>
            <Line />
            <HStack2>
              <GrayChoices>New Visitors Today</GrayChoices>
              <BlueChoices>97</BlueChoices>
            </HStack2>
            <Line />
            <HStack2>
              <GrayChoices>Repeat Visitors Today</GrayChoices>
              <BlueChoices>489</BlueChoices>
            </HStack2>
            <Line />
          </VStack>
        ) : (
          <VStack>
            <HStack2>
              <GrayChoices>Visitors Currently on Site</GrayChoices>
              <MPIMG src={minus} />
            </HStack2>
            <HStack2>
              <GrayChoices>New Visitors Today</GrayChoices>
              <MPIMG src={minus} />
            </HStack2>
            <HStack2>
              <GrayChoices>Repeat Visitors Today</GrayChoices>
              <MPIMG src={minus} />
            </HStack2>
            <HStack2>
              <GrayChoices>Unique Visitors Today</GrayChoices>
              <MPIMG src={plus} />
            </HStack2>
            <HStack2>
              <GrayChoices>Sessions Today</GrayChoices>
              <MPIMG src={plus} />
            </HStack2>
            <HStack2>
              <GrayChoices>Bounce Rate Today</GrayChoices>
              <MPIMG src={plus} />
            </HStack2>
          </VStack>
        )}
      </VStack>
    </SelectCard>
  );
}

// 1. If the Toggle is clicked on, open the rest of the stats

const MPIMG = styled.img`
  width: 10%;
  height: 10%;
  cursor: pointer;
`;

const SelectCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: ${(props) => (props.toggleActive ? "300" : "182")}px;
  background: #ffffff;
  /* Low */
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 10px;
`;

const GrayText2 = styled.div`
  width: 190px;
  height: 19px;
  font-family: "ProximaNovaSemibold";
  font-size: 16px;
  color: #666678;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BlueCircle = styled.div`
  border-radius: 20px;
  width: 30px;
  height: 30px;
  background: #e4f2ff;
  cursor: pointer;
`;

const InsideWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 12px;
`;

const Line = styled.div`
  width: 240px;
  height: 2px;
  background: #e4f2ff;
`;

const GrayChoices = styled.div`
  font-size: 13px;
  font-family: "ProximaNovaSemibold";
  color: #9a99a9;
`;

const BlueChoices = styled.div`
  font-size: 13px;
  font-family: "ProximaNovaSemibold";
  color: #24a3ff;
`;

const IMG2 = styled.img`
  width: 18px;
  height: 8px;
  transition-property: transform;
  transition-duration: 0.1s;
  transform: ${(props) =>
    props.toggleActive ? "rotate(180deg)" : "rotate(0deg)"};
`;
