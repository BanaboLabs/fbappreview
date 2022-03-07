import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Tooling() {
  return <BlueBlur />;
}

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
