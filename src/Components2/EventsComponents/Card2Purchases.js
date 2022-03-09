import React, { useState, useEffect } from "react";
import styled from "styled-components";
import blacksimplearrow from "../../Images2/blacksimplearrow.svg";
import purchasesdata1 from "../../Images2/PurchasesData1.svg";
import purchasesdata2 from "../../Images2/PurchasesData2.svg";
import purchasesdata3 from "../../Images2/PurchasesData3.svg";
import purchasesdata4 from "../../Images2/PurchasesData4.svg";
import purchasesdata5 from "../../Images2/PurchasesData5.svg";
import purchasesdata6 from "../../Images2/PurchasesData6.svg";
import purchasesdata7 from "../../Images2/PurchasesData7.svg";
import TabHighlighted2 from "../../Images2/tabhighlighted2.svg";
import TabHighlightedClear2 from "../../Images2/tabhighlightedclear2.svg";

// Purchases Breakdown

export default function Card2Purchases() {
  const [toggleActive1, setToggleActive1] = useState(false);
  const [toggleActive2, setToggleActive2] = useState(false);
  const [highlight1, setHighlight1] = useState("Custom");
  const [highlight2, setHighlight2] = useState("Purchases");

  return (
    <SmallRectangle>
      <ParentVStack>
        <TopHStack>
          <TitleText>REVENUE PER TRAFFIC SOURCE</TitleText>
          <MiniHStack>
            <VStackNew>
              <ToggleRectangle>
                <InsideRectangleWrapper>
                  <RectangleText>{highlight1}</RectangleText>
                  <BlackSimpleArrow1
                    toggleActive1={toggleActive1}
                    src={blacksimplearrow}
                    onClick={() => setToggleActive1(!toggleActive1)}
                  />
                </InsideRectangleWrapper>
              </ToggleRectangle>
              {toggleActive1 == true ? (
                <ToggleRectangle1>
                  <VStack>
                    <BlueBackground>
                      <ModalBlackSemiBold>Models</ModalBlackSemiBold>
                    </BlueBackground>
                    <div onClick={() => setHighlight1("Custom")}>
                      {highlight1 == "Custom" ? (
                        <TabHighlighted22>
                          <ModalGraySemiBold>Custom</ModalGraySemiBold>
                        </TabHighlighted22>
                      ) : (
                        <TabHighlightedClear22>
                          <ModalGraySemiBold>Custom</ModalGraySemiBold>
                        </TabHighlightedClear22>
                      )}
                    </div>
                    <div onClick={() => setHighlight1("First-Touch")}>
                      {highlight1 == "First-Touch" ? (
                        <TabHighlighted22>
                          <ModalGrayRegular>First-Touch</ModalGrayRegular>
                        </TabHighlighted22>
                      ) : (
                        <TabHighlightedClear22>
                          <ModalGrayRegular>First-Touch</ModalGrayRegular>
                        </TabHighlightedClear22>
                      )}
                    </div>
                    <div onClick={() => setHighlight1("Last-Touch")}>
                      {highlight1 == "Last-Touch" ? (
                        <TabHighlighted22>
                          <ModalGrayRegular>Last-Touch</ModalGrayRegular>
                        </TabHighlighted22>
                      ) : (
                        <TabHighlightedClear22>
                          <ModalGrayRegular>Last-Touch</ModalGrayRegular>
                        </TabHighlightedClear22>
                      )}
                    </div>
                    <div onClick={() => setHighlight1("Linear")}>
                      {highlight1 == "Linear" ? (
                        <TabHighlighted22>
                          <ModalGrayRegular>Linear</ModalGrayRegular>
                        </TabHighlighted22>
                      ) : (
                        <TabHighlightedClear22>
                          <ModalGrayRegular>Linear</ModalGrayRegular>
                        </TabHighlightedClear22>
                      )}
                    </div>
                    <div onClick={() => setHighlight1("U-Shaped")}>
                      {highlight1 == "U-Shaped" ? (
                        <TabHighlighted22>
                          <ModalGrayRegular>U-Shaped</ModalGrayRegular>
                        </TabHighlighted22>
                      ) : (
                        <TabHighlightedClear22>
                          <ModalGrayRegular>U-Shaped</ModalGrayRegular>
                        </TabHighlightedClear22>
                      )}
                    </div>
                  </VStack>
                </ToggleRectangle1>
              ) : (
                <div> </div>
              )}
            </VStackNew>
            <VerticalLine />
            <BoldBlackText>$41.5k</BoldBlackText>
          </MiniHStack>
        </TopHStack>
        <InfoStack>
          <LabelHStack>
            <LabelFont>Sources</LabelFont>
            <LabelFont>Amount</LabelFont>
          </LabelHStack>
          <BlueLine />
          <DataVStack>
            <DataParentHStack>
              <img src={purchasesdata1} />
              <BackgroundRectangle>
                <InsideText>$8.5k</InsideText>
              </BackgroundRectangle>
            </DataParentHStack>
            <DataParentHStack>
              <img src={purchasesdata2} />
              <BackgroundRectangle>
                <InsideText>$7.3k</InsideText>
              </BackgroundRectangle>
            </DataParentHStack>
            <DataParentHStack>
              <img src={purchasesdata3} />
              <BackgroundRectangle>
                <InsideText>$6.8k</InsideText>
              </BackgroundRectangle>
            </DataParentHStack>
            <DataParentHStack>
              <img src={purchasesdata4} />
              <BackgroundRectangle>
                <InsideText>$1.2k</InsideText>
              </BackgroundRectangle>
            </DataParentHStack>
            <DataParentHStack>
              <img src={purchasesdata5} />
              <BackgroundRectangle>
                <InsideText>$897</InsideText>
              </BackgroundRectangle>
            </DataParentHStack>
            <DataParentHStack>
              <img src={purchasesdata6} />
              <BackgroundRectangle>
                <InsideText>49</InsideText>
              </BackgroundRectangle>
            </DataParentHStack>
            <DataParentHStack>
              <img src={purchasesdata7} />
              <BackgroundRectangle>
                <InsideText>$151</InsideText>
              </BackgroundRectangle>
            </DataParentHStack>
          </DataVStack>
        </InfoStack>
      </ParentVStack>
    </SmallRectangle>
  );
}

