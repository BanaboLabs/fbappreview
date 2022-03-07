import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function InsideBottomRight1(props) {
  const [isShown, setIsShown] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    props.sendToParent1(clicked); // This is the mounting part
  }, [clicked]);
  return (
    <div>
      <HStack>
        <BoldText>Name</BoldText>
        <SemiBoldText>Conversion</SemiBoldText>
      </HStack>
      <Line />
      <VStack>
        <HStack15>
          <div>
            <HStack15
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              {isShown ? (
                <div>
                  <GrayRectangle onClick={() => setClicked(!clicked)}>
                    <HStack15>
                      <HStack2>
                        <GrayText>Purchase</GrayText>
                      </HStack2>
                      <ShadowRectangle>
                        <DarkText>5.7k</DarkText>
                      </ShadowRectangle>
                    </HStack15>
                  </GrayRectangle>
                </div>
              ) : (
                <div>
                  <HStack15>
                    <HStack2>
                      <GrayText>Purchase</GrayText>
                    </HStack2>
                    <ShadowRectangle>
                      <DarkText>5.7k</DarkText>
                    </ShadowRectangle>
                  </HStack15>
                </div>
              )}
            </HStack15>
          </div>
        </HStack15>
        <HStack15>
          <HStack2>
            <GrayText>Sign Up</GrayText>
          </HStack2>
          <ShadowRectangle>
            <DarkText>2.5k</DarkText>
          </ShadowRectangle>
        </HStack15>
        <HStack15>
          <HStack2>
            <GrayText>Add to Cart</GrayText>
          </HStack2>
          <ShadowRectangle>
            <DarkText>1.3k</DarkText>
          </ShadowRectangle>
        </HStack15>
        <HStack15>
          <HStack2>
            <GrayText>Started Trial</GrayText>
          </HStack2>
          <ShadowRectangle>
            <DarkText>240</DarkText>
          </ShadowRectangle>
        </HStack15>
        <HStack15>
          <HStack2>
            <GrayText>Content Viewed</GrayText>
          </HStack2>
          <ShadowRectangle>
            <DarkText>111</DarkText>
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
