import React, {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import {DebounceInput} from 'react-debounce-input';
import {BiSearch} from 'react-icons/bi';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import UserContext from '../context/UserContext';

export default function SearchProfile() {
  const { user } = useContext(UserContext);
  const [userSearch,setUserSearch] = useState([]);
  const [textInput,setTextInput] = useState('');

  useEffect(() => {
    setUserSearch([]);
    if(textInput === '') return

    axios
      .get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/search?username=${textInput}`,{headers: {'user-token': user.token}})
      .then(response => 
        setUserSearch(response.data.users.sort((a,b) => {
          return (a.isFollowingLoggedUser) ? -1 : (b.isFollowingLoggedUser ? 1 : 0)
        }))
      )
  },[textInput])

  return (
    <Container>
      <ContainerSearch>
        <DebounceInput
          placeholder='Search for people and friends'
          minLength={3}
          debounceTimeout={300}
          onChange={e => setTextInput(e.target.value)}
          value={textInput}
        />
        <BiSearch />
      </ContainerSearch>
      <Profiles>
        {userSearch.map(p => 
          user.user.id !== p.id &&
          <Link to={`/user/${p.username}/${p.id}`}>
            <User key={p.id}>
              <img src={p.avatar} alt={p.username} />
              <h6>{p.username}</h6>
              {p.isFollowingLoggedUser && <span>• following</span>}
            </User>
          </Link>
        )}
      </Profiles>
    </Container>
  )
};

const Container = styled.div`
  width: 40%;
  border-radius: 8px;
  position: relative;
`;

const Profiles = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  z-index: -1;
  padding-top: 45px;
  background: #E7E7E7;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
`;

const User = styled.div`
  font-family: 'Lato',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  img{
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  h6{
    color: #515151;
    margin-right: 5px;
  }
  span{
    color: #C5C5C5;
  }
`;

const ContainerSearch = styled.div`
  width: 100%;
  height: 45px;
  flex-shrink: 0;
  background: #FFFFFF;
  border-radius: 8px;
  position: relative;

  input{
    width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    border-radius: inherit;
    background: transparent;
    padding: 17px 30px 17px 17px;
    font-family: 'Lato',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #C6C6C6;
  }
  svg{
    color: #C6C6C6;
    font-size: 20px;
    position: absolute;
    right: 5px;
    top: calc((45px - 20px) / 2);
  }
`;