import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function InsideBottomRight2() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <HStack>
        <BoldText>Purchase</BoldText>
        <SemiBoldText>Amount</SemiBoldText>
      </HStack>
      <Line />
      <VStack>
        <HStack15>
          <HStack2>
            <GrayText>New</GrayText>
          </HStack2>
          <ShadowRectangle>
            <DarkText>937</DarkText>
          </ShadowRectangle>
        </HStack15>
        <HStack15>
          <HStack2>
            <GrayText>Repeat</GrayText>
          </HStack2>
          <ShadowRectangle>
            <DarkText>200</DarkText>
          </ShadowRectangle>
        </HStack15>
        <HStack15>
          <HStack2>
            <GrayText>Total</GrayText>
          </HStack2>
          <ShadowRectangle>
            <DarkText>1137</DarkText>
          </ShadowRectangle>
        </HStack15>
      </VStack>{" "}
    </div>
  );
}

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 258px;
  padding-bottom: 10px;
`;

const BoldText = styled.div`
  font-family: "ProximaNovaBold";
  font-size: 16px;
  color: #666678;
`;

const SemiBoldText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #666678;
`;

const Line = styled.div`
  position: absolute;
  width: 373px;
  height: 1px;
  background: #e4f2ff;
`;

const VStack = styled.div`
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const HStack15 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 380px;
`;

const HStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CompanyLogo = styled.img`
  width: 20px;
  height: 20px;
`;

const GrayText = styled.div`
  font-size: 16px;
  line-height: 16px;
  color: #9a99a9;
  font-family: "ProximaNovaRegular";
  cursor: pointer;
`;

const ShadowRectangle = styled.div`
  width: 60px;
  height: 30px;
  background: #ffffff;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const DarkText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  color: #666678;
  padding-left: 14px;
  padding-top: 9px;
`;

const GrayRectangle = styled.div`
  width: 350px;
  height: 30px;
  background: rgba(238, 238, 238, 0.6);
  border-radius: 2px;
`;
