import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

const mainRoot = document.getElementById('root');
const CaroselRoot = document.getElementById('Carosel-root');
const BlogRoot = document.getElementById('Blog-root');

// Transpilação do JSX
const transpiledApp = React.createElement(App);

ReactDOM.render(
  transpiledApp,
  mainRoot
);

ReactDOM.render(
  <React.StrictMode>
    <div id="Carosel-root"></div>
  </React.StrictMode>,
  CaroselRoot
);


ReactDOM.render(
  <React.StrictMode>
    <div id="Blog-root"></div>
  </React.StrictMode>,
  BlogRoot
);