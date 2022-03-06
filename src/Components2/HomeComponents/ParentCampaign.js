import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopLeft from "../HomeComponents/TopLeftCard";
import BottomLeft from "../HomeComponents/BottomLeftCard";
import TopRight from "../HomeComponents/TopRightCard";
import BottomRight from "../HomeComponents/BottomRightCard";

export default function ParentCampaign() {
  return (
    <Wrapper>
      <VStack>
        <HStack>
          <TopLeft />
          <TopRight />
        </HStack>
        <HStack>
          <BottomLeft />
          <BottomRight />
        </HStack>
      </VStack>
    </Wrapper>
  );
}

const VStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div``;
