/**********************
 * The Main Application *
 - Contains SideTabBar + Component
 **********************/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WhiteCanvas from "../Components2/whitecanvas";

export default function HomePage() {
  return (
    <Wrapper>
      <AlignDiv>
        <WhiteCanvas />
      </AlignDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f7fbff;
  min-height: 100vh;
  min-width: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const AlignDiv = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  position: relative;
`;
