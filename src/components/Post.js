import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Post(props) {
    const { post } = props;
    const { username, avatar, id } = post.user;
    const { text, link, linkTitle, linkDescription, linkImage} = post;

    function openLink(link) {
        window.open(`${link}`, 'window');
    }

    return (
        <Container>
            <div>
                <Link to={`/user/${username}/${id}`}>
                    <img src={avatar} />
                </Link>
            </div>
            <ContainerInfos>
                <h1>{username}</h1>
                <p>{text}</p>
              
                <LinkBox onClick={() => openLink(link)}>
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

//

const Container = styled.div`
    background: #171717;
    width: 100%;
    margin: 30px auto;
    border-radius: 16px;
    font-family: 'Lato', sans-serif;
    display: flex;
    color: #fff;
    padding: 20px;

    > div {
        a {
            > img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
    }
`;

const ContainerInfos = styled.div`
    padding-left: 15px;
    width: 100%;

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
    justify-content: space-between;

    div {
        padding: 18px;

        h1 {
            font-size: 16px;
            line-height: 19px;
            color: #CECECE;
            overflow-wrap: break-word;
            word-break: break-all;
        }

        p {
            font-size: 11px;
            line-height: 13px;
            color: #9B9595;
            margin: 10px auto;
            overflow-wrap: break-word;
            word-break: break-all;
        }

        span {
            font-size: 11px;
            line-height: 13px;
            color: #CECECE;
            padding-bottom: 10px;
            overflow-wrap: break-word;
            word-break: break-all;
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
