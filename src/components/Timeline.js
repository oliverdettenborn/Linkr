import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Post from './Post';
import UserContext from '../context/UserContext';
import StylePages from './StylePages';
import CreatePost from './CreatePost';

export default function Timeline() {
    const { user } = useContext(UserContext);
    const { token } = user;
    const [ posts, setPosts ] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=0&limit=2", {headers: {'user-token': token}});

        request.then(reply => {
            setPosts(reply.data.posts);
            setLoading(false);
        });

        request.catch(err => {
            alert('Houve uma falha ao obter os posts, por favor atualize a página');
          })
    },[]);

    return (
        <StylePages title='timeline'>
            <CreatePost />

            {loading 
                ? <Message>Loading...</Message>
                : posts.length == 0 
                    ? <Message>Nenhum post foi encontrado.</Message>
                    : posts.map( p => <Post post={p} key={p.id}/> )
            }
        </StylePages>  
    );
}

const Message = styled.div`
    color: red;
`;

