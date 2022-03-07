import React, { useState, useEffect } from "react";
import styled from "styled-components";
import graph from "../../Images2/graph.svg";
import stick from "../../Images2/stick.svg";
import orange from "../../Images2/orange.svg";
import pink from "../../Images2/pink.svg";
import purple from "../../Images2/purple.svg";
import red from "../../Images2/red.svg";
import blue from "../../Images2/blue.svg";
import blacksimplearrow from "../../Images2/blacksimplearrow.svg";
import TabHighlighted2 from "../../Images2/tabhighlighted2.svg";
import TabHighlightedClear2 from "../../Images2/tabhighlightedclear2.svg";

export default function TopRightCard() {
  const [toggleActive1, setToggleActive1] = useState(false);
  const [toggleActive2, setToggleActive2] = useState(false);
  const [highlight1, setHighlight1] = useState("Custom");
  const [highlight2, setHighlight2] = useState("Purchases");

  return (
    <CardParameter>
      <HStack3>
        <AttributionTitle>ATTRIBUTION</AttributionTitle>
        <HStack4>
          <GrayButtonBackground>
            <HStack6 onClick={() => setToggleActive1(!toggleActive1)}>
              <BoldBlackText2>{highlight1}</BoldBlackText2>
              <BlackSimpleArrow1
                toggleActive1={toggleActive1}
                src={blacksimplearrow}
              />
            </HStack6>
          </GrayButtonBackground>
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
          <GrayButtonBackground>
            <HStack6 onClick={() => setToggleActive2(!toggleActive2)}>
              <BoldBlackText2>Revenue</BoldBlackText2>
              <BlackSimpleArrow2
                toggleActive2={toggleActive2}
                src={blacksimplearrow}
              />
            </HStack6>
          </GrayButtonBackground>
          {toggleActive2 == true ? (
            <ToggleRectangle2>
              <VStack>
                <BlueBackground>
                  <ModalBlackSemiBold>Events</ModalBlackSemiBold>
                </BlueBackground>
                <div onClick={() => setHighlight2("Purchases")}>
                  {highlight2 == "Purchases" ? (
                    <TabHighlighted22>
                      <ModalGraySemiBold>Purchases</ModalGraySemiBold>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGraySemiBold>Purchases</ModalGraySemiBold>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight2("Revenue")}>
                  {highlight2 == "Revenue" ? (
                    <TabHighlighted22>
                      <ModalGrayRegular>Revenue</ModalGrayRegular>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular>Revenue</ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight2("Sign Ups")}>
                  {highlight2 == "Sign Ups" ? (
                    <TabHighlighted22>
                      <ModalGrayRegular>Sign Ups</ModalGrayRegular>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular>Sign Ups</ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight2("Add To Cart")}>
                  {highlight2 == "Add To Cart" ? (
                    <TabHighlighted22>
                      <ModalGrayRegular>Add To Cart</ModalGrayRegular>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular>Add To Cart</ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
                <div onClick={() => setHighlight2("Read Content")}>
                  {highlight2 == "Read Content" ? (
                    <TabHighlighted22>
                      <ModalGrayRegular>Read Content</ModalGrayRegular>
                    </TabHighlighted22>
                  ) : (
                    <TabHighlightedClear22>
                      <ModalGrayRegular>Read Content</ModalGrayRegular>
                    </TabHighlightedClear22>
                  )}
                </div>
              </VStack>
            </ToggleRectangle2>
          ) : (
            <div> </div>
          )}
          <VerticalLine />
          <BoldBlackText>$837k</BoldBlackText>
        </HStack4>
      </HStack3>
      <GraphIMG src={graph} />
      <StickIMG src={stick} />
      <InsideCard toggleActive2={toggleActive2}>
        <VStack>
          <HStack>
            <TextGray>Top 5</TextGray>
            <BlueCircle>
              <TextGray>MAR 5</TextGray>
            </BlueCircle>
          </HStack>
          <HStack2>
            <MiniHStack>
              <ColorIMG src={blue} />
              <GrayPlainText>Instagram</GrayPlainText>
            </MiniHStack>
            <BlackPlainText>$554k</BlackPlainText>
          </HStack2>
          <HStack2>
            <MiniHStack>
              <ColorIMG src={red} />
              <GrayPlainText>Facebook</GrayPlainText>
            </MiniHStack>
            <BlackPlainText>$91k</BlackPlainText>
          </HStack2>
          <HStack2>
            <MiniHStack>
              <ColorIMG src={purple} />
              <GrayPlainText>LinkedIn</GrayPlainText>
            </MiniHStack>
            <BlackPlainText>$53k</BlackPlainText>
          </HStack2>
          <HStack2>
            <MiniHStack>
              <ColorIMG src={orange} />
              <GrayPlainText>Google SEO</GrayPlainText>
            </MiniHStack>
            <BlackPlainText>$17k</BlackPlainText>
          </HStack2>
          <HStack2>
            <MiniHStack>
              <ColorIMG src={pink} />
              <GrayPlainText>YouTube</GrayPlainText>
            </MiniHStack>
            <BlackPlainText>$9k</BlackPlainText>
          </HStack2>
        </VStack>
      </InsideCard>
    </CardParameter>
  );
}

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

const MiniHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
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

const VerticalLine = styled.div`
  width: 27.51px;
  height: 2.02px;
  background: #e4f2ff;
  transform: matrix(0, -1, 1, 0, 0, 0);
`;

const BoldBlackText = styled.div`
  font-size: 18px;
  line-height: 22px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
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

const ToggleRectangle1 = styled.div`
  position: absolute;
  top: 100px;
  left: 212px;
  width: 113px;
  height: 155px;
  background: #ffffff;
  z-index: 10px;
  /* Banabo No Hover */
  box-shadow: 2px 5px 100px 5px #ededef;
  border-radius: 10px;
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
