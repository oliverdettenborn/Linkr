import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Header() {
    const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAAwMDD29vbm5ubIyMj7+/v09PQsLCzMzMy2trZISEitra2GhobQ0ND5+fnAwMAeHh6UlJR6enrX19dpaWk5OTmAgIBBQUGcnJwLCwtcXFxVVVXs7OxXV1dKSkqlpaVwcHAaGhomJiaFhYXe3t41NTUTExOCOMemAAAFD0lEQVR4nO3dCXraMBAFYAsDcYBAAqENS1iaht7/hm1KEuIiG2vmiRm5859A77OtXXKWGWOMMcYYY4wxxhhjjDHG/F9ueoPpfP106HQ6h+F6Ph30bqSLBPS6Wzmf1e5VumgIj3eFN95RcfcoXUCe/uipJt7R06gvXUyy/mJ5Md+b5SLRjING8Y4G0oUl6G4CAjq36UoXOFTIA0zyMX4PDujcd+lCB8j97d8lq1y64E31t6SAzm1TqVOHxIDODaWL3syaHNC5tXThm6BUMicz6eJfFt5MlKlvNJ6ZAZ3T3vTTa5kPymubETugcyPpEHUmD4CED5ob/ikgoHNT6RjVckhA5/Q+xB0o4UI6SKVfoIRL6SBVxqCAzvWko1SYwRJq7bvVTRuGedE5jHqEBXRO5ywqoj/zYScdxgv3GTq3lw7jxRn5/kvlSHjSASZ80dituUH0uj9pXHvLoQmfpeN4QJ/hUuMz7H8DJiw0fodZ2FJMva10GK85MOFcOoxX+1t8zBTG0Z10GC9kv1TnKL8HTHgvHcar/aOn19YnfG62t6QRnYsXkxdYQK3T3rhu20E6SgXq8v05retPuG7bSjpKhTtYQp2dtizbwxJqfYa4mqaQjuKH7NOMpcN4IccWOve4Icf4KpuLHNelce6Hxpko7HypzSZK6F/elt/cYSIdxwc516azyW//TNQtMKHOrQr8bYknOsf4Ga6q+SYdpQLuQ9T5GSI/RJ2f4R+whNJBKu1BAXWuPL1BvaZqX1LUvq8H6Rg1MMtPOhee3iGaxIPObXvvEFtMb6VD1OMPMHQOK074D1FxRXrETigd4CLa8dETnTtpvuJ2vxUfJ3l3z0yo/nQeexysdOz7Rc5czVe6vv0Vr6rZSBe/gZ+shDqXZMp4VY3+iibLuqyE+iuajDe+0DrJVsY5kK/1SFcZZ4+izj2JZxgJpYveEH07tN5JtjL6GFH58P6EegJK6TYaD+qUm+rbFEr6tIdYqJ5kK6P13BJpKo4oU26pVKRHfUJCldsvqoVv3E/ups/Q+jSdevRT4L2J0sUlCHtPdR4huSBky3BHurAkIXPDWjdf1Gv7Da1hq/rqF5y8Qna2JzNsKgmZdLOEOlnCr5KYCD5jCS2hfiEJkxsc/tX+ujRkYjjNhCErNElNs30KGVskOIeRha0jpjWT+OFHQMJlQtPdn8Im2/Rv9joTuhKc3Cg/fAPfTOOhyio3O8p50uU0lZ5Nb0/e2rYe6N/WNub9/MG5zUBxtZr3MFe2zQcqP8lJbwY8kD8faDuuPp6FtO/NQirqqz7iLqYpm6kYcnSnyFs9//Ug/ffAfIS8HtlvuJP7JMf76PGO5iLLGs8L6E0fl0yvPVc1Rl4R0czqig9ysotZuVTrLK7TE+jGahuamMXvnAu8nmWbuG1kL37jcNk2XmfnXubzO3eIk/EWeYcQV4HPGPhr2PjW2O7cRLL+rDIDzgfco37kBIaan8uRl61jzSGPsXuQzlGjAPQAkDdaxsC+JRN5gVcczD4O7zDhdfBeVNz1zvE8cQJyD9dfB6fR4F4BcR2ciyaky95Q+xPS233k/xxionfCkX8diYk+lEqjKuVUptz/pF8LPSHyVtmY6Kc1NI57fegJpWcOm6LvqGp/whT63W/o3TZN84d16KOLoXTRG6L/SaH9zxD5/9uY6Ocz258Q97P0uOg3hmyLTgoK/bdJGmOMMcYYY4wxxhhjjDHG/PEbtDFVL+Y6ZoEAAAAASUVORK5CYII=';
    const [state, setstate] = useState(false);

    return (
        <>
            <HeaderStyled>
                <h1>linkr</h1>
                <div onClick={() => setstate(!state)}>
                    {state 
                        ? <FiChevronUp />
                        : <FiChevronDown />
                    }
                    <img src={image} />
                </div>
            </HeaderStyled>
            
            <Nav state={state} >
                <span>My posts</span>
                <span>My likes</span>
                <span>Logout</span>
            </Nav>
            
        </>
    );
}

const HeaderStyled = styled.header`
  background: #151515;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 75px;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
     font-family: 'Passion One', cursive;
     font-weight: bold;
     font-size: 50px;
     line-height: 54px;
     letter-spacing: 0.05em;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 25px;
    }

    img {
        width: 40px;
        height: auto;
        border-radius: 50%;
        margin: 10px;
    }
  }
  
`;

const Nav = styled.nav`
    background: #171717;
    border-bottom-left-radius: 10px;
    padding: 15px;
    position: fixed;
    top: 75px;
    right: ${(props) => props.state ? '0px' : '-200px'};
    text-align: center;
    transition: all 200ms linear;

    span {
        display: block;
        font-family: 'Lato', sans-serif;
        font-size: 17px;
        margin: 8px;
        line-height: 21px;
        font-weight: bold;
        color: #fff;
        letter-spacing: 0.05em;
    }
`;   