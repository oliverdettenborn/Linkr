import React, { useState, useContext } from 'react';
import styled from 'styled-components';

export default function Post(props) {
    const { post } = props;
    console.log(post);

    const { username, avatar } = post.user;
    const { text, link, linkTitle, linkDescription, linkImage, id} = post;

    return (
        <Container>
            <div>
                <img src={avatar} />
            </div>
            <ContainerInfos>
                <h1>{username}</h1>
                <p>{text}</p>
                <LinkBox>
                    <div>
                        <h1>{linkTitle}</h1>
                        <p>{linkDescription}</p>
                        <span>{link}</span>
                    </div>
                    <img src={linkImage} />
                </LinkBox>
            </ContainerInfos>
        </Container>
    );
}

const Container = styled.div`
    background: #171717;
    width: 615px;
    margin: 30px auto;
    border-radius: 16px;
    font-family: 'Lato', sans-serif;
    display: flex;
    color: #fff;
    padding: 20px;

    > div {

        > img {
            width: 40px;
            border-radius: 50%;
        }
    }
`;

const ContainerInfos = styled.div`
    padding-left: 15px;

    > h1 {
        font-size: 19px;
        line-height: 23px;
    }

    > p {
        font-size: 17px;
        line-height: 20px;
        color: #B7B7B7;
        padding-top: 10px;
    }
`;

const LinkBox = styled.div`
    background: #171717;
    border: 1px solid #4D4D4D;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;

    div {
        padding: 18px;

        h1 {
            font-size: 16px;
            line-height: 19px;
            color: #CECECE;
            word-break: break-all;
        }

        p {
            font-size: 11px;
            line-height: 13px;
            color: #9B9595;
            margin: 10px auto;
            word-break: break-all;
        }

        span {
            font-size: 11px;
            line-height: 13px;
            color: #CECECE;
            padding-bottom: 10px;
        }
    }
    
    img {
        width: 150px;
        height: auto;
        object-fit: fill;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }
`;
