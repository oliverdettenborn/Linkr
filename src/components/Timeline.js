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

    function addNewPost(newPost){
        setPosts([newPost,...posts]);
    }

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=0&limit=10", {headers: {'user-token': token}});

        request.then(reply => {
            setPosts(reply.data.posts);
            setTimeout(() => {
                setLoading(false);
              }, 1000);
        });

        request.catch(err => {
            alert('Houve uma falha ao obter os posts, por favor atualize a página');
          })
    },[]);

    return (
        <StylePages title='timeline'>
            <CreatePost addNewPost={addNewPost} />

            {loading 
                ? <Load />
                : posts.length === 0 
                    ? <Message>Nenhum post foi encontrado.</Message>
                    : posts.map( p => <Post post={p} key={p.id}/> )
            }
        </StylePages>  
    );
}

const Message = styled.div`
    color: #FFF;
    font-size: 30px;
    margin: 20px;
`;

const Load = styled.div`
  background-image: url('/loadBig.gif');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 615px;
  height: 300px;
`;

