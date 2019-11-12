import React, { useState } from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import SignIn from "./components/signin";
import SignUp from "./components/signUp";
import Profiles from "./components/Profiles";
import NavBar from "./components/NavBar";
import MyProfile from "./components/myProfile";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [myId, setMyId] = useState('');
  const [myUser, setMyUser] = useState("");
  const [entries, setEntries] = useState(0);
  const [profId, setProfId] = useState(0);
  const [userObj, setUserObj] = useState({});
  
  function onSigned() {
    setSignedIn(!signedIn);
  }

  function getId(i) {
   //setMyUser(Object.assign(i, {entries:x.entries}));
   // setMyId(Object.assign(i, {entries:x.entries}));
   setUserObj(i);

  }
  function clickMyProfile(e){
    setProfId(e);

  }
  
  

  return (
    <Router>
      <Route
        path="/"
        render={props => {
          return (
            <NavBar
              history={props.history}
              signedIn={signedIn}
              changeSign={onSigned}
            />
          );
        }}
      />
      <Route
        exact
        path="/"
        render={props => {
          return <Home history={props.history} signedIn={signedIn} />;
        }}
      />
      <Route
        exact
        path="/signin"
        render={props => {
          return (
            <SignIn
              getId={getId}
              history={props.history}
              signedIn={signedIn}
              changeSign={onSigned}
            />
          );
        }}
      />
      <Route
        exact
        path="/signup"
        render={props => {
          return (
            <SignUp
              getId={getId}
              history={props.history}
              signedIn={signedIn}
              changeSign={onSigned}
            />
          );
        }}
      />
      <Route
        exact
        path="/profiles"
        render={props => {
          return (
            <Profiles
              history={props.history}
              myEntries={myId}
              user={userObj}
              getId={getId}
              clickMyProfile={clickMyProfile}
            />
          );
        }}
      />
      <Route
        exact
        path="/myProfile"
        render={props => {
          return (
            <MyProfile
              history={props.history}
              
              profId={profId}
              
            />
          );
        }}
      />
    </Router>
  );
}

export default App;

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

// app.models
// .predict(
// Clarifai.COLOR_MODEL,
//     // URL
//     "https://samples.clarifai.com/metro-north.jpg"
// )
// .then(function(response) {
//     // do something with responseconsole.log(response);
//     },
//     function(err) {// there was an error}
// );
