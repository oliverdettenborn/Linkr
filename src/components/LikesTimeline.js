import React, { useEffect, useContext, useState } from 'react';
import Post from './Post';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../context/UserContext';
import StylePages from './StylePages';
import Load from './Load'

export default function LikesTimeline() {
    const { user } = useContext(UserContext);
    const [loading,setLoading] = useState(false);
    const [likedPosts, setLikedPosts] = useState([]);

    useEffect(() => {
      setLoading(true);
      const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/liked", {headers: {'user-token': user.token}});

      request.then(reply => {
          setLikedPosts(reply.data.posts);
          setTimeout(() => {
              setLoading(false);
            }, 1000);
      });

      request.catch(err => {
          alert('Houve uma falha ao obter os posts, por favor atualize a página');
        })
    },[]);

    return (
        <StylePages title='likes'>
          {loading 
                ? <Load />
                : likedPosts.length === 0 
                    ? <Message>Nenhum post foi encontrado.</Message>
                    : likedPosts.map( p => <Post post={p} key={p.id}/> )
          }
        </StylePages>  
    );
}

const Message = styled.div`
    color: #FFF;
    font-size: 30px;
    margin: 20px;
`;