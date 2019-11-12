import React from "react";
import styled from "styled-components";


// c1d94cd11f6341a2a641a6ed55d96cde

const ImageLinkTab = (props) => {

     function btnClick(e){
         e.preventDefault()
         props.onButtonCliked()
         
        
    }
    function onInputTyped(e){
        props.onInputChange(e)

    }
  return (
      
    <ImageLinkTabStyle>
      <InputT type="text" name="url" value = {props.myVal} onChange={onInputTyped}/>
      <NewButton onClick = {btnClick}>Detect</NewButton>
    </ImageLinkTabStyle>
  );
};

export default ImageLinkTab;

const ImageLinkTabStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const InputT = styled.input`
  border: 0.2em solid aqua;
  border-radius: 0.2em;
  margin: 1em;
  padding: 0.3em;
`;
const NewButton = styled.button`
  background: tomato;
  border-radius: 0.5em;
  color: black;
  padding: 0.5em;
  margin: 0.2em;
  font-weight:600;
  font-size:0.9em;
`;
