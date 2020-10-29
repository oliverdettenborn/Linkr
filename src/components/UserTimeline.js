import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import {useParams,useLocation} from 'react-router-dom';
import styled from 'styled-components';

import StylePages from './StylePages';
import UserContext from '../context/UserContext';
import Post from './Post';
import Load from './Load';

export default function UserTimeline() {
  const {user} = useContext(UserContext);
  const location = useLocation();
  let {id,userName} = useParams();
  if(location.pathname === '/my-posts'){
    id = user.user.id;
    userName = user.user.username;
  }

  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/posts?offset=0&limit=2`,{headers: {"User-Token": user.token}})
      .then(response => {
        setPosts(response.data.posts);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(err => {
        alert('Houve uma falha ao obter os posts, por favor atualize a página');
      })
  },[id])
  
  return (
      <StylePages title={(location.pathname === "/my-posts") ? 'my posts' : `${userName}'s post`}>
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