const ToggleRectangle1 = styled.div`
  position: absolute;
  bottom: 140px;
  right: 65px;
  width: 113px;
  height: 155px;
  background: #ffffff;
  z-index: 10px;
  /* Banabo No Hover */
  box-shadow: 2px 5px 100px 5px #ededef;
  border-radius: 10px;
`;

const VStackNew = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundRectangle = styled.div`
  width: 51.42px;
  height: 23px;
  background: #ffffff;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 4px;
`;

const InsideText = styled.div`
  font-size: 13px;
  color: #666678;
  font-family: "ProximaNovaRegular";
  padding-left: 14px;
  padding-top: 6px;
`;

const DataVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 10px;
`;

const DataParentHStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 380px;
`;

const LabelHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 260px;
`;

const LabelFont = styled.div`
  font-size: 12px;
  color: #666678;
  font-family: "ProximaNovaBold";
`;

const BlueLine = styled.div`
  width: 347.88px;
  height: 1.3px;
  background: #e4f2ff;
`;

const ToggleRectangle = styled.div`
  width: 106.88px;
  height: 28px;
  background: #eeeef4;
  border-radius: 8px;
`;

const ArrowIMG = styled.img`
  cursor: pointer;
`;

const InsideRectangleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 7px;
  padding-left: 4px;
  gap: 3px;
  justify-content: center;
  align-items: center;
`;

const RectangleText = styled.div`
  color: #252531;
  font-size: 15px;
  font-family: "ProximaNovaSemibold";
`;

const BoldBlackText = styled.div`
  font-family: "ProximaNovaSemibold";
  color: #252531;
  font-size: 18px;
`;

