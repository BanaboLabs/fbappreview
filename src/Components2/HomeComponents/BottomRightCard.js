import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function BottomRightCard() {
  return <CardParameter />;
}

const CardParameter = styled.div`
  position: absolute;
  width: 486px;
  height: 385px;
  left: 998px;
  top: 560px;

  background: #ffffff;
  /* La La La */

  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
`;
