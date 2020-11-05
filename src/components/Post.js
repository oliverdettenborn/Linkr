import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import InfoPost from './InfoPost';
import LikePost from './LikePost';

export default function Post({post}) {
    const { username, avatar, id } = post.user;

    return (
        <Container>
            <div>
                <Link to={`/user/${id}`}>
                    <img src={avatar} alt={username} />
                </Link>
                <LikePost post={post}/>
            </div>
            <InfoPost post={post} username={username} id={id} />
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
