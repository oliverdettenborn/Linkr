import React,{useContext, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import ReactHashtag from 'react-hashtag';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import UserContext from '../context/UserContext';
import ButtonsPost from './ButtonsPost';

export default function InfoPost({post,username,id}) {
    const { text, link, linkTitle, linkDescription, linkImage, id: idPost} = post;
    const history = useHistory();
    const { user } = useContext(UserContext);
    const [ auxText, setAuxText ] = useState(text);
    const [ edit, setEdit ] = useState(false);
    const refInput = useRef();

    function toggleEdit() {
        setEdit(!edit);
    }

    useEffect(() => {
        edit && refInput.current.focus();
    },[edit]);

    function editTextPost(event){
        event.preventDefault();
        const {textDescription} = event.target.elements;
        const dataEdit = {"text": textDescription.value};
        const request = axios.put(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/${idPost}`, dataEdit, {headers: {'user-token': user.token}});
        request.then(reply => {
            setEdit(!edit);
        })
        .catch(err => {
            setAuxText(text);
            alert('Não foi possível salvar as alterações.');
        })
    }

    function escKeyDown(event) {
        if(event.key === "Escape") {
            toggleEdit();
            setAuxText(text);
        }
    }

    return (
        <ContainerInfos edit={edit}>
            {(id === user.user.id) && <ButtonsPost post={post} toggleEdit={toggleEdit} />}
            <Link to={`/user/${username}/${id}`}>
                <h1>{username}</h1>
            </Link>
            
            {edit 
                ?   <form onSubmit={editTextPost}>
                        <input 
                            type="text" 
                            name="textDescription" 
                            value={auxText} 
                            ref={refInput} 
                            onChange={event => setAuxText(event.target.value)}
                            onKeyDown={event => escKeyDown(event)}
                            disabled={edit ? false : true}>
                        </input>
                    </form>
                :   <p>
                        <ReactHashtag 
                            renderHashtag={hashtag => (
                                <Hashtag onClick={() => history.push(`/hashtag/${hashtag.substr(1)}`)}>{hashtag}</Hashtag>
                            )}   
                        >
                            {auxText}
                        </ReactHashtag>
                    </p>
            
            }
            
            

            <LinkBox href={link} target='_blank'>
                <div>
                    <h1>{linkTitle}</h1>
                    <p>{linkDescription}</p>
                    <span>{link}</span>
                </div>
                <img src={linkImage} alt={linkTitle} />
            </LinkBox>
        </ContainerInfos>
    )
};

const ContainerInfos = styled.div`
    padding-left: 15px;
    width: 100%;
    position: relative;

    & > h1 {
        font-size: 19px;
        line-height: 23px;

        &:hover {
            cursor: pointer;
        }
    }

    > p {
        font-size: 17px;
        line-height: 20px;
        color: #B7B7B7;
        padding-top: 10px;
    }
    input {
        border-radius: 7px;
        padding: 5px;
    }
`;

const LinkBox = styled.a`
    background: #171717;
    border: 1px solid #4D4D4D;
    border-radius: 10px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    &:hover{
        cursor: pointer;
    }

    div {
        padding: 18px;
        h1 {
            font-size: 16px;
            line-height: 19px;
            color: #CECECE;
            overflow-wrap: break-word;
            word-break: break-all;
        }
        p {
            font-size: 11px;
            line-height: 13px;
            color: #9B9595;
            margin: 10px auto;
            overflow-wrap: break-word;
            word-break: break-all;
        }
        span {
            font-size: 11px;
            line-height: 13px;
            color: #CECECE;
            padding-bottom: 10px;
            overflow-wrap: break-word;
            word-break: break-all;
        }
        @media (max-width: 700px){
            padding: 10px 5px 10px 10px;
            h1{
                font-size: 11px;
                line-height: 13px;
            }
            p,span{
                font-size: 9px;
                line-height: 10px;
                padding: 0;
            }
            p{
                margin: 5px auto;
            }
        }
    }
    
    img {
        width: 150px;
        height: auto;
        object-fit: cover;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }
    @media (max-width: 700px){
        img{
            width: 95px;
        }
    }
`;

const Hashtag = styled.span`
    font-weight: bold;
    color: #fff;
`;
