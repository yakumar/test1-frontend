import React from 'react'
import styled from 'styled-components'

const FaceRecognition = (props) => {
    return (
        <FaceRecognitionStyle>
            
                <img src={props.imag} />
                <h2>{props.name}</h2>
        
            
        </FaceRecognitionStyle>
    )
}

export default FaceRecognition

const FaceRecognitionStyle = styled.div`
    margin:2em;
    
    display:flex;
    flex-direction:column;
    text-align:center;
    


`
