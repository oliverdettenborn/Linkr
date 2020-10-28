import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Trending from './Trending';

export default function StylePages(props) {
    return (
        <>
            <Header />
            <Container>
                <Title>{props.title}</Title>
                {props.children}
            </Container>
            <Trending />
        </>
    );
}

const Container = styled.div`
    width: 610px;
    height: 100vh;
    margin: 105px auto 0 auto;
`;

const Title = styled.h1`
    width: 145px;
    height: 64px;
    font-family: Oswald;
    font-style: normal;
    font-weight: bold;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;
    margin-bottom: 30px;
`;