import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import clickeventcard from "../../../Images2/clickeventcard.svg";
import graytriangle from "../../../Images2/graytrianglenew.svg";
import savebutton from "../../../Images2/savebutton.svg";
import element1hover from "../../../Images2/element1hover.svg";
import element1click from "../../../Images2/element1click.svg";
import element2hover from "../../../Images2/element2hover.svg";
import element2click from "../../../Images2/element2click.svg";

// 1. Need to reach EventsStep1
// 2. Need to reach EventsHome

export default function WebElements(props) {
  const [toggleActive, setToggleActive] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [yesBold, setYesBold] = useState("No");
  const [closeEvents, setCloseEvents] = useState(false);

  /// Closing the Tab
  ///
  ///
  useEffect(() => {
    if (closeEvents == true) {
      props.sendToParent5(true);
      console.log("Pink");
    }
  }, [closeEvents]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  ///
  ///

  ///
  const noRefresh = (event) => {
    event.preventDefault();
  };
  const handleUserInput1 = (e) => {
    setInputValue1(e.target.value);
  };
  const resetInputField1 = () => {
    setInputValue1("");
  };
  ///
  ///
  const [show2, setShow2] = useState(true);
  ///
  ///
  ///
  const [isShown1, setIsShown1] = useState(false);
  const [element1Clicked, setElement1Clicked] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [element2Clicked, setElement2Clicked] = useState(false);
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
      <form onSubmit={noRefresh}>
        <Input1
          placeholder="Ex: Purchase"
          value={inputValue1}
          onChange={handleUserInput1}
        />
      </form>
      <EventNameText>EVENT NAME</EventNameText>
      <TheBlueLine />
      <EventNameText2>TRACK REVENUE</EventNameText2>
      <EventFieldText2 yesBold={yesBold}>{yesBold}</EventFieldText2>
      <TheBlueLine2 />
      <BlueCircle />
      <GrayTriangle
        src={graytriangle}
        onClick={() => setToggleActive(!toggleActive)}
        toggleActive={toggleActive}
      />
      <SaveButton src={savebutton} onClick={() => setCloseEvents(true)} />
      {isShown1 == true ? (
        <div>
          {element1Clicked == false ? (
            <Element1Hover
              src={element1hover}
              onClick={() => setElement1Clicked(true)}
              onMouseEnter={() => setIsShown1(true)}
              onMouseLeave={() => setIsShown1(false)}
            />
          ) : (
            <Element1Clicked
              src={element1click}
              onClick={() => setElement1Clicked(false)}
            />
          )}
        </div>
      ) : (
        <InvisibleWrapper
          onMouseEnter={() => setIsShown1(true)}
          onMouseLeave={() => setIsShown1(false)}
        />
      )}
      {isShown2 == true ? (
        <div>
          {element2Clicked == false ? (
            <Element2Hover
              src={element2hover}
              onClick={() => setElement2Clicked(true)}
              onMouseEnter={() => setIsShown2(true)}
              onMouseLeave={() => setIsShown2(false)}
            />
          ) : (
            <Element2Clicked
              src={element2click}
              onClick={() => setElement2Clicked(false)}
            />
          )}
        </div>
      ) : (
        <InvisibleWrapper2
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}
        />
      )}
      {toggleActive == true ? (
        <MiniRectangle>
          {yesBold == "Yes" ? (
            <VStackSmall onClick={() => setToggleActive(false)}>
              <SmallTextBold onClick={() => setYesBold("Yes")}>
                Yes
              </SmallTextBold>
              <SmallTextRegular onClick={() => setYesBold("No")}>
                No
              </SmallTextRegular>
            </VStackSmall>
          ) : (
            <VStackSmall onClick={() => setToggleActive(false)}>
              <SmallTextRegular onClick={() => setYesBold("Yes")}>
                Yes
              </SmallTextRegular>
              <SmallTextBold onClick={() => setYesBold("No")}>No</SmallTextBold>
            </VStackSmall>
          )}
        </MiniRectangle>
      ) : (
        <div> </div>
      )}
    </div>
  );
}

const EventFieldText2 = styled.div`
  position: absolute;
  right: ${(props) => (props.yesBold == "Yes" ? "250px" : "258px")};
  top: 740px;
  font-size: 18px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
`;

const MiniRectangle = styled.div`
  position: absolute;
  right: 80px;
  top: 770px;
  z-index: 50;
  width: 51px;
  height: 52px;
  background: #ffffff;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 10px;
`;

const VStackSmall = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 10px;
  padding-left: 12px;
`;

const SmallTextRegular = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 15px;
  color: #666678;
  cursor: pointer;
`;

const SmallTextBold = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 15px;
  color: #666678;
  cursor: pointer;
`;

const Input1 = styled.input`
  position: absolute;
  right: -22px;
  top: 673px;
  border: none;
  width: 300px;
  font-size: 16px;
  line-height: 19px;
  font-family: "ProximaNovaRegular";
  background-color: transparent;
  :focus {
    outline: none;
  }
`;

const Element1Hover = styled.img`
  position: absolute;
  left: 730px;
  bottom: 787px;
  z-index: 300px;
  cursor: pointer;
`;

const Element1Clicked = styled.img`
  position: absolute;
  left: 730px;
  bottom: 787px;
  z-index: 300px;
`;

const InvisibleWrapper = styled.div`
  left: 730px;
  bottom: 790px;
  width: 231px;
  height: 72px;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  position: absolute;

  z-index: 300px;
  border-radius: 10px;
`;

const Element2Hover = styled.img`
  position: absolute;
  right: 482px;
  bottom: 1151px;
  z-index: 300px;
  cursor: pointer;
`;

const Element2Clicked = styled.img`
  position: absolute;
  right: 482px;
  bottom: 1151px;
  z-index: 300px;
`;

const InvisibleWrapper2 = styled.div`
  position: absolute;
  right: 482px;
  bottom: 1151px;
  width: 231px;
  height: 72px;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 300px;
  border-radius: 10px;
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
  transition-property: transform;
  transition-duration: 0.1s;
  transform: ${(props) =>
    props.toggleActive ? "rotate(180deg)" : "rotate(0deg)"};
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
