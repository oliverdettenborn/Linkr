import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.YTConfig = {
    host: 'https://www.youtube.com' 
}

ReactDOM.render(<App />,document.getElementById('root'));
