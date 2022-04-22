/**********************
 * Second Level File *
 **********************/

import React, { useEffect } from "react";
import "./index.css";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Login from "../src/Pages/LoginPage.js";
import Home from "../src/Pages2/HomePage.js";
import Amplify, { API } from "aws-amplify";
import awsconfig from "./aws-exports";
import styled from "styled-components";
Amplify.configure(awsconfig);

export default function App() {
  return (
    <ParentWrapper>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Home} exact />
          </Routes>
        </div>
      </BrowserRouter>
    </ParentWrapper>
  );
}

// Makes it so app doesn't flow off screen
const ParentWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;

const hiiiii = styled.div``;
