import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {useHistory,Link} from 'react-router-dom';

import UserContext from '../context/UserContext';
import SearchProfile from './SearchProfile';

export default function Header() {
    const { user } = useContext(UserContext);
    const [state, setstate] = useState(false);
    const { avatar,username } = user.user;
    const history = useHistory();

    function handleLogout() {
        localStorage.removeItem('@linkr: JWT_TOKEN');
        history.push('/');
    }

    return (
        <>
            <HeaderStyled>
                <h1>
                    <Link to='/timeline'>linkr</Link>
                </h1>
                <Menu onClick={() => setstate(!state)}>
                    {state 
                        ? <FiChevronUp />
                        : <FiChevronDown />
                    }
                    <img src={avatar} alt={username} />
                </Menu>
                <Nav state={state} >
                    <span onClick={() => history.push(`/my-posts`)}>My posts</span> 
                    <span onClick={() => history.push(`/my-likes/`)}>My likes</span>
                    <span onClick={handleLogout}>Logout</span>
                </Nav>
            </HeaderStyled>
            <SearchProfile />
        </>
    );
}

const HeaderStyled = styled.header`
    background: #151515;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 75px;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;

    h1 {
        font-family: 'Passion One', cursive;
        font-weight: bold;
        font-size: 50px;
        line-height: 54px;
        letter-spacing: 0.05em;
    }
`;

const Menu = styled.div`
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
    z-index: 4;

    span {
        display: block;
        font-family: 'Lato', sans-serif;
        font-size: 17px;
        margin: 8px;
        line-height: 21px;
        font-weight: bold;
        color: #fff;
        letter-spacing: 0.05em;
        cursor: pointer;
    }
`;   