import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

import { BrowserRouter } from 'react-router-dom';
// in order to use routing within react, browser router must be imported.

/* there are different ways to route, but for ease of coding the App.js component
   will be wrapped around the BrowserRouter tags. 

   This will allow for the children of browserRouter to be used as well. 
   Such as: Routes and route. 
*/

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
