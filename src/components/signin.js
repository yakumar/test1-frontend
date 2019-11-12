import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { setState } from "expect/build/jestMatchersObject";

const SignIn = (props) => {
  console.log(props)
  const [errorMsg, setErrorMsg] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");

  function onEmailChange(e) {
    setEmailVal(e.target.value);
  }

  function onPassChange(e) {
    setPassVal(e.target.value);
  }

  function onButtonClick(e) {
    e.preventDefault();

    axios.post('https://thawing-gorge-06022.herokuapp.com/signin', {email:emailVal, password:passVal})
        .then(res=>{
            console.log('SIGNIN res :' , res.data);
            props.getId(res.data)
            props.history.push('/profiles')
            props.changeSign();
            
        })
        .catch(e=>{
            console.log(e);
            setErrorMsg("Wrong User credentials");

        })

  }
  return (
    <SigninStyle>
      <h3>Sign In</h3>
      <h4>{errorMsg}</h4>
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
