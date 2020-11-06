import React from 'react';
import styled from 'styled-components';
import { mediaMobile, mediaBigScreen } from './style/media';
import Header from './Header';
import Trending from './Trending';

export default function StylePages(props) {
    return (
        <div className='page'>
            <Header />
            <Container>
                <Title>
                    {props.avatar && <img src={props.avatar} />}
                    {props.title}
                </Title>
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

    ${mediaMobile}{
        width: 100%;
        margin-top: 150px;
    }
    ${mediaBigScreen}{
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
    display: flex;
    align-items: center;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }
    ${mediaMobile}{
        font-size: 25px;
    }
`;