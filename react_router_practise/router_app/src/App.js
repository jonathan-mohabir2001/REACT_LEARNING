/*
This react application will focus on routing between different pages. 
Seperate pages will render as their own components.  
*/
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <h1>Some example routing below!</h1>
      <Routes>
        <Route path="/" element={<Home />}>
          {' '}
          This is the home route!
        </Route>

        <Route path="/about" element={<About />}>
          Click me to to about
        </Route>
        <Route path="/contact" element={<Contact />}>
          Click this to go to contact
        </Route>
      </Routes>
    </div>
    // Within the routes tag, each route is defined by passing the url path/
    // the element then points to which component must be returned.
    // the url paths are passed inside the url, which easily switch pages.
  );
}

export default App;
