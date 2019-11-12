import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { red } from "ansi-colors";

const SignIn = (props) => {

  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");

  const [errorVal, setErrorVal] = useState("");

  function onEmailChange(e) {
    setEmailVal(e.target.value);
  }

  function onPassChange(e) {
    setPassVal(e.target.value);
  }

  function onButtonClick(e) {
    e.preventDefault();
    console.log(emailVal)

    axios.post('https://thawing-gorge-06022.herokuapp.com/register', {email:emailVal, password:passVal})
        .then(res=>{
            console.log(res.dats);
            props.getId(res.data)
            props.history.push('/profiles')
            props.changeSign();
            
        })
        .catch(e=>{
            console.log('From React ::',e);
            setErrorVal('User email Already exists...');
        })

  }
  return (
    <SigninStyle>
      <h3>Sign UP</h3>
        <h4 style={{color:red, fontWeight:'700'}}>{errorVal}</h4>
      <InputStyle
        type="email"
        placeholder="username"
        onChange={onEmailChange}
        value={emailVal}
      />
      <InputStyle
        type="password"
        placeholder="password"
        onChange={onPassChange}
        value={passVal}
      />
      <ButtonStyle onClick={onButtonClick}>Submit</ButtonStyle>
    </SigninStyle>
  );
};

export default SignIn;

const SigninStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled.bo;
const InputStyle = styled.input`
  border: 0.2em solid red;
  border-radius: 0.5em;
  margin: 0.4em;
  padding: 0.5em;
  text-align: start;
`;
const ButtonStyle = styled.button`
  color: black;
  background: tomato;
  border-radius: 0.3em;
  padding: 0.9em;
`;
