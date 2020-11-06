import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import {useParams,useLocation} from 'react-router-dom';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';

import StylePages from './StylePages';
import UserContext from '../context/UserContext';
import Post from './Post';
import Load from './Load';
import ButtonFollow from './ButtonFollow';

export default function UserTimeline() {
  const {user} = useContext(UserContext);
  const location = useLocation();
  let {id} = useParams();
  if(location.pathname === '/my-posts'){id = user.user.id;}

  const [posts,setPosts] = useState([]);
  const [profile,setProfile] = useState({});
  const [loading,setLoading] = useState(true);
  const [hasMore,setHasMore] = useState(true);
  const [offset,setOffset] = useState(0);
  
  useEffect(() => {
    const userRequest = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}`,{headers: {"User-Token": user.token}})
    userRequest.then(response => setProfile(response.data.user))
  },[id])

  useEffect(() => {
    const postRequest = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/posts?offset=${offset}&limit=2`,{headers: {"User-Token": user.token}})
    postRequest.then(response => {
      setPosts([...posts,...response.data.posts])
      setLoading(false);
    })
    postRequest.catch(err => {
      alert('Houve uma falha ao obter os posts, por favor atualize a página');
    })
  },[id,offset])

  function handleLoader(){
    setHasMore(false);
    setOffset(offset+10);
  }
  
  return (
      <StylePages 
        title={
          (location.pathname === "/my-posts" || (profile.id === user.user.id)) 
            ? 'my posts' 
            : `${profile.username}'s post`}
        avatar={profile.avatar}
      >
        {location.pathname !== '/my-posts' && (profile.id !== user.user.id) && <ButtonFollow id={profile.id} />}
        <InfiniteScroll
          pageStart={offset}
          loadMore={handleLoader}
          hasMore={hasMore}
          loader={<Load />}
        >
          {
            loading
              ? <Load />
              : posts.length === 0
                ? <Message>Nenhum post foi encontrado.</Message>
                : posts.map(p => <Post post={p} key={p.id} />)
          }
        </InfiniteScroll>
      </StylePages>  
  );
}
const Message = styled.div`
  color: #FFF;
  font-size: 30px;
  margin: 20px;
`;