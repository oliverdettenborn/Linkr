import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserContext from '../context/UserContext';
import {mediaMobile} from './style/media'


export default function ButtonFollow({id}) {
  const { user } = useContext(UserContext);
  const [follow,setFollow] = useState(false);
  const [followers,setFollowers] = useState([]);
  const [sendRequest,setSendRequest] = useState(false)

  useEffect(() => {
    axios
      .get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows',{headers: {"User-Token": user.token}})
      .then(response => {
        setFollowers(response.data.users)
        setFollow(followers.filter(f => f.id.includes(id)).length === 1)
      })
  }, []);

  function changeFollow(){
    setSendRequest(true);
    axios
      .post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/${follow ? 'unfollow' : 'follow'}`,null,{headers: {"User-Token": user.token}})
      .then(() => {
        setFollow(!follow)
        setSendRequest(false);
      })
      .catch(err => {
        setSendRequest(false);
        alert('Não foi possível executar essa operação, tente novamente.');
      })
  }

  return(
    <Button 
      follow={follow}
      onClick={changeFollow}
      disabled={sendRequest ? true : false}
    >
      {sendRequest
        ? <img src='/load.gif' alt='Loading...' />
        : follow 
          ? 'Unfollow' 
          : 'Follow'}
    </Button>
  )
};

const Button = styled.button`
  position: fixed;
  width: 120px;
  height: 30px;
  right: 6%;
  top: 120px;
  border: none;
  border-radius: 5px;
  font-family: 'Lato',sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  background: ${props => props.follow ? "#FFFFFF" : "#1877F2"};
  color: ${props => props.follow ? "#1877F2" : "#FFFFFF"};
  cursor: pointer;

  img{
    height: 40px;
    width: auto;
    margin-top: -10px;
  }
  &:focus{
    outline: transparent;
  }

  ${mediaMobile}{
    position: absolute;
    right: 0;
    width: 80px;
    top: 170px;
  }
`;