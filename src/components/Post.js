import React,{ useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { IoIosClose } from 'react-icons/io';
import { mediaMobile } from './style/media';
import InfoPost from './InfoPost';
import LikePost from './LikePost';
import MapLocationUser from './MapLocationUser';

export default function Post({post}) {
    const { username, avatar, id } = post.user;
    const [ modalIsOpen, setIsOpen ] = useState(false);

    function openMap() {
        setIsOpen(true);
    }

    return (
        <Container>
            <div>
                <Link to={`/user/${id}`}>
                    <img src={avatar} alt={username} />
                </Link>
                <LikePost post={post}/>
            </div>
            <InfoPost post={post} username={username} id={id} openMap={openMap} />
            <Modal
                isOpen={modalIsOpen}
                className='modal'
            >
                <Map>
                    <h1>
                        {`${username}’s location`}
                        <IoIosClose onClick={() => setIsOpen(false)} />
                    </h1>
                    <MapLocationUser geolocation={post.geolocation} />
                </Map>
            </Modal>
        </Container>
    );
}

const Container = styled.div`
    background: #171717;
    width: 100%;
    margin: 30px auto;
    border-radius: 16px;
    font-family: 'Lato', sans-serif;
    display: flex;
    color: #fff;
    padding: 15px;

    ${mediaMobile}{
        border-radius: 0;
    }
    > div:first-child {
        text-align: center;
        a {
            > img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
        span {
            font-size: 11px;
            color: #fff;
        }
        .tooltip {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 6px;
            color: #505050;
        }
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

const Map = styled.div`
    width: 600px;
    height: 300px;
    background: #333333;
    border-radius: 50px;
    position: fixed;
    top: calc(50% - 150px);
    left: calc(50% - 300px);
    padding: 15px 40px 33px 37px;
    font-family: 'Oswald',sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 50px;
    color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h1{
        text-transform: capitalize;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ${mediaMobile}{
        width: 100%;
        left: 0;
        font-size: 20px;
    }
`;
