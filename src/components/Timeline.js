import React from 'react';
import styled from 'styled-components';

import StylePages from './StylePages';
import CreatePost from './CreatePost';

export default function Timeline() {
    return (
        <StylePages>
            <CreatePost />
            {/* adicionar aqui o componente com a timeline dos posts */}
        </StylePages>
    );
}

const Container = styled.div`
    width: 610px;
    height: 100vh;
    margin: 95px 420px 0 auto;
`;
