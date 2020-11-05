import React,{useContext,useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {CgPin} from 'react-icons/cg';

import UserContext from '../context/UserContext';

export default function CreatePost(props) {
  const {user} = useContext(UserContext);
  const [publishing, setPublishing] = useState(false);
  const [geolocation, setGeolocation] = useState(null);


  function handleLocationUser(){
    if ("geolocation" in navigator) {
      (geolocation === null)
        ? navigator.geolocation.getCurrentPosition(position => setGeolocation({latitude: position.coords.latitude, longitude: position.coords.longitude}))
        : setGeolocation(null)
    } else {
      alert("Infelizmente o serviço de geolocalização não é suportado pelo seu navegador.");
      setGeolocation(null);
    }
  }

  function submitPost(event){
    event.preventDefault();
    setPublishing(true)
    const {link,text} = event.target.elements
    const dataPost = {"link": link.value, "text": text.value,geolocation};

    axios
      .post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts",dataPost,{headers: {"User-Token": user.token}})
      .then(response => {
        props.addNewPost(response.data.post);
        setPublishing(false);
        link.value = '';
        text.value = '';
      })
      .catch(err => {
        alert("Houve um erro ao publicar seu link");
        setPublishing(false);
      })
  }

  return(
    <Container> 
      <img src={user.user && user.user.avatar} alt={user.user.username} />
      <form onSubmit={submitPost}>
        <label>
          O que você tem pra favoritar hoje?
        </label>
        <input 
          placeholder='https://'
          type='url' 
          required
          name='link' 
        />
        <textarea
          placeholder='Muito irado esse link falando de #javascript'
          name='text'
        />
        <button 
          type='submit'
          disabled={publishing ? true : false}
        >
          {
            publishing
              ? <img src='/load.gif' alt='Loading...' />
              : "Publicar"
          }
        </button>
      </form>
      <Location locationUser={geolocation} onClick={handleLocationUser}>
        <CgPin />
        Localização {geolocation ? 'ativada' : 'desativada'}
      </Location>
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  height: 200px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  position: relative;

  @media (max-width: 700px){
    border-radius: 0;
  }

  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  form{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 300;
    flex-grow: 1;

    label{
      font-size: 20px;
      line-height: 24px;
      color: #707070;
      margin-bottom: 10px;
    }
    input,textarea{
      width: 100%;
      height: 30px;
      background: #EFEFEF;
      border-radius: 5px;
      border: none;
      margin-bottom: 5px;
      outline:none;
      padding: 5px;
      font-size: 15px;
      line-height: 18px;
      color: #949494;
    }
    textarea{
      height: 65px;
      resize: none;
    }
    button{
      width: 112px;
      height: 31px;
      background: #1877F2;
      border-radius: 5px;
      border: none;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #FFFFFF;
      align-self: flex-end;
      margin-top: 5px;

      img{
        height: 40px;
        width: auto;
        margin-top: -10px;
      }
    }
  }
`;

const Location = styled.button`
  font-family: 'Lato',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  border: none;
  background: transparent;
  color: ${props => props.locationUser ? '#238700' : '#707070'};
  position: absolute;
  bottom: 25px;
  left: 85px;

  svg{
    font-size: 13px;
    margin-right: 3px;
  }
  :focus{
    outline: transparent;
  }
`;
