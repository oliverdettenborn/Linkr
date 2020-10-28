import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import StylePages from './StylePages';
import UserContext from '../context/UserContext';
import Post from './Post';

export default function Hashtag() {
  const {user} = useContext(UserContext);
  const tokenUsuario = {"User-Token": user.token};
  const {hashtag} = useParams();
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag}/posts?offset=0`,{headers: tokenUsuario})
      .then(response => {
        setPosts(response.data.posts);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(err => {
        alert('Houve uma falha ao obter os posts, por favor atualize a página');
      })
  },[hashtag])
  
  return (
      <StylePages title={`# ${hashtag}`}>
        {
          loading
            ? <Load />
            : posts.length === 0
              ? <Message>Nenhum post foi encontrado.</Message>
              : posts.map(p => <Post post={p} key={p.id} />)
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