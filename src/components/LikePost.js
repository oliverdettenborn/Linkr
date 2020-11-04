import React, { useState, useEffect,useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../context/UserContext';

export default function LikePost({post}) {
    const { user } = useContext(UserContext);
    const { id: idPost, likes } = post;
    const [ isLiked, setIsLiked ] = useState(false);
    const [ likesPost, setLikesPost ] = useState(0);

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
    
    return(
        <>
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
        </>
    )
};

const LikeStyled = styled.div`
    svg {
        font-size: 25px;
        margin-top: 10px;
        color: ${props => props.isLiked ? "red" : "#fff"};
    }
`;
