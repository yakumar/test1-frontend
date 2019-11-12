import React from 'react'
import styled from 'styled-components'

const Profile = (props) => {
   // console.log('profile props:',props);

    function profileCheck(e){
        //console.log(e);
        props.clickMyProfile(e);
        props.history.push('/myProfile')



    }
   
    return (
        <ProfileStyle>

        <h4 onClick={()=>profileCheck(props.profileData.id)}>Click on Profile</h4>

        <NewStyle> {props.profileData.id}</NewStyle>

            <NewStyle> {props.profileData.name}</NewStyle>
            <NewStyle>{props.profileData.email}</NewStyle>
            <NewStyle> {props.profileData.entries}</NewStyle>

            
        </ProfileStyle>
    )
}

export default Profile

const ProfileStyle = styled.div`
    margin:0.3em;
    padding:0.5em;
    color:tomato;

    border:1px solid greenyellow;
    display:flex;
    justify-content:space-around;
    align-items:center;


`

const NewStyle = styled.div`
    padding:1em;

`


