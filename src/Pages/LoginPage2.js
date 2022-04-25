import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import googleSignupLogo from "../Images/googleSignupLogo.svg";
import microsoftSignupLogo from "../Images/microsoftSignupLogo.svg";
import ButtonWhiteArrow from "../Images/ButtonWhiteArrow";
import useInput from "../CustomHooks/useInput";
import Cookies from "universal-cookie";
import SignUp from "./signup/username-password/signupAPI";
import MicrosoftAPISignUp from "./signup/oauth/microsoftAPI";
import GoogleAPISignUp from "./signup/oauth/googleAPI";
import whiteWheel from "../Images/whiteWheel.svg";
import banaboLogo from "../Images/banabologo.svg";
import signinwithgoogleprod from "../Images/signinwithgoogleprod.svg";
import signinwithmicrosoftprod from "../Images/signinwithmicrosoftprod.svg";

export default function LoginPage2() {
  const [getStartedButtonActive, setGetStartedButtonActive] = useState(false);
  const [arrowOpacity, setArrowOpacity] = useState("0.7");
  const [navigation, setNavigation] = useState(1);
  const [spinnerActivated, setSpinnerActivated] = useState(false);
  const cookies = new Cookies();

  // Google Variables
  const google_client_id =
    "914021793896-2hmcu558rif86gri6n8sl43g28177n6r.apps.googleusercontent.com"; // Banabo - API APP ID
  const google_redirect_uri = "https://application.banabo.io/login/";
  const google_state = "foobargoogle";
  const google_response_type = "code";
  const google_scope = "email profile";
  const google_access_type = "offline";

  // Microsoft Variables
  const microsoft_client_id = "8daf51ab-2933-47e1-b8ef-13b1e7091b4f"; // Banabo - API APP ID
  const microsoft_redirect_uri = "https://app.banabo.io/signup/";
  const microsoft_state = "foobarmicrosoft";
  const microsoft_response_type = "code";
  const microsoft_scope = ["user.read"];
  //
  //

  //=============================================================================
  // GOOGLE
  //=============================================================================

  useEffect(() => {
    //Google
    if (window.location.href.includes("code")) {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        // @ts-ignore
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // @ts-ignore
      let authCode = params.code;
      // @ts-ignore
      let stateValue = params.state;
      if (stateValue == "foobargoogle") {
        GoogleAPISignUp(authCode);
      }
    } else {
      console.log("No Code");
    }
  }, []);

  //=============================================================================
  //  MICROSOFT
  //=============================================================================
  useEffect(() => {
    //Microsoft
    if (window.location.href.includes("code")) {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        // @ts-ignore
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // @ts-ignore
      let authCode = params.code;
      // @ts-ignore
      let stateValue = params.state;
      if (stateValue == "foobarmicrosoft") {
        MicrosoftAPISignUp(authCode);
      }
    } else {
      console.log("No Code");
    }
  }, []);

  //=============================================================================
  // AUTH0
  //=============================================================================

  //# Function to save inputs w/o refresh
  const noRefresh = (event) => {
    event.preventDefault();
  };

  //=============================================================================
  // React Hook
  //=============================================================================

  return (
    <ParentWrapper>
      <AlterIMG src={banaboLogo} />
      <Rectangle>
        <ParentVStack>
          <H1Text>Lets Get Started</H1Text>
          <InsideVStack>
            <AuthVStack>
              <ButtonIMG
                src={signinwithgoogleprod}
                onClick={() =>
                  window.open(
                    `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?nonce=12345&access_type=${google_access_type}&client_id=${google_client_id}&scope=${google_scope}&redirect_uri=${google_redirect_uri}&state=${google_state}&response_type=${google_response_type}`,
                    "_self"
                  )
                }
              />
              <ButtonIMG
                src={signinwithmicrosoftprod}
                onClick={() =>
                  window.open(
                    `https://login.microsoftonline.com/common/oauth2/v2.0/authorize/?client_id=${microsoft_client_id}&response_type=${microsoft_response_type}&redirect_uri=${microsoft_redirect_uri}&scope=${microsoft_scope}&state=${microsoft_state}`,
                    "_self"
                  )
                }
              />
            </AuthVStack>
            <HStackOr>
              <OrRectangle />
              <MainText>Or</MainText>
              <OrRectangle />
            </HStackOr>
            <SmallVStack>
              <TextInputVStack>
                <TextInputRegularText>Email Address</TextInputRegularText>
                <form onSubmit={noRefresh}>
                  <InputRectangle>
                    <Input placeholder="" />
                  </InputRectangle>
                </form>
              </TextInputVStack>
              <TextInputVStack>
                <TextInputRegularText>Password</TextInputRegularText>
                <form onSubmit={noRefresh}>
                  <InputRectangle>
                    <Input placeholder="" type="password" />
                  </InputRectangle>
                </form>
              </TextInputVStack>
            </SmallVStack>
            <SubmitButton getStartedButtonActive={getStartedButtonActive}>
              {spinnerActivated ? (
                <SpinnerIMG src={whiteWheel} />
              ) : (
                <ButtonHStack>
                  <ButtonText getStartedButtonActive={getStartedButtonActive}>
                    Get Started
                  </ButtonText>
                  <ButtonWhiteArrowWrapper>
                    <ButtonWhiteArrow opacity={arrowOpacity} />
                  </ButtonWhiteArrowWrapper>
                </ButtonHStack>
              )}
            </SubmitButton>
          </InsideVStack>
        </ParentVStack>
      </Rectangle>
      <DumbStuffHStack>
        <DumbStuffText1>2022 Banabo Labs Inc.</DumbStuffText1>
        <DumbStuffText
          onClick={() =>
            window.open("https://www.banabo.io/terms-of-service/", "_self")
          }
        >
          Terms of Service
        </DumbStuffText>
        <DumbStuffText
          onClick={() =>
            window.open("https://www.banabo.io/privacy-policy/", "_self")
          }
        >
          Privacy Policy
        </DumbStuffText>
      </DumbStuffHStack>
    </ParentWrapper>
  );
}

const DumbStuffHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 74vh;
  margin-left: 2vw;
  margin-right: 7vw;
  @media (min-width: 900px) and (max-width: 1600px) and (min-height: 720px) {
    margin-top: 70vh;
    margin-left: 2vw;
    margin-right: 7vw;
  }

  @media (min-width: 900px) and (max-width: 1600px) and (max-height: 700px) {
    margin-top: 70vh;
  }

  @media (min-width: 1700px) {
    margin-top: 77vh;
    margin-left: 2vw;
    margin-right: 15vw;
  }
  @media (min-width: 2300px) {
    margin-top: 77vh;
    margin-left: 2vw;
    margin-right: 23vw;
    gap: 80px;
  }
`;

const DumbStuffText1 = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 14.5px;
  color: #ffffff;
`;

const DumbStuffText = styled.div`
  font-family: "ProximaNovaSemiBold";
  font-size: 14.5px;
  color: #ffffff;
  cursor: pointer;
`;

const ButtonIMG = styled.img`
  height: 58px;
  width: auto;
  cursor: pointer;
`;

const AlterIMG = styled.img`
  padding-top: 30px;
  padding-left: 40px;
  height: 70px;
  width: auto;
`;

const SpinnerIMG = styled.img`
  animation: spin 2s linear infinite;
  width: 25px;
  height: 25px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ButtonWrapper = styled.div`
  opacity: 0;
`;

const SmallVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ParentWrapper = styled.div`
  position: relative;
  background-color: #5790ff;
  height: 100vh;
  width: 100vw;
`;

const InsideVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Rectangle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12vh;
  padding-right: 14vh;
`;

const ParentVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: left;
  text-align: left;
  padding-top: 30px;
  padding-left: 110px;
  position: absolute;
`;

const AuthVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const H1Text = styled.div`
  font-size: 26px;
  color: #ffffff;
  font-family: "ProximaNovaBold";
`;

const BorderBoxWhite = styled.button`
  width: 280px;
  height: 62px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.001);
  :hover {
    background: #5790ff;
  }
`;

const HStackBorderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: left;
  align-items: center;
  text-align: center;
  padding-left: 15px;
`;

const HStackBorderBox2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: left;
  align-items: center;
  text-align: center;
  padding-left: 15px;

  pointer-events: none;
`;

const MainText = styled.div`
  font-size: 20px;
  font-family: "ProximaNovaSemiBold";
  color: #ffffff;
`;

const HStackOr = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const OrRectangle = styled.div`
  width: 114px;
  height: 2px;
  background: #ffffff;
`;

const TextInputVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const TextInputRegularText = styled.div`
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  font-family: "ProximaNovaRegular";
`;

const Input = styled.input`
  border: none;
  width: 300px;
  font-size: 16px;
  line-height: 19px;
  font-family: "ProximaNovaRegular";
  background-color: transparent;
  color: #ffffff;
  :focus {
    outline: none;
  }
  padding-left: 10px;
`;

const InputRectangle = styled.div`
  width: 283px;
  height: 41px;
  background: #5790ff;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SubmitButton = styled.div`
  width: 283px;
  height: 39px;
  left: 578px;
  top: 734px;
  background: ${(props) =>
    props.getStartedButtonActive ? "#3979F3" : "rgba(57, 121, 243, 0.7)"};
  cursor: ${(props) => (props.getStartedButtonActive ? "pointer" : "auto")};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const ButtonHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const ButtonText = styled.div`
  font-size: 18px;
  color: ${(props) =>
    props.getStartedButtonActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)"};
  font-family: "ProximaNovaBold";
`;

const ButtonWhiteArrowWrapper = styled.div`
  padding-top: 1.2px;
`;
