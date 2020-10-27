import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from './Header';
import Post from './Post';
import UserContext from '../context/UserContext';
import StylePages from './StylePages';
import CreatePost from './CreatePost';

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
        <StylePages title='timeline'>
            <CreatePost />
            {posts.map( p => <Post post={p} key={p.id}/> )}
        </StylePages>  
    );
<<<<<<< HEAD
}
=======
}

>>>>>>> b76f276393ac9a60245ee34d5cbd455d0a9ad35c
