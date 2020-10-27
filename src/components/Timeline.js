import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from './Header';
import Post from './Post';
import UserContext from '../context/UserContext';

export default function Timeline() {
    const { user } = useContext(UserContext);
    const { token } = user;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=0&limit=2", {headers: {'user-token': token}});

        request.then(reply => {
            setPosts(reply.data.posts);
        });
    },[]);

    return (
        <>
            <Header />
            <Container>
                {/*CreatePost*/}
                {posts.map( p => <Post post={p} key={p.id}/> )}
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 610px;
    height: 100vh;
    margin: 95px 420px 0 auto;
`;
