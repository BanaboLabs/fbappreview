import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instagram from "../../Images2/instagramlogonew.png";
import bing from "../../Images2/binglogonew.png";
import facebook from "../../Images2/facebooklogonew.png";
import google from "../../Images2/googlelogonew.png";
import hackernews from "../../Images2/hackernewslogonew.png";

export default function InsideBottomLeft1(props) {
  const [isShown, setIsShown] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    props.sendToParent1(clicked); // This is the mounting part
  }, [clicked]);

  return (
    <Wrapper>
      <div>
        <HStack>
          <BoldText>Sources</BoldText>
          <SemiBoldText>Visitors</SemiBoldText>
        </HStack>
        <Line />
        <VStack>
          <HStack15
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {isShown ? (
              <AreaWrapper>
                <GrayRectangle>
                  <HStack15 onClick={() => setClicked(!clicked)}>
                    <HStack2>
                      <CompanyLogo src={google} />
                      <GrayText>Google SEO</GrayText>
                    </HStack2>
                    <ShadowRectangle>
                      <DarkText>11.9k</DarkText>
                    </ShadowRectangle>
                  </HStack15>
                </GrayRectangle>
              </AreaWrapper>
            ) : (
              <div>
                <HStack15>
                  <HStack2>
                    <CompanyLogo src={google} />
                    <GrayText>Google SEO</GrayText>
                  </HStack2>
                  <ShadowRectangle>
                    <DarkText>11.9k</DarkText>
                  </ShadowRectangle>
                </HStack15>
              </div>
            )}
          </HStack15>

          <HStack15>
            <HStack2>
              <CompanyLogo src={google} />
              <GrayText>Google Direct Search</GrayText>
            </HStack2>
            <ShadowRectangle>
              <DarkText>8.4k</DarkText>
            </ShadowRectangle>
          </HStack15>
          <HStack15>
            <HStack2>
              <CompanyLogo src={facebook} />
              <GrayText>Facebook</GrayText>
            </HStack2>
            <ShadowRectangle>
              <DarkText>1.3k</DarkText>
            </ShadowRectangle>
          </HStack15>
          <HStack15>
            <HStack2>
              <CompanyLogo src={instagram} />
              <GrayText>Instagram</GrayText>
            </HStack2>
            <ShadowRectangle>
              <DarkText>600</DarkText>
            </ShadowRectangle>
          </HStack15>
          <HStack15>
            <HStack2>
              <CompanyLogo src={hackernews} />
              <GrayText>Hacker News</GrayText>
            </HStack2>
            <ShadowRectangle>
              <DarkText>341</DarkText>
            </ShadowRectangle>
          </HStack15>
          <HStack15>
            <HStack2>
              <CompanyLogo src={hackernews} />
              <GrayText>Hacker News</GrayText>
            </HStack2>
            <ShadowRectangle>
              <DarkText>341</DarkText>
            </ShadowRectangle>
          </HStack15>
        </VStack>{" "}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 45px;
`;

const CompanyLogo = styled.img`
  padding-left: 10px;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 250px;
  padding-bottom: 10px;
  padding-left: 10px;
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
  left: 12px;
  width: 368px;
  height: 1px;
  background: #e4f2ff;
`;

const VStack = styled.div`
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
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

const GrayText = styled.div`
  font-size: 16px;
  line-height: 16px;
  color: #9a99a9;
  font-family: "ProximaNovaRegular";
  cursor: pointer;
`;

const ShadowRectangle = styled.div`
  width: 54px;
  height: 27px;
  background: #ffffff;
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DarkText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 15px;
  color: #666678;
  padding-top: 6px;
`;

const GrayRectangle = styled.div`
  width: 360px;
  height: 27px;
  background: rgba(238, 238, 238, 0.6);
  border-radius: 2px;
  padding-right: 50px;
`;

const AreaWrapper = styled.div``;
