import React, {useContext} from 'react';
import styled from 'styled-components';

import UserContext from '../context/UserContext';
import {mediaMobile} from './style/media'

export default function FormLogin(props) {
  const { register, setRegister } = props;
  const { SubmitLogIn, SubmitSingUp, sendRequest, setSendRequest } = useContext(UserContext);

  return (
    <ContainerLogin
      onSubmit={
        register ? SubmitSingUp : SubmitLogIn
      }
    >
      <input 
        type='email' 
        placeholder='e-mail'
        name="email"
        required 
      />
      <input 
        type='password' 
        placeholder='password'
        name='password'
        required 
      />
      { register && 
        <>
          <input 
            type='text' 
            placeholder='username'
            name='username'
            required 
          />
          <input 
            type='url' 
            placeholder='picture url'
            name='pictureUrl'
            required 
          />
        </>
      }
      <button 
        type='submit' 
        disabled={sendRequest ? true : false}
      >
        {sendRequest
          ? <img src='/load.gif' alt='Loading...' />
          : register 
            ? "Sing Up" 
            : "Log in" 
        }
      </button>
      <span onClick={() => {
        setRegister(!register)
        setSendRequest(false)
      }}>
        { 
        register 
          ? "Switch back to log in" 
          : "First time? Create an account!"
        }
      </span>
    </ContainerLogin>
  );
};

const ContainerLogin = styled.form`
  background: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100vh;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  font-size: 25px;
  text-align: center;

  ${mediaMobile}{
    height: calc(100% - 280px);
    width: 100%;
    justify-content: flex-start;
    padding-top: 50px;
  }

  input {
      padding-left: 5px;
      color: #9F9F9F; 
    }

    input, button {
      width: 80%;
      margin: 5px auto;
      height: 40px;
      border-radius: 6px;
      border: none;
    }

    button {
      background: #1877F2;
      color: #fff;

      img{
        height: 40px;
        width: auto;
        margin-top: -10px;
      }
    }

    span {
      font-family: 'Lato', sans-serif;
      font-size: 14px;
      text-decoration: underline;
      font-weight: 400;
      padding-top: 5px;
      display: block;
      color: #fff;
    }
`;

