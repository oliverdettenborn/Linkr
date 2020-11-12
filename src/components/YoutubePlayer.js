import getYouTubeID from 'get-youtube-id';
import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

export default function YoutubePlayer({ link }) {
    const id = getYouTubeID(link);

    return (
        <Player>
            <YouTube
            videoId={id}
            onReady={(e) => e.target.pauseVideo()}
            opts={{
            width: '100%',
            height: '400px',
            playerVars: {
                controls: 1,
                start: 0,
            },
            }}>
            </YouTube>
            <p>{link}</p>
        </Player>
    );
}

const Player = styled.div`
    padding: 15px;
    width: 100%;
    p{
        margin-top: 12px;
    }
`;