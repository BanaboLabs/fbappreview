import React, { useState, useEffect } from "react";
import styled from "styled-components";
import livegreenbutton from "../../Images2/livegreenbutton.svg";
import addblackbutton from "../../Images2/addblackbutton.svg";
import connectcard from "../../Images2/connectcard.svg";
import blackx from "../../Images2/blackx.svg";
import logogrid from "../../Images2/companylogogrid.png";

export default function CampaignsConnect() {
  const [isShown, setIsShown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const jsonArray = [
    {
      CampaignDate: "2/12/22",
      CampaignLetter: "F",
      CampaignSource: "FACEBOOK",
      CampaignName: "Facebook Easter Ads",
      CampaignBudget: "$960",
      CampaignTimeFrame: "Feb 3 - Mar 19",
    },
    {
      CampaignDate: "2/12/22",
      CampaignLetter: "F",
      CampaignSource: "FACEBOOK",
      CampaignName: "Facebook Stories Buy",
      CampaignBudget: "$8120",
      CampaignTimeFrame: "Feb 1 - Mar 31",
    },
    {
      CampaignDate: "1/11/22",
      CampaignLetter: "S",
      CampaignSource: "SNAPCHAT",
      CampaignName: "Snapchat Influencers",
      CampaignBudget: "$1210",
      CampaignTimeFrame: "Jan 9 - Jan 30",
    },
    {
      CampaignDate: "1/9/22",
      CampaignLetter: "G",
      CampaignSource: "GOOGLE ADS",
      CampaignName: "Search Campaign V1",
      CampaignBudget: "$2310",
      CampaignTimeFrame: "Jan 7 - Apr 17",
    },
    {
      CampaignDate: "1/9/22",
      CampaignLetter: "G",
      CampaignSource: "GOOGLE ADS",
      CampaignName: "Custom AdWords ",
      CampaignBudget: "$12160",
      CampaignTimeFrame: "Jan 3 - Apr 19",
    },
    {
      CampaignDate: "1/7/22",
      CampaignLetter: "T",
      CampaignSource: "TIKTOK",
      CampaignName: "TikTok Campaign One",
      CampaignBudget: "$4400",
      CampaignTimeFrame: "Jan 2 - Feb 6",
    },
  ];

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  return (
    <div>
      {showModal ? (
        <div>
          <BlueBlur />
          <RectangleModal>
            <div onClick={() => setIsShown(false)}>
              <ClickIMG11 src={blackx} onClick={() => setShowModal(false)} />
            </div>
            <ContentWrapper>
              <MiddleVStack>
                <LargeBlackText>
                  Select a Marketing Channel to Connect With
                </LargeBlackText>
                <MediumGrayText>
                  We’ll have you sign in directly with your marketing accounts.
                  This is a one time process
                </MediumGrayText>
                <LogoGridWrapper>
                  <LogoGrid src={logogrid} />
                </LogoGridWrapper>
              </MiddleVStack>
            </ContentWrapper>
          </RectangleModal>
        </div>
      ) : (
        <div>
          <TitleRectangle>
            <TitleText>3rd Party Campaigns </TitleText>
          </TitleRectangle>
          <ClickIMG1 src={livegreenbutton} />
          <ClickIMG2
            src={addblackbutton}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={() => setShowModal(true)}
          />
          {isShown ? <ConnectButton src={connectcard} /> : <div> </div>}
          <HStackWrapper>
            <ParentHStack>
              <ChildHStack1>
                <TheTitleText>Date Connected</TheTitleText>
                <TheTitleText>Source</TheTitleText>
              </ChildHStack1>
              <ChildHStack2>
                <TheTitleText>Campaign Name</TheTitleText>
                <TheTitleText>Budget</TheTitleText>
                <TheTitleText>Time Frame</TheTitleText>
              </ChildHStack2>
            </ParentHStack>
          </HStackWrapper>
          <VStack>
            {jsonArray.map((item) => (
              <HStackWrapper2>
                <ParentHStack>
                  <ChildHStack1>
                    <RegularText>{item.CampaignDate}</RegularText>
                    <InnerHStack>
                      <GreenCircle>
                        <BlackLetter>{item.CampaignLetter}</BlackLetter>
                      </GreenCircle>
                      <CompanyNameText>{item.CampaignSource}</CompanyNameText>
                    </InnerHStack>
                  </ChildHStack1>
                  <ChildHStack2>
                    <RegularText>{item.CampaignName}</RegularText>
                    <DarkGreenText>{item.CampaignBudget}</DarkGreenText>
                    <RegularText>{item.CampaignTimeFrame}</RegularText>
                  </ChildHStack2>
                </ParentHStack>
                <LineWrapper>
                  <SmallLine />
                </LineWrapper>
              </HStackWrapper2>
            ))}
          </VStack>
          <LongBlueLine />
        </div>
      )}
    </div>
  );
}

const ClickIMG2 = styled.img`
  cursor: pointer;
  position: absolute;
  left: 475px;
  top: 216px;
`;

const LogoGridWrapper = styled.div`
  padding-top: 40px;
`;

const LogoGrid = styled.img`
  cursor: pointer;
  width: 400px;
  height: 310px;
`;

const ContentWrapper = styled.div`
  padding-left: 80px;
  padding-top: 60px;
`;

const LargeBlackText = styled.div`
  font-family: "ProximaNovaSemiBold";
  color: #252531;
  font-size: 26px;
  width: 300px;
  line-height: 32px;
`;

const MediumGrayText = styled.div`
  font-family: "ProximaNovaRegular";
  font-size: 16px;
  color: #9a99a9;
  width: 340px;
  line-height: 19px;
`;

const MiddleVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ClickIMG11 = styled.img`
  cursor: pointer;
  position: absolute;
  padding-top: 20px;
  padding-left: 620px;
`;

const RectangleModal = styled.div`
  border-radius: 20px;
  width: 657px;
  height: 603px;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
  border-radius: 10px;
  position: absolute;
  left: 600px;
  top: 160px;
  z-index: 100;
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

const ConnectButton = styled.img`
  position: absolute;
  left: 540px;
  top: 242px;
  cursor: pointer;
  z-index: 20;
`;

const LineWrapper = styled.div`
  padding-top: 12px;
  padding-left: 140px;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 435px;
  top: 365px;
`;

const SmallLine = styled.div`
  width: 930px;
  height: 2px;
  background: #d7eeff;
  padding-left: 80px;
`;

const InnerHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const DarkGreenText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 16px;
  color: #00786a;
`;

const RegularText = styled.div`
  font-size: 16px;
  font-family: "ProximaNovaRegular";
  color: #6a6986;
`;

const CompanyNameText = styled.div`
  font-size: 16px;
  color: #6a6986;
  font-family: "ProximaNovaSemiBold";
`;

const GreenCircle = styled.div`
  width: 28px;
  height: 28px;
  background: #54dfe6;
  border-radius: 60px;
`;

const BlackLetter = styled.div`
  font-size: 16px;
  color: #000000;
  font-family: "ProximaNovaSemiBold";
  padding-top: 8px;
  padding-left: 10px;
`;

////////

const TheTitleText = styled.div`
  color: #6a6986;
  font-size: 16px;
  font-family: "ProximaNovaSemiBold";
`;

const HStackWrapper2 = styled.div``;

const HStackWrapper = styled.div`
  position: absolute;
  left: 435px;
  top: 318px;
`;

const ParentHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 330px;
`;

const ChildHStack1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const ChildHStack2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const LongBlueLine = styled.div`
  position: absolute;
  width: 1082px;
  height: 2px;
  left: 420px;
  top: 340px;
  background: #d7eeff;
`;

const ClickIMG1 = styled.img`
  position: absolute;
  left: 382px;
  top: 216px;
`;

const TitleRectangle = styled.div`
  position: absolute;
  width: 271px;
  height: 65px;
  left: 420px;
  top: 120px;
  background: #ffffff;
  /* BANABO */
  box-shadow: 2px 5px 40px #eeeeee;
  border-radius: 20px;
`;

const TitleText = styled.div`
  color: #252531;
  font-size: 24px;
  font-family: "ProximaNovaRegular";
  padding-top: 22px;
  padding-left: 23px;
`;
