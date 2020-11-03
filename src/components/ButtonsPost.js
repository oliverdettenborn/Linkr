import React from 'react';
import styled from 'styled-components';
import {AiFillDelete} from 'react-icons/ai';
import {HiPencil} from 'react-icons/hi';

export default function ButtonsPost(props) {
  return(
    <ContainerButtons>
      <HiPencil />
      <AiFillDelete />
    </ContainerButtons>
  )
};

const ContainerButtons = styled.div`
    width: 45px;
    height: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 18px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg{
        cursor: pointer;
    }
`;
