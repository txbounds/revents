import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import App from './app/layout/App.jsx';


const rootEL = document.getElementById('root');

function render() {
ReactDOM.render(<App />, rootEL)
}


if(module.hot) {
  module.hot.accept('./app/layout/App', function() {
    setTimeout(render)
  });
}
 