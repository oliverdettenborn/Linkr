import React from 'react';
import styled from 'styled-components';

import Header from './Header';

export default function StylePages(props) {
    return (
        <>
            <Header />
            <Container>
                {props.children}
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 610px;
    height: 100vh;
    margin: 105px 420px 0 auto;
`;