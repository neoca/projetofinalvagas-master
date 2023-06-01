import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

const mainRoot = document.getElementById('root');
const CaroselRoot = document.getElementById('Carosel-root');

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
