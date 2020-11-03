import styled from 'styled-components';

const Container = styled.div`
    background: #171717;
    width: 100%;
    margin: 30px auto;
    border-radius: 16px;
    font-family: 'Lato', sans-serif;
    display: flex;
    color: #fff;
    padding: 15px;

    @media (max-width: 700px){
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
`;

const ContainerInfos = styled.div`
    padding-left: 15px;
    width: 100%;
    position: relative;

    > h1 {
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
`;

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
    }
    
    img {
        width: 150px;
        height: auto;
        object-fit: cover;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }
`;

const Hashtag = styled.span`
    font-weight: bold;
    color: #fff;
`;

const LikeStyled = styled.div`
    svg {
        font-size: 25px;
        margin-top: 10px;
        color: ${props => props.like ? "red" : "#fff"};
    }
`;

export {
  LikeStyled,
  Hashtag,
  LinkBox,
  ContainerInfos,
  Container,
  ContainerButtons
}