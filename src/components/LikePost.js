import React, { useState, useEffect,useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../context/UserContext';
import tooltipText from './TooltipText';

export default function LikePost({post}) {
    const { user } = useContext(UserContext);
    const { id: idPost, likes } = post;
    const [ isLiked, setIsLiked ] = useState(false);
    const [ quantityLikesPost, setQuantityLikesPost ] = useState(0);
    

    useEffect(() => {
        likes.forEach((l, index) => {
            (l.userId) ? (l.userId === user.user.id && setIsLiked(true)) : (l.id === user.user.id && setIsLiked(true));
            setQuantityLikesPost((index + 1));
        });
    },[]);

    function likePost() {
        axios
            .post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${idPost}/like`, post, {headers: {'user-token': user.token}});
        setIsLiked(!isLiked);
        setQuantityLikesPost((quantityLikesPost + 1));
    }

    function dislikePost() {
        axios
            .post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${idPost}/dislike`, post, {headers: {'user-token': user.token}});
        setIsLiked(!isLiked);
        setQuantityLikesPost((quantityLikesPost - 1));
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
                ?   <span 
                        data-tip={tooltipText(likes, isLiked, quantityLikesPost, user)} 
                        data-class={'tooltip'} 
                        data-place={'bottom'} 
                        data-arrow-color={'rgba(255, 255, 255, 0.9)'}>
                            {quantityLikesPost} likes
                    </span>
                :   <span 
                        data-tip={tooltipText(likes, isLiked, quantityLikesPost, user)} 
                        data-class={'tooltip'} 
                        data-place={'bottom'} 
                        data-arrow-color={'rgba(255, 255, 255, 0.9)'}>
                            {quantityLikesPost} likes
                    </span>
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
