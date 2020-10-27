import React, {useState,useEffect,useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from '../context/UserContext';

export default function Trending() {
  const {user} = useContext(UserContext);
  const tokenUsuario = {"User-Token": user.token};
  const [trendings,setTrendings] = useState([]);

  useEffect(() => {
      axios
        .get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending",{headers: tokenUsuario})
        .then(response =>
          setTrendings(response.data.hashtags)
        )
  },[])

  return(
    <Container>
      <h1>trending</h1>
      {trendings.map(hashtag => {
        <Item key={hashtag.id}>
          # {hashtag.name}
        </Item>
      })}
    </Container>
  )
};

const Container = styled.aside`
  width: 300px;
  height: 406px;
  position: fixed;
  top: 105px;
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
  margin-bottom: 5px;
`;