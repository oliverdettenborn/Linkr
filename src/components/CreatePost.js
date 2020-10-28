import React,{useContext,useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from '../context/UserContext';

export default function CreatePost(props) {
  const {user} = useContext(UserContext);
  const [publishing, setPublishing] = useState(false);
  const tokenUsuario = {"User-Token": user.token};

  function submitPost(event){
    event.preventDefault();
    setPublishing(true)

    const {link,text} = event.target.elements
    
    const dataPost = {"link": link.value, "text": text.value};

    axios
      .post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts",dataPost,{headers: tokenUsuario})
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
      <img src={user.user && user.user.avatar} />
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
              ? <img src='/load.gif' />
              : "Publicar"
          }
        </button>
      </form>
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
