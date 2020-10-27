import React from 'react';
import styled from 'styled-components';

import StylePages from './StylePages';
import CreatePost from './CreatePost';

export default function Timeline() {
    return (
        <StylePages title='timeline'>
            <CreatePost />
            {/* adicionar aqui o componente com a timeline dos posts */}
        </StylePages>
    );
}