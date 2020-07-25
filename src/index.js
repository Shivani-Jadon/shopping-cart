import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  // StrictMode is a tool for highlighting potential problems in an application.
  // It fails to automatically detect render side effects so it will render React components twice
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


