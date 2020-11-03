import React from 'react';
import styled from 'styled-components';
import ReactHashtag from 'react-hashtag';
import { useHistory } from 'react-router-dom';


import ButtonsPost from './ButtonsPost';

export default function InfoPost({post,username}) {
  const { text, link, linkTitle, linkDescription, linkImage} = post;
  const history = useHistory();

  return (
    <ContainerInfos>
        <ButtonsPost post={post} />
        <h1>{username}</h1>
        <p>
            <ReactHashtag 
                renderHashtag={hashtag => (
                    <Hashtag onClick={() => history.push(`/hashtag/${hashtag.substr(1)}`)}>{hashtag}</Hashtag>
                )}   
            >
                {text}
            </ReactHashtag>
        </p>

        <LinkBox href={link} target='_blank'>
            <div>
                <h1>{linkTitle}</h1>
                <p>{linkDescription}</p>
                <span>{link}</span>
            </div>
            <img src={linkImage} alt={linkTitle} />
        </LinkBox>
    </ContainerInfos>
  )
};

const ContainerInfos = styled.div`
    padding-left: 15px;
    width: 100%;
    position: relative;

    > h1 {
        font-size: 19px;
        line-height: 23px;

        &:hover {
            cursor: pointer;
        }
    }

    > p {
        font-size: 17px;
        line-height: 20px;
        color: #B7B7B7;
        padding-top: 10px;
    }
`;

const LinkBox = styled.a`
    background: #171717;
    border: 1px solid #4D4D4D;
    border-radius: 10px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    &:hover{
        cursor: pointer;
    }

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
        object-fit: cover;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }
`;

const Hashtag = styled.span`
    font-weight: bold;
    color: #fff;
`;
