import React, { useState, useEffect } from "react";
import styled from "styled-components";
import purchaseline1 from "../../Images2/purchaseline1.svg";
import purchaseline2 from "../../Images2/purchaseline2.svg";
import purchaseline3 from "../../Images2/purchaseline3.svg";
import purchaseline4 from "../../Images2/purchaseline4.svg";
import purchaseline5 from "../../Images2/purchaseline1.svg";
import purchaseline6 from "../../Images2/purchaseline2.svg";
import purchaseline7 from "../../Images2/purchaseline3.svg";
import purchaseline8 from "../../Images2/purchaseline4.svg";
import purchaseline9 from "../../Images2/purchaseline9.svg";
import whitefoghorizontal from "../../Images2/whitefoghorizontal.svg";
import horizontalscroll from "../../Images2/horizontalscroll.svg";
import verticalscroll from "../../Images2/verticalscroll.svg";
import Card1Purchases from "./Card1Purchases";
import Card2Purchases from "./Card2Purchases";

export default function Purchases() {
  return (
    <div>
      <VStack>
        <LargeRectangle>
          <VerticalWrapper>
            <PurchasePathText>PURCHASE PATHS</PurchasePathText>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Oct 21, 2021</TheDate>
                  <TheTime>11:21 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={purchaseline1} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Oct 21, 2021</TheDate>
                  <TheTime>11:21 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={purchaseline2} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Oct 21, 2021</TheDate>
                  <TheTime>11:21 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={purchaseline3} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Oct 21, 2021</TheDate>
                  <TheTime>11:21 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={purchaseline1} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Oct 21, 2021</TheDate>
                  <TheTime>11:21 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={purchaseline1} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Oct 21, 2021</TheDate>
                  <TheTime>11:21 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={purchaseline2} />
            </PathHStack>
            <PathHStack>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Oct 21, 2021</TheDate>
                  <TheTime>11:21 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={purchaseline3} />
            </PathHStack>
            <HorizontalWrapper>
              <DateRectangle>
                <DateVStack>
                  <TheDate>Oct 21, 2021</TheDate>
                  <TheTime>11:21 AM</TheTime>
                </DateVStack>
              </DateRectangle>
              <LogoIMG src={purchaseline9} />
            </HorizontalWrapper>
          </VerticalWrapper>
        </LargeRectangle>
        <HStack>
          <Card1Purchases />
          <Card2Purchases />
        </HStack>
      </VStack>
      <WhiteFogHorizontal src={whitefoghorizontal} />
    </div>
  );
}

const VerticalWrapper = styled.div`
  display: grid;
  grid-gap: 22px;
  padding-left: 60px;
  padding-top: 40px;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HorizontalScrollIMG = styled.img`
  z-index: 30;
  position: absolute;
  left: 474px;
  top: 525px;
  cursor: pointer;
`;

const VerticalScrollIMG = styled.img`
  z-index: 30;
  position: absolute;
  right: 446px;
  top: 137px;
  cursor: pointer;
`;

const LogoIMG = styled.img``;

const WhiteFogHorizontal = styled.img`
  z-index: 20;
  position: absolute;
  left: 464px;
  top: 442px;
`;

const DateRectangle = styled.div`
  width: 131px;
  height: 65px;
  background: #ffffff;
  /* Low */

  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 4px;
`;

const PathHStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;
`;

const DateVStack = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-left: 12px;
  gap: 8px;
`;

const TheDate = styled.div`
  font-size: 18px;
  color: #252531;
  font-family: "ProximaNovaSemiBold";
`;

const TheTime = styled.div`
  font-size: 16px;
  color: #666678;
  font-family: "ProximaNovaSemiBold";
`;

const InsideVStack = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  padding-top: 40px;
  gap: 14px;
`;

const PurchasePathText = styled.div`
  font-size: 16px;
  color: #88879b;
  font-family: "ProximaNovaSemiBold";
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 464px;
  top: 130px;
  gap: 40px;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const LargeRectangle = styled.div`
  width: 1018px;
  height: 410px;

  background: #ffffff;
  /* La La La */
  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 12px;
    height: 0px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
`;

const SmallRectangle = styled.div`
  width: 484px;
  height: 370px;

  background: #ffffff;
  /* La La La */

  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
`;
