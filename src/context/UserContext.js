import React, { useState,createContext } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props){
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('@linkr: JWT_TOKEN')));
  const [sendRequest,setSendRequest] = useState(false);
  const history = useHistory();

  function submitLogIn(event){
    event.preventDefault();
    setSendRequest(true);
    const {email,password} = event.target.elements
    const dataLogin = {
      "email": email.value,
      "password": password.value
    }
    axios
      .post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_in",dataLogin)
      .then(response => {
        setUser(response.data);
        localStorage.setItem('@linkr: JWT_TOKEN',JSON.stringify(response.data));
        history.push('/timeline');
        setSendRequest(false);
      })
      .catch(err => {
        setSendRequest(false);
        alert('Email/senha incorretos');
      })
  }

  function submitSingUp(event){
    event.preventDefault();
    setSendRequest(true);
    const {email,password,username,pictureUrl} = event.target.elements
    const dataSingUp = {
      "email": email.value,
      "password": password.value,
      "username": username.value,
      "pictureUrl": pictureUrl.value
    }
    axios
      .post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_up", dataSingUp)
      .then(response => {
        setUser(response.data);
        history.push('/timeline');
        setSendRequest(false);
      })
      .catch(err => {
        setSendRequest(false);
        alert("O email inserido já está cadastrado")
      })

  }

  return (
    <UserContext.Provider 
      value={
        {
          user,
          submitLogIn,
          submitSingUp,
          sendRequest,
          setSendRequest
        }
      }
    >
      {props.children}
    </UserContext.Provider>
  )
}