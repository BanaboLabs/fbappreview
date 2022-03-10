import React, { useState, useEffect } from "react";
import styled from "styled-components";
import blackx from "../../../Images2/blackx.svg";
import eventimage1 from "../../../Images2/eventimage1.svg";
import eventimage2 from "../../../Images2/eventimage2.svg";
import urlbutton from "../../../Images2/urlbutton.svg";
import elementsbutton from "../../../Images2/elementsbutton.svg";
import WebElements from "./WebElements";
import graybackarrow from "../../../Images2/graybackarrow.svg";
import clickeventcard2 from "../../../Images2/clickeventcard2.svg";
import graytriangle from "../../../Images2/graytrianglenew.svg";
import savebutton from "../../../Images2/savebutton.svg";

// first step in creating those custom events

export default function EventsStep1(props) {
  const [show, setShow] = useState(true);
  const [webElementsScreen, setWebElementsScreen] = useState(false);
  const [urlEventsScreen, setUrlEventsScreen] = useState(false);
  const [isParentData2, setIsParentData2] = useState(false);
  const [element1Clicked, setElement1Clicked] = useState(false);
  const [number, setNumber] = useState(1);
  const [isParentData5, setIsParentData5] = useState(false);

  ///
  /// Connects WebElements to main
  useEffect(() => {
    props.sendToParent6(isParentData5); // This is the mounting part
  }, [isParentData5]);
  ///
  ///
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
            toChild5={isParentData5}
            sendToParent5={setIsParentData5}
          />
        </BlueBlur>
      ) : (
        <BlueBlur>
          <ModalRectangle>
            <div>
              {urlEventsScreen == false ? (
                <div>
                  <ClickImg src={blackx} onClick={() => setShow(!show)} />
                  <LargeVStack>
                    <MiddleVStack>
                      <LargeBlackText>
                        Create events to track conversions
                      </LargeBlackText>
                      <MediumGrayText>
                        Events are actions a website visitor takes to achieve a
                        business goal, like viewing content, adding an item to a
                        cart, or making a purchase
                      </MediumGrayText>
                    </MiddleVStack>
                    <PictureHStack>
                      <EventIMG src={eventimage1} />
                      <EventIMG src={eventimage2} />
                    </PictureHStack>
                  </LargeVStack>
                  <BottomHStack>
                    <MajorStack1>
                      <VStack1>
                        <SmallBlackText>URL events</SmallBlackText>
                        <SmallGrayText>
                          Track every time someone visits a specific webpage,
                          like a product details page or an order confirmation
                          page.
                        </SmallGrayText>
                      </VStack1>
                    </MajorStack1>
                    <MajorStack2>
                      <VStack1>
                        <SmallBlackText>Click events</SmallBlackText>
                        <SmallGrayText>
                          Track every time someone clicks on a webpage element,
                          like an add to cart button or a form submission button
                        </SmallGrayText>
                      </VStack1>
                    </MajorStack2>
                  </BottomHStack>
                  <BottomButton1
                    src={urlbutton}
                    onClick={() => setUrlEventsScreen(!urlEventsScreen)}
                  />
                  <BottomButton2
                    src={elementsbutton}
                    onClick={() => setWebElementsScreen(!webElementsScreen)}
                  />
                </div>
              ) : (
                <div>
                  <ClickImg5
                    src={graybackarrow}
                    onClick={() => setUrlEventsScreen(!urlEventsScreen)}
                  />
                  <LargeVStack>
                    <MiddleVStack>
                      <LargeBlackText>URL Events</LargeBlackText>
                      <MediumGrayText5>
                        The event will be triggered every time a visitor reaches
                        the destination url
                      </MediumGrayText5>
                    </MiddleVStack>
                  </LargeVStack>
                  <ClickEventCard5 src={clickeventcard2} />
                  <TopText5>Enter URL Keywords</TopText5>
                  <EventNameText5>EVENT NAME</EventNameText5>
                  <EventFieldText5>Sign Up</EventFieldText5>
                  <TheBlueLine5 />
                  <EventNameText6>DESTINATION URL 1</EventNameText6>
                  <EventFieldText6>
                    https://nike.com/loyaltyprogram/signup
                  </EventFieldText6>
                  <TheBlueLine6 />
                  <EventNameText7>DESTINATION URL 2</EventNameText7>
                  <EventFieldText7>
                    https://nike.com/loyaltyprogram/confirm
                  </EventFieldText7>
                  <TheBlueLine7 />
                  <SaveButton5
                    src={savebutton}
                    onClick={() => setShow(!show)}
                  />
                </div>
              )}
            </div>
          </ModalRectangle>
        </BlueBlur>
      )}
    </div>
  );
}

