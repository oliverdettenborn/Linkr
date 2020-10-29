import React, { useEffect, useContext, useState } from 'react';
import Post from './Post';
import axios from 'axios';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';

import UserContext from '../context/UserContext';
import StylePages from './StylePages';
import Load from './Load'

export default function LikesTimeline() {
    const { user } = useContext(UserContext);
    const [loading,setLoading] = useState(true);
    const [likedPosts, setLikedPosts] = useState([]);
    const [hasMore,setHasMore] = useState(true);
    const [offset,setOffset] = useState(0);
    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/liked", {headers: {'user-token': user.token}});

        request.then(reply => {
            setLikedPosts([...likedPosts,...reply.data.posts])
            setLoading(false);
        });

        request.catch(err => {
            alert('Houve uma falha ao obter os posts, por favor atualize a página');
        })
    },[offset]);

    function handleLoader(){
        setHasMore(false);
        setOffset(offset+10);
    }

    return (
        <StylePages title='likes'>
            <InfiniteScroll
                pageStart={offset}
                loadMore={handleLoader}
                hasMore={hasMore}
                loader={<Load />}
            >
                {
                    loading
                    ? <Load />
                    : likedPosts.length === 0 
                        ? <Message>Nenhum post foi encontrado.</Message>
                        : likedPosts.map( p => <Post post={p} key={p.id}/> )
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