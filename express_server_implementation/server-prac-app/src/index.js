import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// root constant set to render content from app.js
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // render method created to load app.js 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
