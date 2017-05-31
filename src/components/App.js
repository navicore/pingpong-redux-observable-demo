import React from "react";
import logo from "../logo.svg";
import { connect } from "react-redux";
import { ping } from "../actions";
import "rxjs";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Outer = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  > h2 {
    color: palevioletred;
  }
`;

const Body = styled.div`
  background-color: papayawhip;
  height: 200px;
  padding: 20px;
`;

const Intro = styled.p`
  font-size: large;
`;

const Button = styled.button`
  background-color: lightgrey;
  font-size: small;
  height: 50px;
  padding: 10px;
  color: palevioletred;
`;

const Logo = styled.img`
  animation: ${rotate360} infinite 30s linear;
  ${props => props.backwards && "animation-direction: reverse"};
  height: 100px;
`;

const App = ({ isPinging, ping }) => (
  <Outer>
    <Header>
      <Logo src={logo} alt="logo" />
      <Logo src={logo} alt="logo" backwards={isPinging} />
      <h2>is pinging: {isPinging.toString()}</h2>
    </Header>
    <Body>
      <Intro>Press the button - demo of Styled Components</Intro>
      <Button onClick={ping}>Start PING</Button>
    </Body>
  </Outer>
);
App.propTypes = {
  isPinging: PropTypes.bool.isRequired,
  ping: PropTypes.func.isRequired
};

export default connect(({ isPinging }) => ({ isPinging }), { ping })(App);
