import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import clickeventcard from "../../../Images2/clickeventcard.svg";
import graytriangle from "../../../Images2/graytrianglenew.svg";
import savebutton from "../../../Images2/savebutton.svg";
import element1hover from "../../../Images2/element1hover.svg";
import element1click from "../../../Images2/element1click.svg";

export default function WebElements(props) {
  const [show2, setShow2] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const [element1Clicked, setElement1Clicked] = useState(false);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    if (number === 3) {
      props.sendToParent2(show2); // This is the mounting part
    }
  }, [number]);

  return (
    <div>
      <RectangleTop>
        <URLText>https://www.banabo.io</URLText>
      </RectangleTop>
      <RectangleMain></RectangleMain>
      <AbsolutePositioning>
        <Iframe
          url="https://www.banabo.io/"
          width="1450px"
          height="824px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          overflow="scroll"
        ></Iframe>
      </AbsolutePositioning>
      <ClickEventCard src={clickeventcard} />
      <TopText>Add Web Element Details</TopText>
      <EventNameText>EVENT NAME</EventNameText>
      <EventFieldText>Purchase</EventFieldText>
      <TheBlueLine />
      <EventNameText2>TRACK REVENUE</EventNameText2>
      <EventFieldText2>No</EventFieldText2>
      <TheBlueLine2 />
      <BlueCircle />
      <GrayTriangle src={graytriangle} />
      <SaveButton src={savebutton} onClick={() => setNumber(3)} />
      {isShown == true ? (
        <div>
          {element1Clicked == false ? (
            <Element1Hover
              src={element1hover}
              onClick={() => setElement1Clicked(true)}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            />
          ) : (
            <Element1Clicked src={element1click} />
          )}
        </div>
      ) : (
        <InvisibleWrapper
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
      )}
    </div>
  );
}

const InvisibleWrapper = styled.div`
  width: 231px;
  height: 72px;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  position: absolute;
  left: 730px;
  bottom: 790px;
  z-index: 300px;
  border-radius: 10px;
`;

const Element1Hover = styled.img`
  position: absolute;
  left: 730px;
  bottom: 790px;
  z-index: 300px;
  cursor: pointer;
`;

const Element1Clicked = styled.img`
  position: absolute;
  left: 730px;
  bottom: 790px;
  z-index: 300px;
`;

const ClickEventCard = styled.img`
  position: absolute;
  right: 22px;
  top: 546px;
  width: 16%;
  height: 16%;
`;

const TopText = styled.div`
  position: absolute;
  right: 12px;
  top: 597px;
  width: 15%;
  color: #666678;
  font-size: 18px;
  font-family: "ProximaNovaSemiBold";
`;

const EventNameText = styled.div`
  position: absolute;
  right: 200px;
  top: 650px;
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
`;

const EventFieldText = styled.div`
  position: absolute;
  right: 206px;
  top: 673px;
  font-size: 18px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
`;

const TheBlueLine = styled.div`
  position: absolute;
  width: 200px;
  height: 2px;
  right: 80px;
  top: 694px;
  background: #e4f2ff;
`;

const EventNameText2 = styled.div`
  position: absolute;
  right: 178px;
  top: 720px;
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
`;

const EventFieldText2 = styled.div`
  position: absolute;
  right: 256px;
  top: 740px;
  font-size: 18px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
`;

const TheBlueLine2 = styled.div`
  position: absolute;
  width: 200px;
  height: 2px;
  right: 80px;
  top: 760px;
  background: #e4f2ff;
`;

const BlueCircle = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  right: 82px;
  top: 736px;
  border-radius: 60px;
  background: #e4f2ff;
  transform: rotate(-179.95deg);
`;

const GrayTriangle = styled.img`
  position: absolute;
  right: 87px;
  top: 742px;
  cursor: pointer;
`;

const SaveButton = styled.img`
  position: absolute;
  right: 150px;
  top: 770px;
  cursor: pointer;
`;

const AbsolutePositioning = styled.div`
  position: absolute;
  left: 160px;
  top: 610px;
`;

const RectangleMain = styled.div`
  position: absolute;
  width: 1496px;
  height: 880px;
  left: 140px;
  top: 580px;

  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
  border-radius: 10px;
`;

const RectangleTop = styled.div`
  position: absolute;
  width: 184px;
  height: 36px;
  left: 140px;
  top: 560px;
  z-index: 10;
  background: #ffffff;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
`;

const URLText = styled.div`
  font-size: 14px;
  font-family: "ProximaNovaSemiBold";
  color: #666678;
  padding-top: 11px;
  padding-left: 20px;
`;