const MajorStack1 = styled.div`
  position: absolute;
  left: 10px;
  top: -40px;
`;

const VStack1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MajorStack2 = styled.div`
  position: absolute;
  left: 410px;
  top: -40px;
`;

const ClickEventCard5 = styled.img`
  position: absolute;
  left: 94px;
  top: 160px;
`;

const TopText5 = styled.div`
  position: absolute;
  left: 135px;
  top: 182px;
  width: 200px;
  color: #666678;
  font-size: 18px;
  font-family: "ProximaNovaSemiBold";
`;

const EventNameText5 = styled.div`
  position: absolute;
  left: 135px;
  top: 250px;
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
`;

const EventFieldText5 = styled.div`
  position: absolute;
  left: 135px;
  top: 275px;
  font-size: 18px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
`;

const TheBlueLine5 = styled.div`
  position: absolute;
  width: 330px;
  height: 2px;
  left: 135px;
  top: 297px;
  background: #e4f2ff;
`;

const EventNameText6 = styled.div`
  position: absolute;
  left: 135px;
  top: 330px;
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
`;

const EventFieldText6 = styled.div`
  position: absolute;
  left: 135px;
  top: 352px;
  font-size: 18px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
`;

const TheBlueLine6 = styled.div`
  position: absolute;
  width: 330px;
  height: 2px;
  left: 135px;
  top: 377px;
  background: #e4f2ff;
`;

const EventNameText7 = styled.div`
  position: absolute;
  left: 135px;
  top: 410px;
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
`;

const EventFieldText7 = styled.div`
  position: absolute;
  left: 135px;
  top: 432px;
  font-size: 18px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
`;

const TheBlueLine7 = styled.div`
  position: absolute;
  width: 330px;
  height: 2px;
  left: 135px;
  top: 457px;
  background: #e4f2ff;
`;

const SaveButton5 = styled.img`
  position: absolute;
  left: 118px;
  top: 487px;
  cursor: pointer;
`;

const EventNameText25 = styled.div`
  position: absolute;
  right: 178px;
  top: 720px;
  font-size: 13px;
  color: #9392a6;
  font-family: "ProximaNovaSemiBold";
`;

const EventFieldText25 = styled.div`
  position: absolute;
  right: 256px;
  top: 740px;
  font-size: 18px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
`;

const TheBlueLine25 = styled.div`
  position: absolute;
  width: 200px;
  height: 2px;
  right: 80px;
  top: 760px;
  background: #e4f2ff;
`;

const BlueCircle5 = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  right: 82px;
  top: 736px;
  border-radius: 60px;
  background: #e4f2ff;
  transform: rotate(-179.95deg);
`;

const GrayTriangle5 = styled.img`
  position: absolute;
  right: 87px;
  top: 742px;
  cursor: pointer;
`;

const AbsolutePositioning5 = styled.div`
  position: absolute;
  left: 160px;
  top: 610px;
`;

const RectangleMain5 = styled.div`
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

const RectangleTop5 = styled.div`
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

const URLText5 = styled.div`
  font-size: 14px;
  font-family: "ProximaNovaSemiBold";
  color: #666678;
  padding-top: 11px;
  padding-left: 20px;
`;

//

const ClickImg5 = styled.img`
  cursor: pointer;
  position: absolute;
  right: 880px;
  top: 20px;
`;

const MediumGrayText5 = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  color: #9a99a9;
  width: 600px;
  line-height: 19px;
`;

////////

const BottomButton1 = styled.img`
  position: absolute;
  left: 108px;
  top: 555px;
  cursor: pointer;
`;

const BottomButton2 = styled.img`
  position: absolute;
  right: 224px;
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
  width: 250px;
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
  padding-top: 10px;
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
