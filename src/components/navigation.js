import React from "react";
import styled from "styled-components";

const Navigation = (props) => {
  console.log(props)
  return (
    
    <NavigationStyle>
    
      {props.nowSigny !== 'signOut' ? <h2 onClick={()=>props.signy('signOut')}>Signout</h2>:
        <div>
      <h2 onClick={()=> props.signy('login')}>Login</h2>
      <h2 onClick={()=> props.signy('login')}>Sign UP</h2>
      </div>

    }
    
    </NavigationStyle>
  );
};

export default Navigation;

const NavigationStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
