import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {useHistory} from 'react-router-dom';

import UserContext from '../context/UserContext';

export default function Header() {
    const { user } = useContext(UserContext);
    const [state, setstate] = useState(false);
    const { avatar } = user.user;
    const history = useHistory();

    //ALTERAR ROTAS NOS SPAN'S
    return (
        <>
            <HeaderStyled>
                <h1>linkr</h1>
                <div onClick={() => setstate(!state)}>
                    {state 
                        ? <FiChevronUp />
                        : <FiChevronDown />
                    }
                    <img src={avatar} />
                </div>
            </HeaderStyled>
            
            <Nav state={state} >
                <span onClick={() => history.push('/')}>My posts</span> 
                <span onClick={() => history.push('/')}>My likes</span>
                <span onClick={() => history.push('/')}>Logout</span>
            </Nav>
            
        </>
    );
}

/* data:
    token: "611808aa-f785-48eb-b140-fe70f6e003d4"
    user:
        avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD"
        email: "thiribeiro142@gmail.com"
        id: 59
        username: "thiago"   */

const HeaderStyled = styled.header`
  background: #151515;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 75px;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  h1 {
     font-family: 'Passion One', cursive;
     font-weight: bold;
     font-size: 50px;
     line-height: 54px;
     letter-spacing: 0.05em;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 25px;
    }

    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin: 10px;
    }
  }
  
`;

const Nav = styled.nav`
    background: #171717;
    border-bottom-left-radius: 10px;
    padding: 15px;
    position: fixed;
    top: ${(props) => props.state ? '60px' : '-200px'};
    right: 0px;
    text-align: center;
    transition: all 200ms linear;
    z-index: 1;

    span {
        display: block;
        font-family: 'Lato', sans-serif;
        font-size: 17px;
        margin: 8px;
        line-height: 21px;
        font-weight: bold;
        color: #fff;
        letter-spacing: 0.05em;
    }
`;   