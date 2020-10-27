import React from 'react';
import styled from 'styled-components';

import Header from './Header';

export default function Timeline() {
    

    return (
        <Container>
            <Header />
        </Container>
    );
}

const Container = styled.div`
    background: #333333;
    width: 100vw;
    height: 100vh;
`;
