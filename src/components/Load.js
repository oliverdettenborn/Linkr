import React from 'react';
import styled from 'styled-components';

export default function Load() {
  return <Spinner />
};


const Spinner = styled.div`
  background-image: url('/loadBig.gif');
  background-position: center;
  background-repeat: no-repeat;
  width: 400px;
  height: 400px;
  margin: 15px auto;
`;