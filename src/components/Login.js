import React from 'react';
import styled from 'styled-components';

export default function Login() {

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
        <button type='submit'>Log in</button>
        <button>First time? Create an account! </button>
      </form>
    </ContainerLogin>
  </>
  )
};

const Container = styled.aside`
  background: #151515;
  width: 100vw;
  height: 100vh;
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

`;

