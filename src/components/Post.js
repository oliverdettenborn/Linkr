import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactHashtag from 'react-hashtag';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import axios from 'axios';

import UserContext from '../context/UserContext';
import { LikeStyled, Hashtag, LinkBox, ContainerInfos, Container } from './StyledPost';

export default function Post({post}) {
    const { username, avatar, id } = post.user;
    const { text, link, linkTitle, linkDescription, linkImage, id: idPost, likes } = post;
    const [ like, setLike ] = useState(false);
    const { user } = useContext(UserContext);
    const [ likesPost, setLikesPost ] = useState(0);
    const history = useHistory();
    
    useEffect(() => {
        likes.forEach((l, index) => {
            l.userId === user.user.id && setLike(true);
            setLikesPost((index + 1));
        });

    },[]);

    function openLink(link) {
        window.open(`${link}`, 'window');
    }

    function likePost() {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${idPost}/like`, post, {headers: {'user-token': user.token}});
        setLike(!like);
        setLikesPost((likesPost + 1));
    }

    function dislikePost() {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${idPost}/dislike`, post, {headers: {'user-token': user.token}});
        setLike(!like);
        setLikesPost((likesPost - 1));
    }

    return (
        <Container>
            <div>
                <Link to={`/user/${username}/${id}`}>
                    <img src={avatar} alt={username} />
                </Link>
                <LikeStyled like={like}>
                    {like 
                        ? <IoMdHeart onClick={() => dislikePost()} />
                        : <IoMdHeartEmpty onClick={() => likePost()} />
                    }
                </LikeStyled>
                
                {like 
                        ? <span>{likesPost} likes</span>
                        : <span>{likesPost} likes</span>
                }
                    
                
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
//estilo movidos para styledPost.js