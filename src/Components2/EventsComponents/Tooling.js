import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
<script type="module" src="https://unpkg.com/x-frame-bypass"></script>;

export default function Tooling() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <Wrapper>
      <BlueBlur>
        <WhiteRectangle />
        <PositionDiv>
          <WhiteRectangle>hi</WhiteRectangle>
          <Iframe
            url="http://localhost:3000/?url=https://www.tesla.com/"
            width="2000px"
            height="1540px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          ></Iframe>
        </PositionDiv>
      </BlueBlur>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow-y: hidden;
`;

const WhiteRectangle = styled.div`
  position: absolute;
  width: 100vw;
  height: 34px;
  left: 80px;
  top: 45px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 50;
`;

const PositionDiv = styled.div`
  z-index: 100;
  position: absolute;
  right: 0px;
  bottom: 0px;
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
