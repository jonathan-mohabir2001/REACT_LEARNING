import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
// the store must be imported. 
import { Provider } from 'react-redux';

// this statement imports provider.
// provider allows for the store to accessed by app.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider is wrapped around all of the rendering to allow for the store to be accessed by app.js
  // Give the provider e
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
