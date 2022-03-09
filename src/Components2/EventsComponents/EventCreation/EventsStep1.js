import React, { useState, useEffect } from "react";
import styled from "styled-components";
import blackx from "../../../Images2/blackx.svg";
import eventimage1 from "../../../Images2/eventimage1.svg";
import eventimage2 from "../../../Images2/eventimage2.svg";
import urlbutton from "../../../Images2/urlbutton.svg";
import elementsbutton from "../../../Images2/elementsbutton.svg";
import WebElements from "./WebElements";

// first step in creating those custom events

export default function EventsStep1(props) {
  const [show, setShow] = useState(true);
  const [webElementsScreen, setWebElementsScreen] = useState(false);
  const [isParentData2, setIsParentData2] = useState(false);

  useEffect(() => {
    props.sendToParent1(show); // This is the mounting part
  }, [show]);

  useEffect(() => {
    if (isParentData2 == true) {
      console.log("We have liftoff");
      // Will Need to Add Something Here
    }
  }, [isParentData2]);

  return (
    <div>
      {webElementsScreen == true ? (
        <BlueBlur>
          <WebElements
            toChild2={isParentData2}
            sendToParent2={setIsParentData2}
          />
        </BlueBlur>
      ) : (
        <BlueBlur>
          <ModalRectangle>
            <ClickImg src={blackx} onClick={() => setShow(!show)} />
            <LargeVStack>
              <MiddleVStack>
                <LargeBlackText>
                  Create events to track conversions
                </LargeBlackText>
                <MediumGrayText>
                  Events are actions a website visitor takes to achieve a
                  business goal, like viewing content, adding an item to a cart,
                  or making a purchase
                </MediumGrayText>
              </MiddleVStack>
              <PictureHStack>
                <EventIMG src={eventimage1} />
                <EventIMG src={eventimage2} />
              </PictureHStack>
            </LargeVStack>
            <BottomHStack>
              <BottomVStack>
                <SmallBlackText>
                  URL events
                  <SmallGrayText>
                    Track every time someone visits a specific webpage, like a
                    product details page or an order confirmation page.
                  </SmallGrayText>
                </SmallBlackText>
              </BottomVStack>
              <BottomVStack>
                <SmallBlackText>Click events</SmallBlackText>
                <SmallGrayText>
                  Track every time someone clicks on a webpage element, like an
                  add to cart button or a form submission button
                </SmallGrayText>
              </BottomVStack>
            </BottomHStack>
            <BottomButton1 src={urlbutton} />
            <BottomButton2
              src={elementsbutton}
              onClick={() => setWebElementsScreen(!webElementsScreen)}
            />
          </ModalRectangle>
        </BlueBlur>
      )}
    </div>
  );
}

const BottomButton1 = styled.img`
  position: absolute;
  left: 100px;
  top: 555px;
  cursor: pointer;
`;

const BottomButton2 = styled.img`
  position: absolute;
  right: 228px;
  top: 555px;
  cursor: pointer;
`;

const SmallBlackText = styled.div`
  font-size: 16px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
`;

const SmallGrayText = styled.div`
  font-size: 14px;
  color: #666678;
  font-family: "ProximaNovaRegular";
  width: 200px;
`;

const BottomVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BottomHStack = styled.div`
  position: absolute;
  left: 100px;
  bottom: 200px;
  display: flex;
  flex-direction: row;
  gap: 240px;
`;

const LargeVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 110px;
  padding-top: 80px;
`;

const PictureHStack = styled.div`
  position: absolute;
  top: 160px;
  left: 90px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const EventIMG = styled.img``;

const LargeBlackText = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: #252531;
  font-size: 26px;
`;

const MediumGrayText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  color: #9a99a9;
  width: 500px;
  line-height: 19px;
`;

const MiddleVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const ClickImg = styled.img`
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: 20px;
`;

const ModalRectangle = styled.div`
  position: absolute;
  width: 910px;
  height: 685px;
  left: 600px;
  top: 600px;

  background: #ffffff;
  border-radius: 20px;
`;

const BlueBlur = styled.div`
  position: absolute;
  left: 0px;
  bottom: 500px;
  background: rgba(45, 102, 159, 0.7);
  backdrop-filter: blur(20px);
  height: 2000px;
  width: 2000px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 50;
  /* Note: backdrop-filter has minimal browser support */
`;
