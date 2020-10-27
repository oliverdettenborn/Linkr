import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import CreatePost from './CreatePost';

export default function Timeline() {
    return (
        <>
            <Header />
            <Container>
                <CreatePost />
            </Container>
            {/* hashtags */}
        </>
    );
}

const Container = styled.div`
    width: 610px;
    height: 100vh;
    margin: 95px 420px 0 auto;
`;
