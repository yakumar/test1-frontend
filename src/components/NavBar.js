import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = props => {
  console.log(props);

  function onSignOut(e) {
    props.history.push("/");
    props.changeSign();
  }
  return (
    <NavStyle>
      {props.signedIn ? (
        <LinkStyle to="#" onClick={onSignOut}>
          signout
        </LinkStyle>
      ) : (
        <div>
          <LinkStyle to="/">Home</LinkStyle>
          <LinkStyle to="/signup">Register</LinkStyle>
        </div>
      )}
    </NavStyle>
  );
};

export default NavBar;

const NavStyle = styled.nav`
  color: tomato;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  font-weight: 500;
  link {
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;

const LinkStyle = styled(Link)`
  color: violet;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
