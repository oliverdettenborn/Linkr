import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import ReactHashtag from 'react-hashtag';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import axios from 'axios';
import ReactTooltip from 'react-tooltip';

import UserContext from '../context/UserContext';

export default function Post(props) {
    const { post } = props;
    const { username, avatar, id } = post.user;
    const { text, link, linkTitle, linkDescription, linkImage, id: idPost, likes } = post;
    const [ isLiked, setIsLiked ] = useState(false);
    const { user } = useContext(UserContext);
    const [ likesPost, setLikesPost ] = useState(0);
    const history = useHistory();
    
    useEffect(() => {
        likes.forEach((l, index) => {
            l.userId === user.user.id && setIsLiked(true);
            setLikesPost((index + 1));
        });

    },[]);

    function openLink(link) {
        window.open(`${link}`, 'window');
    }

    function likePost() {
        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${idPost}/like`, post, {headers: {'user-token': user.token}});
        setIsLiked(!isLiked);
        setLikesPost((likesPost + 1));
    }

    function dislikePost() {
        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${idPost}/dislike`, post, {headers: {'user-token': user.token}});
        setIsLiked(!isLiked);
        setLikesPost((likesPost - 1));
    }

    function tooltipText(likes, isLiked) {
        let text = "";

        if(likesPost === 0) return "Sem curtidas";

        let likesUsers = likes.map(like => {
            return like["user.username"];
        });

        if(isLiked) {
            if(likesPost === 1) return "Você curtiu isso."

            likesUsers = likesUsers.filter(u => u !== user.user.username);
            if(likesPost === 2) return `Você e ${likesUsers[0]} curtiram isso`;

            text = `Você e ${likesUsers[0]} e outra(s) ${likesUsers.length - 1} pessoa(s) curtiram isso`;
        } else {
            if(likesPost === 1) return `${likesUsers[0]} curtiu isso.`
            if(likesPost === 2) return `${likesUsers[0]} e ${likesUsers[1]} curtiram isso.`

            text = `${likesUsers[0]}, ${likesUsers[1]} e outra(s) ${likesUsers.length - 2} pessoa(s) curtiram isso`;
        }

        return text;
    }

    return (
        <Container>
            <div>
                <Link to={`/user/${username}/${id}`}>
                    <img src={avatar} alt={username} />
                </Link>
                <LikeStyled isLiked={isLiked}>
                    {isLiked 
                        ? <IoMdHeart onClick={() => dislikePost()} />
                        : <IoMdHeartEmpty onClick={() => likePost()} />
                    }
                </LikeStyled>
                
                {isLiked
                    ? <span data-tip={tooltipText(likes, isLiked)} data-class={'tooltip'} data-place={'bottom'} data-arrow-color={'rgba(255, 255, 255, 0.9)'}>{likesPost} likes</span>
                    : <span data-tip={tooltipText(likes, isLiked)} data-class={'tooltip'} data-place={'bottom'} data-arrow-color={'rgba(255, 255, 255, 0.9)'}>{likesPost} likes</span>
                }   
                <ReactTooltip />
            </div>
            <ContainerInfos>
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
              
                <LinkBox onClick={() => openLink(link)}>
                    <div>
                        <h1>{linkTitle}</h1>
                        <p>{linkDescription}</p>
                        <span>{link}</span>
                    </div>
                    <img src={linkImage} alt={linkTitle} />
                </LinkBox>
            </ContainerInfos>
        </Container>
    );
}

const Container = styled.div`
    background: #171717;
    width: 100%;
    margin: 30px auto;
    border-radius: 16px;
    font-family: 'Lato', sans-serif;
    display: flex;
    color: #fff;
    padding: 15px;

    @media (max-width: 700px){
        border-radius: 0;
    }

    > div:first-child {
        text-align: center;
        a {
            > img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
        span {
            font-size: 11px;
            color: #fff;
        }
        .tooltip {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 6px;
            color: #505050;
        }
    }
`;

const ContainerInfos = styled.div`
    padding-left: 15px;
    width: 100%;

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

const LinkBox = styled.div`
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

const LikeStyled = styled.div`
    svg {
        font-size: 25px;
        margin-top: 10px;
        color: ${props => props.isLiked ? "red" : "#fff"};
    }
`;

