import React, { useState } from 'react';
import styled from 'styled-components';

import FormLogin from './FormLogin';

export default function Login() {
  const [ register, setRegister ] = useState(false);



  return (
    <Container className='page'>
      <ContainerLogo>
          <h1>linkr</h1>
          <h3>save, share and discover the best links on the web </h3>
      </ContainerLogo>
      <FormLogin 
          register={register} 
          setRegister={setRegister}
      />
    </Container>
  );
};

const ContainerLogo = styled.div`
  height: 100vh;
  width: 50%;
  padding-left: 7%;
  color: #fff;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

  @media (max-width: 700px){
    height: 280px;
    width: 100%;
    align-items: center;
    padding: 10px 50px;
    background: #151515;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h1{
      font-size: 76px;
      line-height: 84px;
    }
    h3{
      font-size: 23px;
      line-height: 34px;
      text-align: center;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: #151515;
  width: 100vw;
  height: 100vh;

  @media (max-width: 700px){
    flex-direction: column;
    background: #333333;
  }
`;

