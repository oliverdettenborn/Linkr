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

/*const post = {
        "id": 9,
        "text": "Echa lá #react #guanabara",
        "link": "https://medium.com/rocketseat/um-guia-para-iniciantes-no-react-js-80e1ac357649",
        "linkTitle": "Um Guia para Iniciantes no React.js",
        "linkDescription": "Para outros posts sobre React, JavaScript, .Net entre outras tecnologias confira meu site pessoal: thiagoreis.dev. A biblioteca React.js foi lançada em 2013 pelo Facebook. Seu foco não é ser um…",
        "linkImage": "https://miro.medium.com/max/1200/1*-dy70uysIH0N9MfVVitzgg.png",
        "user": {
          "id": 3,
          "username": "maleskena",
          "avatar": "data:image/jpeg;base64,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"
        }
    }


*/

const Container = styled.div`
    background: #171717;
    width: 610px;
    margin: 70px auto;
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
        }

        p {
            font-size: 11px;
            line-height: 13px;
            color: #9B9595;
            margin: 10px auto;
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
        object-fit: contain;
    }
`;
