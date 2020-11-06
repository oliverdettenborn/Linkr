import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';

import Post from './Post';
import UserContext from '../context/UserContext';
import StylePages from './StylePages';
import CreatePost from './CreatePost';
import Load from './Load'

export default function Timeline() {
    const { user } = useContext(UserContext);
    const [ posts, setPosts ] = useState([]);
    const [loading,setLoading] = useState(true);
    const [hasMore,setHasMore] = useState(true);
    const [offset,setOffset] = useState(0);
    const [followers,setFollowers] = useState([]);

    useEffect(() => {
        updatePosts();
        axios
            .get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows',{headers: {"User-Token": user.token}})
            .then(response => {
                setFollowers(response.data.users);
            })
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            updatePosts();
        }, 15000);
        return () => clearInterval(interval);
    },[offset]);

    function addNewPost(newPost){
        setPosts([newPost,...posts]);
    }
    
    function updatePosts() {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/following/posts?offset=${offset}&limit=10`, {headers: {'user-token': user.token}});

        request.then(reply => {
            setPosts([...posts,...reply.data.posts]);
            setLoading(false);
        });

        request.catch(err => {
            alert('Houve uma falha ao obter os posts, por favor atualize a página');
        })
    }

    function handleLoader(){
        setHasMore(false);
        setOffset(offset+10);
    }

    return (
        <StylePages title='timeline'>
            <CreatePost addNewPost={addNewPost} />
            <InfiniteScroll
                pageStart={offset}
                loadMore={handleLoader}
                hasMore={hasMore}
                loader={<Load />}
            >
                {
                loading
                    ? <Load />
                    : followers.length === 0
                            ? <Message>Você não segue ninguém ainda. Procure por perfis na busca.</Message>
                            : posts.length === 0 
                                ? <Message>Nenhuma publicação encontrada.</Message>
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




