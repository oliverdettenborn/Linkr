import React, {useContext} from 'react';
import styled from 'styled-components';

import UserContext from '../context/UserContext';

export default function FormLogin(props) {
  const {register, setRegister} = props;
  const {SubmitLogIn,SubmitSingUp,sendRequest,setSendRequest} = useContext(UserContext);

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
        { register ? "Sing Up" : "Log in" }
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
  position: fixed;
  top: 0;
  right:0;
  background: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100vh;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  font-size: 25px;
  margin: 0 auto;
  text-align: center;

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

