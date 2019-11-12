import React, { useState, useEffect } from "react";
import Clarifai from "clarifai";
import axios from "axios";
import styled from "styled-components";

import Profile from "./profile";
import NavBar from "./NavBar";
import ImageLinkTab from "./imageLinkTab";
import FaceRecognition from "./faceRecognition";

const app = new Clarifai.App({
  apiKey: "c1d94cd11f6341a2a641a6ed55d96cde"
});

const Profiles = props => {
  console.log("Profiles Props:", props);
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [routing, setRouting] = useState("");
  const [signy, setSigny] = useState("signOut");
  const [dataArray, setDataArray] = useState([]);
  const [myName, setMyName] = useState("");
  const [myAge, setMyAge] = useState(0);

  console.log("SEND PROFIE", props);

  function getName(name) {}

  function onInputChange(event) {
    setInput(event.target.value);
  }
  function onButtonCliked() {
    //e.preventDefault();
    //console.log(input);
    console.log("user id :", props.user.id);
    const propsUser = props.user;
    axios
      .post("https://thawing-gorge-06022.herokuapp.com/imageUrl", { input: input })
      .then(res => {
        setName(res.data);
        axios
          .put("https://thawing-gorge-06022.herokuapp.com/image", { id: props.user.id })
          .then(res =>
            setDataArray(
              dataArray.map(e => {
                if (e.id == res.data.id) {
                  e.entries = res.data.entries;
                }
                return { ...e };
              })
            )
          )
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));

    setImage(input);

    setInput("");
  }

  // app.models
  //   .predict(Clarifai.CELEBRITY_MODEL, input)
  //   .then(response => {setName(response.outputs[0].data.regions[0].data.face.identity.concepts[0].name);
  //   axios
  //     .put("http://localhost:8080/image", { id: props.user.id })
  //     .then(res=>setDataArray(dataArray.map(e=>{
  //       if(e.id == res.data.id){
  //         e.entries = res.data.entries;
  //       }
  //       return {...e};
  //     })))
  // })
  // .catch(err => console.log(err));

  function onName(e) {
    console.log(e.target.value);
    setMyName(e.target.value);
  }
  function onAge(e) {
    setMyAge(e.target.value);
  }
  function onNameClick(e) {
    e.preventDefault();
    axios
      .post("https://thawing-gorge-06022.herokuapp.com/form", { name: myName, age: myAge })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetch("https://thawing-gorge-06022.herokuapp.com")
      .then(res => res.json())
      .then(data => setDataArray(data));
  }, []);
  return (
    <ProfileStyler>
      <ImageLinkTab
        onInputChange={onInputChange}
        onButtonCliked={onButtonCliked}
        myVal={input}
      />

      <FaceRecognition imag={image} name={name} />
      <FormStyle>
        <InputStyle
          placeholder="name of patient"
          onChange={onName}
          value={myName}
          name="name"
        />
        <InputStyle
          placeholder="age"
          onChange={onAge}
          value={myAge}
          name="age"
        />
        <button onClick={onNameClick}>Submit</button>
      </FormStyle>

      {dataArray.length > 0 ? (
        dataArray.map((dat, k) => (
          <div key={k}>
            <Profile
              profileData={dat}
              history={props.history}
              clickMyProfile={props.clickMyProfile}
            />
          </div>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </ProfileStyler>
  );
};

export default Profiles;

const InputStyle = styled.input`
  width: 20em;
  background: tomato;
  border: 0.3em solid red;
  border-radius: 0.3em;
  color: black;
  padding: 0.5em;
  margin: 0.2em;
`;
const ProfileStyler = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
