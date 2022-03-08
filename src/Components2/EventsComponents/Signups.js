import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Signups() {
  return (
    <div>
      <VStack>
        <LargeRectangle></LargeRectangle>
        <SmallRectangle></SmallRectangle>
      </VStack>
    </div>
  );
}

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
`;

const SmallRectangle = styled.div`
  width: 1018px;
  height: 370px;

  background: #ffffff;
  /* La La La */

  box-shadow: 0px 11px 28.5px 6.5px #eceff4;
  border-radius: 10px;
`;
