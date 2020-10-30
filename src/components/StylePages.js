import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Trending from './Trending';

export default function StylePages(props) {
    return (
        <div className='page'>
            <Header />
            <Container>
                <Title>{props.title}</Title>
                {props.children}
            </Container>
            <Trending />
        </div>
    );
}

const Container = styled.div`
    width: 60%;
    height: 100vh;
    margin: 105px 30% 0 auto;

    @media (max-width: 700px){
        width: 100%;
    }
    @media (min-width: 1500px){
        width: 45%;
    }
`;

const Title = styled.h1`
    height: 64px;
    font-family: Oswald;
    font-style: normal;
    font-weight: bold;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;
    margin-bottom: 30px;
`;