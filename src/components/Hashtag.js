import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';

import StylePages from './StylePages';
import UserContext from '../context/UserContext';
import Post from './Post';
import Load from './Load';

export default function Hashtag() {
  const { user } = useContext(UserContext);
  const { hashtag } = useParams();
  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ hasMore, setHasMore ] = useState(true);
  const [ offset, setOffset ] = useState(0);
  const [ hashtagAtual ] = useState(hashtag)
  
  useEffect(() => {
    axios
      .get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag}/posts?offset=${offset}&limit=10`, { headers: {"User-Token": user.token} })
      .then(response => {
        hashtag === hashtagAtual
          ? setPosts([...posts,...response.data.posts])
          : setPosts(response.data.posts)
        setLoading(false);
      })
      .catch(err => {
        alert('Houve uma falha ao obter os posts, por favor atualize a página');
      })
  },[hashtag,offset])

  function handleLoader(){
    setHasMore(false);
    setOffset(offset + 10);
  }
  
  return (
    <StylePages title={`# ${hashtag}`}>
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