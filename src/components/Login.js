import React, { useState } from 'react';
import styled from 'styled-components';

export default function Login() {
  const [ register, setRegister ] = useState(false);

  return (
    <>
    <Container>
        <h1>linkr</h1>
        <h3>save, share and discover<br /> the best links on the web </h3>
    </Container>
    <ContainerLogin>
      <form>
        <input type='email' placeholder='e-mail' />
        <input type='password' placeholder='password' />
        { register && 
          <>
            <input type='text' placeholder='username'/>
            <input type='text' placeholder='picture url'/>
          </>
        }
        
        <button type='submit'>{ register ? "Sing Up" : "Log in" }</button>
      <span onClick={() => setRegister(!register)}>{ register ? "Switch back to log in" : "First time? Create an account!"}</span>
      </form>
    </ContainerLogin>
  </>
  );
};

const Container = styled.aside`
  background: #151515;
  width: 100vw;
  height: 100vh;
  padding-left: 7%;
  color: #fff;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 33%;
  h1{
    font-family: 'Passion One', cursive;
    font-size: 106px;
    letter-spacing: 0.080em;
  }
  h3{
    font-family: 'Oswald', sans-serif;
    font-size: 43px;
    line-height: 64px;
  }
`;

const ContainerLogin = styled.div`
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

  form {
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
  }

  

`;

