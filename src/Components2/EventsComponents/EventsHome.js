import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tooling from "./Tooling";

export default function EventsHome() {
  const [screen, setScreen] = useState(1);

  return (
    <div>
      {screen == 1 ? (
        <Button onClick={() => setScreen(2)}>Click Me</Button>
      ) : (
        <Tooling />
      )}
    </div>
  );
}

const Button = styled.div`
  position: absolute;
  width: 109px;
  height: 34px;
  left: 941px;
  top: 369px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* Low */
  box-shadow: 2px 5px 20px #f1f1f1;
  border-radius: 10px;
`;
