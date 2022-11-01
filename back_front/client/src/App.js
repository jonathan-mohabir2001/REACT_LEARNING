import './App.css';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <h1>Hello there</h1>
        <h3>This application will allow user to upload stuff to a backend. </h3>
      </header>

      <h1>Routing down below...</h1>

      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

function Form() {
  return (
    <div>
      <h2>Form below</h2>

      <div>
        <form></form>
      </div>
    </div>
  );
}
export default App;