const VerticalLine = styled.div`
  width: 27.51px;
  height: 2.02px;

  background: #e4f2ff;
  transform: matrix(0, -1, 1, 0, 0, 0);
`;

const MiniHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.div`
  font-size: 16px;
  font-family: "ProximaNovaSemiBold";
  color: #88879b;
  width: 160px;
  line-height: 19px;
`;

const ParentVStack = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 50px;
  gap: 20px;
`;

const InfoStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TopHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

const SmallRectangle = styled.div`
  width: 484px;
  height: 370px;

  background: #ffffff;
  /* La La La */

  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
`;

///////

const GraphIMG = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const BlackSimpleArrow1 = styled.img`
  cursor: pointer;
  transition-property: transform;
  transition-duration: 0.1s;
  transform: ${(props) =>
    props.toggleActive1 ? "rotate(180deg)" : "rotate(0deg)"};
`;

const BlackSimpleArrow2 = styled.img`
  cursor: pointer;
  transition-property: transform;
  transition-duration: 0.1s;
  transform: ${(props) =>
    props.toggleActive2 ? "rotate(180deg)" : "rotate(0deg)"};
`;

const StickIMG = styled.img`
  position: absolute;
  right: 20px;
  bottom: -60px;
`;

const CardParameter = styled.div`
  position: absolute;
  width: 572px;
  height: 410px;
  left: 912px;
  top: 105px;

  background: #ffffff;
  /* La La La */

  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
`;

const InsideCard = styled.div`
  width: 187.64px;
  height: 157px;
  position: absolute;
  right: 36px;
  bottom: 155px;
  z-index: 1;
  background: #ffffff;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 4px;
  display: ${(props) => (props.toggleActive2 ? "none" : "null")};
`;

const TextGray = styled.div`
  font-family: "ProximaNovaSemibold";
  font-size: 14px;
  color: #666678;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  gap: 7px;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 76px;
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  gap: 0px;
  text-align: left;
`;

const BlueCircle = styled.div`
  background: #e4f2ff;
  border-radius: 4px;
  width: 48.42px;
  height: 17px;
`;

const ColorIMG = styled.img``;

const GrayPlainText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 14px;
  line-height: 15px;
  width: 90px;
  /* identical to box height */
  color: #666678;
`;

const BlackPlainText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 14px;
  width: 100px;
  /* identical to box height */
  color: #252531;
`;

const AttributionTitle = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  line-height: 19px;
  color: #88879b;
`;

const GrayButtonBackground = styled.div`
  width: 108.95px;
  height: 28px;
  background: #eeeef4;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const HStack3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 50px;
  padding-left: 50px;
`;

const HStack4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const HStack6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  gap: 9px;
`;

const BoldBlackText2 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 15px;
  line-height: 18px;

  color: #252531;
`;

const ToggleRectangle2 = styled.div`
  position: absolute;
  top: 100px;
  left: 340px;
  width: 113px;
  height: 155px;
  background: #ffffff;
  z-index: 200px;
  /* Banabo No Hover */
  box-shadow: 2px 5px 100px 5px #ededef;
  border-radius: 10px;
`;

const ModalBlackSemiBold = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #252531;
`;

const ModalGraySemiBold = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 15px;
  color: #666678;
`;

const ModalGrayRegular = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 15px;
  color: #666678;
`;

const BlueBackground = styled.div`
  width: 54px;
  height: 19px;
  background: #e4f2ff;
  border-radius: 4px;
`;

const TabHighlightedClear22 = styled.div`
  background-image: url(${TabHighlightedClear2});
  width: 80px;
  height: 20px;
  position: relative;
  display: flex;
  justify-content: left;
  cursor: pointer;
`;

const TabHighlighted22 = styled.div`
  background-image: url(${TabHighlighted2});
  width: 80px;
  height: 20px;
  position: relative;
  display: flex;
  justify-content: left;
  cursor: pointer;
`;