import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Navigation from "./navigation";
import ImageLinkTab from "./imageLinkTab";
import FaceRecognition from "./faceRecognition";
import SignIn from "./signin";
import SignUp from "./signUp";
import Profiles from './Profiles'

const Home = (props) => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [routing, setRouting] = useState("");
  const [signy, setSigny] = useState("signOut");
  const [dataArray, setDataArray] = useState([]);
  const [whetherSignin, setWhetherSignin] = useState();

 

  console.log("Home props  ::", props);

  function onSigny(ev) {
    console.log(ev);
    if (ev !== "signOut") {
      setSigny("login");
    } else {
      setSigny("signOut");
    }
  }
 
  return (
    <AppStyle>
      {props.signedIn ? <Profiles /> : <SignIn />}
      
      
    </AppStyle>

    //   <Navigation routing={routing} signy={onSigny} nowSigny={signy} />

    //   {signy === "signOut" ? (
    //     <div>
    //       <SignIn /> <SignUp />{" "}
    //     </div>
    //   ) : (
    //     <div>
          // <ImageLinkTab
          //   onInputChange={onInputChange}
          //   onButtonCliked={onButtonCliked}
          //   myVal={input}
          // />
          // <FaceRecognition imag={image} name={name} />{" "}
             //     </div>
    //   )}
  );
};

export default Home;

const AppStyle = styled.div`
  padding: 0.9em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
