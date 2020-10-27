import React, { useState } from 'react';
import styled from 'styled-components';

import FormLogin from './FormLogin';

export default function Login() {
  const [ register, setRegister ] = useState(false);



  return (
    <>
      <Container>
          <h1>linkr</h1>
          <h3>save, share and discover<br /> the best links on the web </h3>
      </Container>
      <FormLogin 
          register={register} 
          setRegister={setRegister}
      />
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

