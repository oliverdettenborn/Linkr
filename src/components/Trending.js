import React, {useState,useEffect,useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom';

import UserContext from '../context/UserContext';

export default function Trending() {
  const {user} = useContext(UserContext);
  const tokenUsuario = {"User-Token": user.token};
  const [trendings,setTrendings] = useState([]);

  useEffect(() => {
    const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending",{headers: tokenUsuario})
    request.then(response => {
      setTrendings(response.data.hashtags)
    })
  },[])

  return(
    <Container>
      <h1>trending</h1>
      {trendings.map(hashtag => 
        <Link to={`/hashtag/${hashtag.name}`}>
          <Item key={hashtag.id}>
            # {hashtag.name}
          </Item>
        </Link>
      )}
    </Container>
  )
};

const Container = styled.aside`
  width: 20%;
  height: 406px;
  position: fixed;
  top: 199px;
  right: 6%;
  background: #171717;
  border-radius: 16px;

  h1{
    width: 100%;
    padding: 20px 20px 10px 20px;
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    color: #FFFFFF;
    border-bottom: 1px solid #484848;
    margin-bottom: 10px;
  }

  @media (max-width: 700px){
    display: none;
  }
`;

const Item = styled.div`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  padding: 0 20px;
  margin-bottom: 10px;
`;