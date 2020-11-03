import React,{useState,useContext} from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import {AiFillDelete} from 'react-icons/ai';
import {HiPencil} from 'react-icons/hi';
import axios from 'axios';
import {useLocation,useHistory} from 'react-router-dom';

import UserContext from '../context/UserContext';

export default function ButtonsPost({post}) {
  const [modalIsOpen,setIsOpen] = useState(false);
  const [loading,setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const history = useHistory();
  const {pathname} = useLocation();

  function deletePost(post){
    setLoading(true);
    axios
      .delete(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${post.id}`,{headers: {'user-token': user.token}})
      .then(() => {
        setIsOpen(false);
        setLoading(false)
        history.push(pathname);
      })
      .catch(() => {
        setIsOpen(false);
        setLoading(false);
        alert("Não foi possível excluir o post");
      })
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }

  return(
    <ContainerButtons>
      <HiPencil />
      <AiFillDelete onClick={openModal} />
      <Modal
          isOpen={modalIsOpen}
          className='modal'
      >
        <Alert>
          <label>Tem certeza que deseja excluir essa publicação?</label>
          {!loading && <button className='back' onClick={closeModal}>Não, voltar</button>}
          <button className='confirm' onClick={() => deletePost(post)} disabled={loading ? true : false}>
            {loading
              ? <img src='/load.gif' alt='Loading...' />
              :'Sim, excluir'
            }
          </button>
        </Alert>
      </Modal>
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
    .modal{
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(255, 255, 255, 0.9);
      color: #FFFFFF;
      opacity: 1;
    }
`;

const Alert = styled.div`
  background: #333333;
  border-radius: 50px;
  width: 600px;
  max-width: 100%;
  height: 240px;
  position: fixed;
  top: calc(50% - 120px);
  left: calc(50% - 300px);
  font-family: 'Lato',sans-serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  padding: 50px 100px 50px 100px;

  label{
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
    margin-bottom: 30px;
    display: block;
  }

  button{
    font-size: 18px;
    line-height: 22px;
    border-radius: 5px;
    width: 134px;
    height: 37px;
    border: none;
  }
  .back{
    background: #FFFFFF;
    color: #1877F2;
    margin-right: 15px;
  }
  .confirm{
    background: #1877F2;
    color: #FFFFFF;
    img{
      height: inherit;
      width: auto;
    }
  }
`;
