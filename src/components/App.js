import React from "react";
import logo from "../logo.svg";
import { connect } from "react-redux";
import { ping } from "../actions";
import "rxjs";
import styled from "styled-components";
import PropTypes from "prop-types";

const Outer = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  > h2 {
    color: red;
  }
`;

const Button = styled.button`
  background-color: grey;
  height: 30px;
  padding: 10px;
  color: yellow;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 100px;
`;

const App = ({ isPinging, ping }) => (
  <Outer>
    <Header>
      <Logo src={logo} alt="logo" />
      <h2>is pinging: {isPinging.toString()}</h2>
    </Header>
    <Button onClick={ping}>Start PING</Button>
  </Outer>
);
App.propTypes = {
  isPinging: PropTypes.bool.isRequired,
  ping: PropTypes.func.isRequired
};

export default connect(({ isPinging }) => ({ isPinging }), { ping })(App);
