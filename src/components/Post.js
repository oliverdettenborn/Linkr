import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactHashtag from 'react-hashtag';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import {AiFillDelete} from 'react-icons/ai';
import {HiPencil} from 'react-icons/hi';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';

import UserContext from '../context/UserContext';
import { LikeStyled, Hashtag, LinkBox, ContainerInfos,ContainerButtons, Container } from './StyledPost';

export default function Post({post}) {
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

    function likePost() {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${idPost}/like`, post, {headers: {'user-token': user.token}});
        setIsLiked(!isLiked);
        setLikesPost((likesPost + 1));
    }

    function dislikePost() {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${idPost}/dislike`, post, {headers: {'user-token': user.token}});
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
                <ContainerButtons>
                    <HiPencil />
                    <AiFillDelete />
                </ContainerButtons>
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
        </Container>
    );
}
//estilo movidos para styledPost.js
